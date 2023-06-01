import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
const prettyCodeOptions = {
  theme: "dark-plus",
  wrap: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    // shikiConfig: {
    //   // Choose from Shiki's built-in themes (or add your own)
    //   // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    //   theme: 'dark-plus',
    //   // Add custom languages
    //   // Note: Shiki has countless langs built-in, including .astro!
    //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    //   langs: [],
    //   // Enable word wrap to prevent horizontal scrolling
    //   wrap: true,
    // },
  },
});