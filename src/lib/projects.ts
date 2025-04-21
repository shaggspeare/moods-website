import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Define interfaces for project data
interface ProjectData {
  id: string;
  title: string;
  contentHtml?: string;
  [key: string]: any; // For other metadata fields
}

const projectsDirectory: string = path.join(process.cwd(), 'src/data/projects')

export function getSortedProjectsData(): ProjectData[] {
  // Get file names under /projects
  const fileNames: string[] = fs.readdirSync(projectsDirectory)
  const allProjectsData: ProjectData[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id: string = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath: string = path.join(projectsDirectory, fileName)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<ProjectData, 'id'>)
    }
  })
  // Sort projects by id
  return allProjectsData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getProjectData(id: string): Promise<ProjectData> {
  const fullPath: string = path.join(projectsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the project metadata section
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
    ...(matterResult.data as Omit<ProjectData, 'id' | 'contentHtml'>)
  }
}