---
title: React Native
icon: react
date: 2024-06-05
description: React Native
---

## 基本组件

### Button

> [!warning]
>
> Android 和 iOS 会呈现不同的样式。推荐使用 `<Pressable>` 组件，可以定制按钮的样式。

```tsx
<Button title="reset" onPress={() => setText("Hello React Native")} />
```

### Pressable

```tsx
<Pressable
  onPressIn={() => console.log("按压开始")}
  onPressOut={() => console.log("按压结束")}
  onPress={() => console.log("按压结束后")}
  onLongPress={() => console.log("长按触发")}
>
  <Text style={{ textAlign: "center", lineHeight: 32 }}>Press</Text>
</Pressable>
```

### TextInput

```tsx
<TextInput value={text} onChangeText={setText} />
```

### Image

```tsx
<Image source={require("@/assets/images/react-logo.png")} />
```

