import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MarkdownItPlantuml from 'markdown-it-plantuml';

export default defineUserConfig({
  // Замінити на назву свого репозиторія
  base: "/db-labs/",

  lang: "en-US",
  // Замінити на назву свого проєкту
  title: "Система управління відкритими даними",
  description: "Лабораторні роботи",

  theme,

  extendsMarkdown: md =>{
    md.use(MarkdownItPlantuml);
  },
});
