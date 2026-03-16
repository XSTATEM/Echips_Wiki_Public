import { createContentLoader } from 'vitepress'
export default createContentLoader('monoblocks/**/*.md', {
  transform(rawData) {
    return rawData
      .filter(page => page.frontmatter.line)
      .map(page => ({
        title: page.frontmatter.title,
        line: page.frontmatter.line,
        url: page.url
      }))
  }
})