import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface ItemData {
  slug: string;
  content: string;
  date?: string;
  isFeatured?: boolean;
  [key: string]: any; // For other metadata fields
}

export function getItemsFiles(type: string): string[] {
  const itemsDirectory: string = path.join(process.cwd(), 'src/data', type)
  return fs.readdirSync(itemsDirectory)
}

export function getItemData(itemIdentifier: string, type: string): ItemData {
  const itemsDirectory: string = path.join(`${process.cwd()}/src/data/${type}`)
  const itemSlug: string = itemIdentifier.replace(/\.md$/, '') // removes the file extension
  const filePath: string = path.join(itemsDirectory, `${itemSlug}.md`)
  const fileContent: string = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const itemData: ItemData = {
    slug: itemSlug,
    ...data,
    content,
  }

  return itemData
}

export function getAllItems(type: string): ItemData[] {
  const itemFiles: string[] = getItemsFiles(type)

  const allItems: ItemData[] = itemFiles.map((itemFile) => getItemData(itemFile, type))

  return allItems.sort((itemA, itemB) => (itemA.date && itemB.date && itemA.date > itemB.date ? -1 : 1))
}

export function getFeaturedItems(items: ItemData[]): ItemData[] {
  return items.filter((item) => item.isFeatured)
}