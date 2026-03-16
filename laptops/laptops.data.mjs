
import { createContentLoader } from 'vitepress'

export default createContentLoader('laptops/*.md', {
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/laptops/') 
      .map(page => ({
        title: page.frontmatter.title,
        image: page.frontmatter.image,
        url: page.url
      }))
  }
})