import { createContentLoader } from 'vitepress'
export default createContentLoader('monoblocks/*.md', {
  transform(rawData) {
    return rawData
      .filter(page => page.url !== '/monoblocks/') 
      .map(page => ({
        title: page.frontmatter.title,
        image: page.frontmatter.image,
        url: page.url
      }))
  }
})