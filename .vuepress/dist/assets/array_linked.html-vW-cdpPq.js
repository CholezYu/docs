import{_ as p,r as i,o as r,c as u,a as c,w as a,b as l,d as n,e as s}from"./app-pTS-tH6_.js";const k="/assets/array_definition-lbO9gF1W.png",d="/assets/linkedlist_definition-PLnmZ0qk.png",m={},v=l('<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组是一种线性数据结构。数组元素被存储在连续的内存空间中，根据数组内存地址（首元素内存地址）和索引可以计算出元素的内存地址。<strong>索引本质上是内存地址的偏移量</strong>，也就是说通过<strong>索引</strong>可以直接访问数组元素，所以数组访问元素的效率非常高。</p><figure><img src="'+k+'" alt="数组定义与存储方式" tabindex="0" loading="lazy"><figcaption>数组定义与存储方式</figcaption></figure><p><strong>数组的缺点</strong>：</p><ul><li><p>插入与删除效率低：当数组元素较多时，插入与删除操作需要移动大量元素。</p></li><li><p>如果插入元素后超出数组长度范围，会造成元素丢失；而删除元素会造成部分内存空间浪费。</p></li><li><p>数组的长度是不可变的，如果要扩容数组，需要建立一个更大的数组，把原数组元素依次复制到新数组。</p></li><li><p>数组的存储空间是连续的，当数组较大时，如果空间碎片较多，内存可能无法提供足够大的连续空间。</p></li></ul>',5),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ArrayList"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},[n("span",{class:"token builtin"},"Array")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  array`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("array"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("array "),n("span",{class:"token operator"},"="),s(` array
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// 冒泡排序"),s(`
  `),n("span",{class:"token function"},"bubbleSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// 选择排序"),s(`
  `),n("span",{class:"token function"},"selectionSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// 插入排序"),s(`
  `),n("span",{class:"token function"},"insertionSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// 快速排序"),s(`
  `),n("span",{class:"token function"},"quickSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token comment"},"// 希尔排序"),s(`
  `),n("span",{class:"token function"},"shellSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=l('<h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2><p>链表是一种线性数据结构，链表的每个元素都是一个节点对象，各节点通过 “指针” 连接，指针指向下一个节点的内存地址，通过指针可以访问下一个节点。在链表中插入与删除节点非常方便，只需要改变指针的指向即可，所以链表插入与删除元素的效率非常高。链表的元素节点被分散存储在内存空间中，它们的内存地址无须连续，所以不用担心空间碎片的问题。</p><figure><img src="'+d+'" alt="链表定义与存储方式" tabindex="0" loading="lazy"><figcaption>链表定义与存储方式</figcaption></figure><p><strong>链表的缺点</strong>：</p><ul><li><p>访问效率低：链表需要从头节点开始，向后遍历，直到找到目标节点。</p></li><li><p>占用内存大：链表除了需要存储节点值，还要存储节点指针。如果节点数据越多，指针的内存影响就越小。</p></li></ul>',5),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  val`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(`
  next`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("LinkedList"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  head`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 向链表尾部添加节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedNode"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"++"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 插入节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedNode"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"let"),s(" prev"),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        prev `),n("span",{class:"token operator"},"="),s(` current
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      prev`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` node
      node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` current
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"++"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 查找对应索引的节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   */`)]),s(`
  `),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` current
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 修改对应索引的节点值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),s(`
    node`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 移除对应索引的节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   */`)]),s(`
  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" prev"),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      current `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        prev `),n("span",{class:"token operator"},"="),s(` current
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      prev`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      current `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"--"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 遍历链表
   */`),s(`
  `),n("span",{class:"token function"},"each"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双向链表","aria-hidden":"true"},"#"),s(" 双向链表")],-1),x=n("p",null,"双向链表每个元素节点都有两个指针，分别指向上一个节点和下一个节点。",-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  val`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(`
  prev`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  next`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("DoubleLinkedList"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  head`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  tail`),n("span",{class:"token operator"},":"),s(" LinkedNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 向链表尾部添加节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedNode"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` node
      node`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"++"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 插入节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedNode"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` node
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(` node
        node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` node
        node`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        node`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`prev
        node`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` current
        current`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` node
        current`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"++"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 查找对应索引的节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   */`)]),s(`
  `),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token comment"},"// 从前往后"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},">"),s(" index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` current
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 从后往前"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`prev
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` current
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 修改对应索引的节点值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"val"),s(` - 节点值
   */`)]),s(`
  `),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},")"),s(`
    node`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 移除对应索引的节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"index"),s(` - 索引值
   */`)]),s(`
  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" index "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"out of range"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("index "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        current `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`prev
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" index"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
        `),n("span",{class:"token punctuation"},"}"),s(`
        current`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
        current`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`prev
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("size"),n("span",{class:"token operator"},"--"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`val
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 遍历链表
   */`),s(`
  `),n("span",{class:"token function"},"each"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(_,T){const o=i("Tabs");return r(),u("div",null,[v,c(o,{id:"34",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:e,isActive:t})=>[s("TS")]),tab0:a(({value:e,isActive:t})=>[b]),_:1}),w,c(o,{id:"63",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:e,isActive:t})=>[s("TS")]),tab0:a(({value:e,isActive:t})=>[y]),_:1}),h,x,c(o,{id:"74",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:e,isActive:t})=>[s("TS")]),tab0:a(({value:e,isActive:t})=>[f]),_:1})])}const L=p(m,[["render",g],["__file","array_linked.html.vue"]]);export{L as default};
