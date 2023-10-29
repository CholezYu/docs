# jQuery

## $ 的使用

### 作为函数使用

#### 参数为函数

当DOM加载完成之后，执行该回调函数

#### 参数为选择器字符串

查找所有匹配标签，并封装成 jQuery 对象

#### 参数为 DOM 对象

将 DOM 对象封装成 jQuery 对象

#### 参数为 html 标签字符串

创建标签对象并封装成 jQuery 对象

### 作为对象使用

#### .each()

`$().each()` 遍历jQuery对象

#### .get()

`$().get()` 获取jQuery对象中索引处的元素

#### .index()

`$().index()` 获取元素的索引

#### .toArray()

`$().toArray()` 获取jQuery对象中的所有元素

#### .noConflict()

`$.noConflict()` 放弃jQuery控制$变量

## 选择器

`:first` 第一个元素

`:last` 最后一个元素



`:eq()` 等于指定索引的元素

`:gt()` 大于指定索引的元素

`:lt()` 小于指定索引的元素



`:even` 索引值为偶数的元素

`:odd` 索引值为奇数的元素



`:focus` 当前获取焦点的元素



`:input` 表单元素

`:text` 文本框

`:password` 密码框

`:radio` 单选框

`:checkbox` 复选框

`:submit` 提交按钮

`:reset` 重置按钮

`:button` 按钮

`:image` 图像

`:file` 文件



`:visible` 可见的元素

`:hidden` 隐藏的元素



`:contains()` 包含指定文本的元素

## 工具类方法

### .each()

`$.each(Object, function(indexArray, valueOfElement))` 遍历对象或数组

### .trim()

`$.trim(str)` 去除字符串两边的空格

### .type()

`$.type(obj)` 返回数据的类型

### .isArray()

`$.isArray(obj)` 判断参数是否为数组

### .isFunction()

`$.isFunction(obj)` 判断参数是否为函数

### .parseJSON()

`$.parseJSON(jsonStr)` 解析 json 字符串转换为 js 对象或数组

## 通用属性操作

### .attr()

`.attr(attributeName)` 获取元素的属性值

`.attr(attributeName, value)` 设置一个元素的属性值

`.attr({attributeName: value})` 设置一个或多个元素的属性值

`.attr(function(index, value))` 设置一个或多个元素的属性值

> `.attr()` 可以设置的属性值类型：string, number，用于设置非布尔值类型的属性值

### .prop()

`.prop(propertyName)` 获取元素的属性值

`.prop(propertyName, value)` 设置一个元素的属性值

`.prop({propertyName: value})` 设置一个或多个元素的属性值

`.prop(propertyName, function(index, value))` 设置一个或多个元素的属性值

> `.prop()` 可以设置的属性值类型：string, number, boolean，用于设置布尔值类型的属性值

### .removeAttr()

`.removeAttr(attributeName)` 删除元素中的属性

### .removeProp()

`.removeProp(propertyName)` 删除由 prop() 方法设置的属性

### .val()

`.val()` 获取元素 value 属性的值

`.val(value)` 设置元素 value 属性的值

`.val(function(index, value))` 设置元素 value 属性的值

## 类名操作

### .addClass()

`.addClass(className)` 为元素添加类名

`.addClass(function(index, className))` 为元素添加类名

### .removeClass()

`.removeClass([className])` 移除元素中的类名

`.removeClass(function(index, className))` 移除元素中的类名

### .hasClass()

`.hasClass(className)` 判断元素中是否含有给定的类名

### .toggleClass()

`.toggleClass(className)` 若元素中含有给定的类名，则删除；若元素中没有给定的类名，则添加

## 样式属性操作

### .css()

获取或设置元素的CSS属性值

### .offset()

获取或设置元素相对于页面的偏移量

`.offset().left` 获取元素相对于页面的水平偏移量

`.offset().top` 获取元素相对于页面的垂直偏移量

### .position()

获取元素相对于父元素的偏移量

`.position().left` 获取元素相对于父元素的水平偏移量

`.position().top` 获取元素相对于父元素的垂直偏移量

### .scrollLeft()

获取或设置元素水平滚动条的偏移量

### .scrollTop()

获取或设置元素垂直滚动条的偏移量

### .height()

获取或设置元素的高度

### .width()

获取或设置元素的宽度

### .innerHeight()

获取元素包括 padding 的高度

### .innerWidth()

获取元素包括 padding 的宽度

### .outerHight()

获取元素包括 padding, border 的高度，若参数为 true，则包括 margin

### .outerWidth()

获取元素包括 padding, border 的宽度，若参数为 true，则包括 margin

## 元素的过滤

### .first()

获取元素集合中第一个元素

### .last()

获取元素集合中最后一个元素

### .eq()

获取元素集合中索引处的元素

### .filter()

筛选元素集合中与表达式匹配的元素

### .not()

筛选元素集合中与表达式不匹配的元素

### .has()

筛选子元素集合中与表达式匹配的元素

## 元素的查找

### .children()

查找子元素

### .find()

查找后代元素

### .parent()

查找父元素

### .prevAll()

查找前面的兄弟元素

### .nextAll()

查找后面的兄弟元素

### .siblings()

查找所有兄弟元素

## 文档的增删改

### .append()

`element.append(content)` 向目标元素内的最后面插入指定内容，作为最后一个子元素

### .appendTo()

`content.appendTo(element)` 将指定内容插入到目标元素内的最后面，作为最后一个子元素

### .prepend()

`element.prepend(content)` 向目标元素内的最前面插入指定内容，作为第一个子元素

### .prependTo()

`content.prependTo(element)` 将指定内容插入到目标元素内的最前面，作为第一个子元素

### .after()

`element.after(content)` 向目标元素后面插入指定内容，作为兄弟元素

### .insertAfter()

`content.insertAfter(element)` 将指定内容插入到目标元素后面，作为兄弟元素

### .before()

`element.before(content)` 向目标元素前面插入指定内容，作为兄弟元素

### .insertBefore()

`content.insertBefore(element)` 将指定内容插入到目标元素前面，作为兄弟元素

### .replaceWith()

`element.replaceWith(content)` 将目标元素替换成指定内容

### .replaceAll()

`content.replaceAll(element)` 用指定内容替换目标元素

### .remove()

`element.remove([select])` 移除目标元素内部包括自己在内的所有匹配元素

### .empty()

`element.empty()` 移除目标元素内部的所有后代元素(节点)

### .unwrap()

`element.unwrap()` 移除目标元素的父元素

## 事件的绑定

### .event()

`element.event(handler(eventObject))` 为元素绑定一个事件处理函数

### .on()

`element.on(events[, selector], handler(eventObject))` 为元素绑定一个或多个事件处理函数

### .off()

`element.off([events][, selector][, handler(eventObject)])` 移除元素的事件处理函数

### .stopPropagation()

`event.stopPropagation()` 取消事件的冒泡

### .preventDefault()

`event.preventDefault()` 取消事件的默认行为

## 鼠标事件

### .mouseenter()

`element.mouseenter(handler(eventObject))`

为元素绑定一个当鼠标进入元素时触发的事件处理函数

### .mouseleave()

`element.mouseleave(handler(eventObject))`

为元素绑定一个当鼠标离开元素时触发的事件处理函数

### .mouseover()

`element.mouseover(handler(eventObject))`

为元素绑定一个当鼠标进入元素或其子元素时触发的事件处理函数

### .mouseout()

`element.mouseout(handler(eventObject))`

为元素绑定一个当鼠标离开元素或其子元素时触发的事件处理函数

### .hover()

`element.hover(handlerIn(eventObject), handlerOut(eventObject))`

为元素分别绑定两个当鼠标进入和离开元素时触发的事件处理函数

### .hover()

`element.hover(handlerInOut(eventObject))`

为元素绑定一个当鼠标进入或离开元素时触发的事件处理函数

### event.clientX

获取元素(鼠标)相对于当前可见窗口的水平坐标

### event.clientY

获取元素(鼠标)相对于当前可见窗口的垂直坐标

### event.pageX

获取元素(鼠标)相对于当前文档的水平坐标

### event.pageY

获取元素(鼠标)相对于当前文档的垂直坐标

### event.offsetX

获取元素(鼠标)相对于触发事件的元素的水平坐标

### event.offsetY

获取元素(鼠标)相对于触发事件的元素的垂直坐标

## 事件的委派

1. 将多个子元素的事件监听委托给父(祖先)元素处理
2. 当该元素中的事件被触发时，会一直冒泡到父(祖先)元素
3. 父(祖先)元素不会直接处理事件，而是通过event.target得到触发事件的元素调用回调函数

通过委派可以减少事件绑定的次数，提高了程序的性能

添加新的子元素，会自动响应事件处理函数

### .delegate()

`parentElement.delegate(childrenElement, event, handler(eventObject))`

设置事件的委托，由触发事件的元素(childrenElemen)调用回调函数

> this表示触发事件的元素(childrenElement)

### .undelegate()

`element.undelegate([event])` 移除事件的委托

## 动画效果

### .toggle()

`.toggle([duration][, easing][, completeFun])`

显示或隐藏元素

### .fadiIn()

`.fadiIn([duration][, easing][, completeFun])`

通过淡入动画显示元素

### .fadeOur()

`.fadeOur([duration][, easing][, completeFun])`

通过淡出动画隐藏元素

### .fadeToggle()

`.fadeToggle([duration][, easing][, completeFun])`

通过淡入淡出动画显示或隐藏元素

### .fadeTo()

`.fadeTo(duration, opacity[, complete])`

调整元素的透明度

### .slideDown()

`.slideDown([duration][, easing][, completeFun])`

通过滑动动画显示元素

### .slideUp()

`.slideUp([duration][, easing][, completeFun])`

通过滑动动画隐藏元素

### .slideToggle()

`.slideToggle([duration][, easing][, completeFun])`

通过滑动动画显示或隐藏元素

### .show()

`.show([duration][, easing][, completeFun])`

显示元素(同时执行淡入淡出和滑动动画)

### .hide()

`.hide([duration][, easing][, completeFun])`

隐藏元素(同时执行淡入淡出和滑动动画)

### .animate()

`.animate(properties[, duration ][, easing][, completeFun])`

通过修改css属性集合(properties)，执行自定义动画

### .stop()

暂停元素正在运行的动画

## 插件

### .extend()

`$.fn.extend(object)` 扩展jQuery的原型($.fn)对象，提供新的方法(通常用来制作插件)

通过$().调用

`$.extend(object)` 扩展jQuery对象本身，提供新的工具类方法

通过$.调用

## 发送 Ajax

### $.get

`$.get(url, [data], [callback])`

- **参数**：

  - **url**：请求地址

  - **data**：查询参数

  - **callback**：请求成功的回调函数

- **用法**：

  ```js
  $.get('http://localhost:3000/posts',
    response => {
      console.log(response)
    }
  )
  ```

### $.post

`$.post(url, [data], [callback])`

- **参数**：

  - **url**：请求地址

  - **data**：请求体

  - **callback**：请求成功的回调函数

- **用法**：

  提交数据

  ```js
  $.post('http://localhost:3000/posts',{
      "id": 4,
      "title": "CSS权威指南",
      "author": "EricA.Meyer"
    },
    response => {
      console.log(response)
    }
  )
  ```

### $.ajax

`$.ajax(settings)`

- **请求配置**：

  - **type**：请求方式
  - **url**：请求地址
  - **data**：请求体
  - **success**：请求成功的回调函数
  - **error**：请求失败的回调函数
  - **timeout**：请求时限

- **用法**：

  发送 Get 请求

  ```js
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/posts',
    success: response => {
      console.log(response)
    }
  })
  ```

  发送 Post 请求

  ```js
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/posts',
    data: {
      "id": 4,
      "title": "CSS权威指南",
      "author": "EricA.Meyer"
    },
    success: response => {
      console.log(response)
    }
  })
  ```
