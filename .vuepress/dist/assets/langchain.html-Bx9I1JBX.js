import{_ as p,r as o,o as r,c as u,a as l,w as s,d as n,e}from"./app-R_NxbkW3.js";const d={},k=n("h2",{id:"chatopenai",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#chatopenai","aria-hidden":"true"},"#"),e(" ChatOpenAI")],-1),m=n("p",null,"调用 DeepSeek 模型。",-1),_=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),e(" langchain_openai "),n("span",{class:"token keyword"},"import"),e(` ChatOpenAI
`),n("span",{class:"token keyword"},"from"),e(" dotenv "),n("span",{class:"token keyword"},"import"),e(` load_dotenv
`),n("span",{class:"token keyword"},"import"),e(` os

`),n("span",{class:"token comment"},"# 读取.env文件"),e(`
load_dotenv`),n("span",{class:"token punctuation"},"("),e("override"),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"True"),n("span",{class:"token punctuation"},")"),e(`
DEEPSEEK_API_KEY `),n("span",{class:"token operator"},"="),e(" os"),n("span",{class:"token punctuation"},"."),e("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DEEPSEEK_API_KEY"'),n("span",{class:"token punctuation"},")"),e(`
DEEPSEEK_BASE_URL `),n("span",{class:"token operator"},"="),e(" os"),n("span",{class:"token punctuation"},"."),e("getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DEEPSEEK_BASE_URL"'),n("span",{class:"token punctuation"},")"),e(`

openai_modal `),n("span",{class:"token operator"},"="),e(" ChatOpenAI"),n("span",{class:"token punctuation"},"("),e(`
    model`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"deepseek-flash"'),n("span",{class:"token punctuation"},","),e(`
    api_key`),n("span",{class:"token operator"},"="),e("DEEPSEEK_API_KEY"),n("span",{class:"token punctuation"},","),e(`
    base_url`),n("span",{class:"token operator"},"="),e("DEEPSEEK_BASE_URL"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},")"),e(`

response `),n("span",{class:"token operator"},"="),e(" openai_modal"),n("span",{class:"token punctuation"},"."),e("invoke"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"What is LangChain?"'),n("span",{class:"token punctuation"},")"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`# https://platform.deepseek.com/api_keys
DEEPSEEK_API_KEY=***
DEEPSEEK_BASE_URL=https://api.deepseek.com
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(b,h){const i=o("Py"),c=o("Tabs");return r(),u("div",null,[k,m,l(c,{id:"6",data:[{id:"<Py /> main.py"},{id:".env"}],"tab-id":"DeepSeek"},{title0:s(({value:a,isActive:t})=>[l(i),e(" main.py")]),title1:s(({value:a,isActive:t})=>[e(".env")]),tab0:s(({value:a,isActive:t})=>[_]),tab1:s(({value:a,isActive:t})=>[v]),_:1},8,["data"])])}const y=p(d,[["render",E],["__file","langchain.html.vue"]]);export{y as default};
