import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Define interfaces for post data
interface PostData {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
  [key: string]: any; // For other metadata fields
}

const postsDirectory: string = path.join(process.cwd(), 'src/data/posts')

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  const allPostsData: PostData[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(postsDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<PostData, 'id'>)
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(): Array<{ params: { id: string } }> {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml: string = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<PostData, 'id' | 'contentHtml'>)
  }
}