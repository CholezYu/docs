import{_ as l,r as p,o as u,c as i,a as c,w as a,d as n,e as s}from"./app-FhtxfEUk.js";const k="/assets/stack_operations-0c_Tc-fQ.png",r="/assets/queue_operations-tBIVaa5U.png",d={},m=n("h2",{id:"栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栈","aria-hidden":"true"},"#"),s(" 栈")],-1),v=n("p",null,[s("栈是一种遵循后进先出（LIFO，Last In First Out）的线性数据结构。将元素添加到栈顶称为 “入栈”，移除栈顶元素称为 “出栈”。栈可以通过 “数组” 或 “链表” 来实现，然而数组和链表可以在任意位置添加或删除元素，但是栈遵循后进先出（或先进后出）的原则，所以"),n("strong",null,"栈可以视为一种受限的数组或链表"),s("。")],-1),b=n("figure",null,[n("img",{src:k,alt:"栈的先入后出规则",tabindex:"0",loading:"lazy"}),n("figcaption",null,"栈的先入后出规则")],-1),y=n("p",null,"使用数组实现栈，可以将数组的尾部作为栈顶。入栈就是向数组尾部添加元素，出栈就是删除数组尾部的元素。",-1),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("Stack"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(" stack"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("stack"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack "),n("span",{class:"token operator"},"="),s(` stack
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 获取栈的值
   */`),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`stack
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 获取栈的长度
   */`),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"."),s(`length
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 入栈（向栈顶添加元素）
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 入栈的元素
   */`)]),s(`
  `),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 出栈（移除栈顶元素）
   */`),s(`
  `),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 访问栈顶元素
   */`),s(`
  `),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 遍历栈
   */`),s(`
  `),n("span",{class:"token function"},"each"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stack"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#队列","aria-hidden":"true"},"#"),s(" 队列")],-1),f=n("p",null,[s("队列是一种遵循先进先出（FIFO，First In First Out）的线性数据结构。向队尾添加元素称为 “入队”，移除队首元素称为 “出队”。队列也可以通过 “数组” 或 “链表” 来实现，所以"),n("strong",null,"队列也可以视为一种受限的数组或链表"),s("。")],-1),_=n("figure",null,[n("img",{src:r,alt:"队列的先入先出规则",tabindex:"0",loading:"lazy"}),n("figcaption",null,"队列的先入先出规则")],-1),g=n("p",null,"使用数组实现队列，可以将数组的尾部作为队尾，将数组的头部作为队首。入队就是向数组尾部添加元素，出队就是移除数组头部的元素。",-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("Queue"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"readonly"),s(" queue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue "),n("span",{class:"token operator"},"="),s(` queue
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 获取队列的值
   */`),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"val"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`queue
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 获取队列的长度
   */`),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"."),s(`length
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 入队（向队尾添加元素）
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 入队的元素
   */`)]),s(`
  `),n("span",{class:"token function"},"enqueue"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 出队（移除队首元素）
   */`),s(`
  `),n("span",{class:"token function"},"dequeue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 访问队首元素
   */`),s(`
  `),n("span",{class:"token function"},"front"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 遍历队列
   */`),s(`
  `),n("span",{class:"token function"},"each"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"优先级队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#优先级队列","aria-hidden":"true"},"#"),s(" 优先级队列")],-1),x=n("p",null,"优先级队列在插入操作时，需要比较元素的优先级，而不是先进先出，其他操作与普通队列相同。",-1),Q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("QueueNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  val`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(`
  priority`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" priority"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("priority "),n("span",{class:"token operator"},"="),s(` priority
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("PriorityQueue"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},[s("Queue"),n("span",{class:"token operator"},"<"),s("QueueNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" QueueNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"&&"),s(" node"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"&&"),s(" node"),n("span",{class:"token punctuation"},"."),s("priority"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},"."),s("priority"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 插入元素
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 元素值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"priority"),s(` - 元素优先级
   */`)]),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" priority"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"QueueNode"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},","),s(" priority"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 标记节点的优先级是否最低"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" lowest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("priority "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("priority"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token comment"},"// 优先级不是最低"),s(`
          lowest `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
          `),n("span",{class:"token keyword"},"break"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("lowest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 优先级最低，插入到最后"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function N(S,A){const o=p("Tabs");return u(),i("div",null,[m,v,b,y,c(o,{id:"12",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:t,isActive:e})=>[s("TS")]),tab0:a(({value:t,isActive:e})=>[h]),_:1}),w,f,_,g,c(o,{id:"29",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:t,isActive:e})=>[s("TS")]),tab0:a(({value:t,isActive:e})=>[T]),_:1}),q,x,c(o,{id:"40",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:t,isActive:e})=>[s("TS")]),tab0:a(({value:t,isActive:e})=>[Q]),_:1})])}const I=l(d,[["render",N],["__file","stack_queue.html.vue"]]);export{I as default};
