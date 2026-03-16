import { createContentLoader } from 'vitepress'

export default createContentLoader('laptops/*/*.md', {
  transform(rawData) {
    return rawData.map(page => ({
      title: page.frontmatter.title,
      url: page.url
    }))
  }
})