---
title: Bootstrap
icon: css
---

# Bootstrap

##  栅格系统

https://v5.bootcss.com/docs/layout/containers/

https://v5.bootcss.com/docs/layout/grid/

|   xs    |     sm     |     md     |     lg     |     xl     |     xxl     |
| :-----: | :--------: | :--------: | :--------: | :--------: | :---------: |
| <576px  |  >=576px   |   ≥768px   |   ≥992px   |  ≥1200px   |   ≥1400px   |
|  None   |   540px    |   720px    |   960px    |   1140px   |   1320px    |
| `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` | `.col-xxl-` |

```html
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">1</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">2</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">3</div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">4</div>
  </div>
</div>
```
