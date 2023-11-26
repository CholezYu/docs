# 经验积累

## 插槽参数的类型

在 `el-table-column` 组件中，解构插槽参数 slotProps 中的 row，并为 row 指定类型。

```vue
<el-table-column label="活动时间">
  <template #default="{ row }: { row: GoodsInfoType }">
    <div>
      <div>
        <span>开始：</span>
        <span>{{ dayjs(row.beginTime).format("YYYY-MM-DD") }}</span>
      </div>
      <div>
        <span>结束：</span>
        <span>{{ dayjs(row.endTime).format("YYYY-MM-DD") }}</span>
      </div>
    </div>
  </template>
</el-table-column>
```