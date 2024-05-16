import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as t,c as o,b as n,d as s,e as c,a as l}from"./app--EESnMco.js";const i={},u={class:"hint-container tip"},r=n("p",{class:"hint-container-title"},"提示",-1),k={href:"https://www.hello-algo.com",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="栈与队列" tabindex="-1"><a class="header-anchor" href="#栈与队列" aria-hidden="true">#</a> 栈与队列</h2><h3 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a> 栈 Stack</h3><p>栈是一种遵循后进先出（LIFO，Last In First Out）的线性数据结构。将元素添加到栈顶称为 “入栈”，移除栈顶元素称为 “出栈”。栈可以通过 “数组” 或 “链表” 来实现，然而数组和链表可以在任意位置添加或删除元素，但是栈遵循后进先出（或先进后出）的原则，所以<strong>栈可以视为一种受限的数组或链表</strong>。</p><p>使用数组实现栈，可以将数组的尾部作为栈顶。入栈就是向数组尾部添加元素，出栈就是删除数组尾部的元素。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> stack<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>stack<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> stack
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 获取栈的值
   */</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 获取栈的长度
   */</span>
  <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 判断栈是否为空
   */</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 入栈（向栈顶添加元素）
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 入栈的元素
   */</span>
  <span class="token function">push</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 出栈（移除栈顶元素）
   */</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 访问栈顶元素
   */</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 遍历栈
   */</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列-queue" tabindex="-1"><a class="header-anchor" href="#队列-queue" aria-hidden="true">#</a> 队列 Queue</h3><p>队列是一种遵循先进先出（FIFO，First In First Out）的线性数据结构。向队尾添加元素称为 “入队”，移除队首元素称为 “出队”。队列也可以通过 “数组” 或 “链表” 来实现，所以<strong>队列也可以视为一种受限的数组或链表</strong>。</p><p>使用数组实现栈，可以将数组的尾部作为栈顶。入栈就是向数组尾部添加元素，出栈就是删除数组尾部的元素。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Queue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> queue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>queue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> queue
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 获取队列的值
   */</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 获取队列的长度
   */</span>
  <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 判断队列是否为空
   */</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 入队（向队尾添加元素）
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 入队的元素
   */</span>
  <span class="token function">enqueue</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 出队（移除队首元素）
   */</span>
  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 访问队首元素
   */</span>
  <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 遍历队列
   */</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先级队列" tabindex="-1"><a class="header-anchor" href="#优先级队列" aria-hidden="true">#</a> 优先级队列</h3><p>优先级队列在插入操作时，需要比较元素的优先级，而不是先进先出，其他操作与普通队列相同。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">QueueNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
  priority<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> priority<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PriorityQueue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Queue<span class="token operator">&lt;</span>QueueNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 向队列中插入元素
   * <span class="token keyword">@param</span> <span class="token parameter">node</span> - 插入的元素
   */</span>
  <span class="token function">enqueue</span><span class="token punctuation">(</span>node<span class="token operator">:</span> QueueNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> priority <span class="token punctuation">}</span> <span class="token operator">=</span> node
    <span class="token keyword">const</span> queueNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueNode</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> priority<span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 标记节点的优先级是否最低</span>
      <span class="token keyword">let</span> lowest <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>queueNode<span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> queueNode<span class="token punctuation">)</span>
          <span class="token comment">// 优先级不是最低</span>
          lowest <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lowest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 优先级最低，插入到最后</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueNode<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组与链表" tabindex="-1"><a class="header-anchor" href="#数组与链表" aria-hidden="true">#</a> 数组与链表</h2><h3 id="数组-array-list" tabindex="-1"><a class="header-anchor" href="#数组-array-list" aria-hidden="true">#</a> 数组 Array List</h3><p>数组是一种线性数据结构。数组元素被存储在连续的内存空间中，根据数组内存地址（首元素内存地址）和索引可以计算出元素的内存地址。<strong>索引本质上是内存地址的偏移量</strong>，也就是说通过<strong>索引</strong>可以直接访问数组元素，所以数组访问元素的效率非常高。</p><p><strong>数组的缺点</strong>：</p><ul><li><p>插入与删除效率低：当数组元素较多时，插入与删除操作需要移动大量元素。</p></li><li><p>如果插入元素后超出数组长度范围，会造成元素丢失；而删除元素会造成部分内存空间浪费。</p></li><li><p>数组的长度是不可变的，如果要扩容数组，需要建立一个更大的数组，把原数组元素依次复制到新数组。</p></li><li><p>数组的存储空间是连续的，当数组较大时，如果空间碎片较多，内存可能无法提供足够大的连续空间。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ArrayList</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 冒泡排序</span>
  <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 选择排序</span>
  <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插入排序</span>
  <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 快速排序</span>
  <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 希尔排序</span>
  <span class="token function">shellSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表-linked-list" tabindex="-1"><a class="header-anchor" href="#链表-linked-list" aria-hidden="true">#</a> 链表 Linked List</h3><p>链表是一种线性数据结构，链表的每个元素都是一个节点对象，各节点通过 “指针” 连接，指针指向下一个节点的内存地址，通过指针可以访问下一个节点。在链表中插入与删除节点非常方便，只需要改变指针的指向即可，所以链表插入与删除元素的效率非常高。链表的元素节点被分散存储在内存空间中，它们的内存地址无须连续，所以不用担心空间碎片的问题。</p><p><strong>链表的缺点</strong>：</p><ul><li><p>访问效率低：链表需要从头节点开始，向后遍历，直到找到目标节点。</p></li><li><p>占用内存大：链表除了需要存储节点值，还要存储节点指针。如果节点数据越多，指针的内存影响就越小。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">LinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> LinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  head<span class="token operator">:</span> LinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 向链表尾部添加节点
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 添加的节点值
   */</span>
  <span class="token function">append</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 向链表指定位置插入节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 插入的节点值
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">let</span> previous<span class="token operator">:</span> LinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previous <span class="token operator">=</span> current
        current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 查找对应索引的节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   */</span>
  <span class="token function">find</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> current
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 修改对应索引的节点值
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 修改的节点值
   */</span>
  <span class="token function">update</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    node<span class="token operator">!</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 移除对应索引的节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> previous<span class="token operator">:</span> LinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      current <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previous <span class="token operator">=</span> current
        current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      previous<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      current <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 遍历链表
   */</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>current<span class="token operator">!</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token function">callback</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>value<span class="token punctuation">,</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h3><p>双向链表每个元素节点都有两个指针，分别指向上一个节点和下一个节点。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DoubleLinkedListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
  prev<span class="token operator">:</span> DoubleLinkedListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  next<span class="token operator">:</span> DoubleLinkedListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DoubleLinkedList<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  head<span class="token operator">:</span> DoubleLinkedListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  tail<span class="token operator">:</span> DoubleLinkedListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 向链表尾部添加节点
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 添加的节点值
   */</span>
  <span class="token function">append</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleLinkedListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 向链表指定位置插入节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 插入的节点值
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleLinkedListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>prev
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
        current<span class="token operator">!</span><span class="token punctuation">.</span>prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
        current<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 查找对应索引的节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   */</span>
  <span class="token function">find</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 从前往后</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">&gt;</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
    <span class="token comment">// 从后往前</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>prev
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> current
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 修改对应索引的节点值
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> - 修改的节点值
   */</span>
  <span class="token function">update</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    node<span class="token operator">!</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 移除对应索引的节点
   * <span class="token keyword">@param</span> <span class="token parameter">index</span> - 索引值
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;out of range&quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>prev
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        current<span class="token operator">!</span><span class="token punctuation">.</span>prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
        current<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>prev
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>
    <span class="token keyword">return</span> current<span class="token operator">!</span><span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
   * 遍历链表
   */</span>
  <span class="token function">each</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>current<span class="token operator">!</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> current<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token function">callback</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>value<span class="token punctuation">,</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哈希表-hash-map" tabindex="-1"><a class="header-anchor" href="#哈希表-hash-map" aria-hidden="true">#</a> 哈希表 Hash Map</h2><h3 id="哈希冲突" tabindex="-1"><a class="header-anchor" href="#哈希冲突" aria-hidden="true">#</a> 哈希冲突</h3><h3 id="哈希表理论" tabindex="-1"><a class="header-anchor" href="#哈希表理论" aria-hidden="true">#</a> 哈希表理论</h3><h3 id="自定义哈希表" tabindex="-1"><a class="header-anchor" href="#自定义哈希表" aria-hidden="true">#</a> 自定义哈希表</h3><h2 id="树-tree" tabindex="-1"><a class="header-anchor" href="#树-tree" aria-hidden="true">#</a> 树 Tree</h2><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3><h3 id="平衡树" tabindex="-1"><a class="header-anchor" href="#平衡树" aria-hidden="true">#</a> 平衡树</h3><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h3><h2 id="图-graph" tabindex="-1"><a class="header-anchor" href="#图-graph" aria-hidden="true">#</a> 图 Graph</h2><h3 id="图的表示" tabindex="-1"><a class="header-anchor" href="#图的表示" aria-hidden="true">#</a> 图的表示</h3><h3 id="自定义图" tabindex="-1"><a class="header-anchor" href="#自定义图" aria-hidden="true">#</a> 自定义图</h3><h3 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> 图的遍历</h3><h2 id="查找算法" tabindex="-1"><a class="header-anchor" href="#查找算法" aria-hidden="true">#</a> 查找算法</h2><h3 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h3><h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h2><h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>ArrayList<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bubbleSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
        flag <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3><h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3><h3 id="希尔排序" tabindex="-1"><a class="header-anchor" href="#希尔排序" aria-hidden="true">#</a> 希尔排序</h3>`,47);function v(m,b){const a=e("ExternalLinkIcon");return t(),o("div",null,[n("div",u,[r,n("p",null,[s("参考 "),n("a",k,[s("Hello 算法"),c(a)]),s("。")])]),d])}const w=p(i,[["render",v],["__file","Alog-JavaScript.html.vue"]]);export{w as default};
