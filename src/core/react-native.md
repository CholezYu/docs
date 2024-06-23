---
title: React Native
icon: react
date: 2024-06-23
description: React Native
---

## UI 与交互

### 样式表

StyleSheet 是类似于 CSS 样式表的抽象。RN 建议使用  `StyleSheet.create` 来集中定义组件的样式。

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1 // 在 React Native 中，flex 主轴默认垂直向下
  },
  title: {
    backgroundColor: "#ebc",
    color: "#fff",
    fontSize: 32,
    textAlign: "center"
  }
})

return (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
)
```

### 图片

`<Image>` 可以引入静态图片、网络图片、本地相册等不同类型的图片。静态图片不需要设置图片的尺寸。

```tsx
<Image source={require("@/assets/images/react-logo.png")} />
```

> [!caution]
>
> `require` 是在编译时期执行，而不是运行时期。所以必须使用静态字符串！

```tsx
// 正确
const icon = active
  ? require("@/assets/images/icon.png")
  : require("@/assets/images/icon.png")
return <Image source={icon} />

// 编译错误
const icon = active
  ? "@/assets/images/icon.png"
  : "@/assets/images/icon.png"
return <Image source={require(icon)} />
```

引用网络或 base64 数据的图片时，需要使用 `uri` 指定资源地址或 base64 编码，并手动设置尺寸。

```tsx
// 正确
<Image
  source={{ uri: "http://cholez.cn/icon.png" }}
  style={{ width: 400, height: 400 }}
/>

// base64
<Image
  source={{ uri: "data:image/jpeg;base64..." }}
  style={{ width: 32, height: 32 }}
/>

// 错误，未设置尺寸
<Image source={{ uri: "http://cholez.cn/icon.png" }} />
```

### 文本输入框

```tsx
const [text, setText] = useState("hello react-native")

return <TextInput value={text} onChangeText={setText} />
```

### 按钮

`<Button>` 在 Android 和 iOS 会呈现不同的样式。推荐使用 `<Pressable>` 组件，可以定制按钮的样式。

```tsx
<Button title="Button" onPress={onPressFn} />
```

`<Pressable>` 用于响应用户的按压行为，它有两种触发情况：

- 轻按：`onPressIn` => `onPressOut` => `onPress`
- 长按：`onPressIn` => `onLongPress` => `onPressOut`

`<Pressable>` 默认会撑满整个屏幕宽度，设置 `alignSelf: center` 可以让它被内容撑开。

```tsx
<Pressable
  onPressIn={/* 按压 */}
  onPressOut={/* 按压结束 */}
  onPress={/* 按压结束后 */}
  onLongPress={/* 长按 */}
>
  <Text style={styles.button}>Button</Text>
</Pressable>
```

### 滚动视图

在 Web App 中，想要实现滚动视图的效果，需要借助第三方库。RN 直接提供了 `<ScrollView>` 组件。

```tsx
<ScrollView>
  <Text style={{ fontSize: 96 }}>Scrolling down</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 96 }}>Scrolling down</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 96 }}>Scrolling down</Text>
</ScrollView>
```

### 长列表

`<FlatList>` 优先渲染屏幕上可见的元素，而不是所有元素。所以它也称为**虚拟长列表**。

```tsx
<FlatList
  data={[
    { name: "Devin" },
    { name: "Dan" },
    { name: "James" },
    { name: "Joel" },
    { name: "John" }
  ]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item, index) => item.name + index}
/>
```

`<SectionList>` 可以渲染一个标题，便于对数据进行分组。

```tsx
const data = [
  { title: "D", data: ["Devin", "Dan", "Dominic"] },
  { title: "J", data: ["Jackson", "James", "Jillian", "Jimmy"] }
]

return <SectionList
  sections={data}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  keyExtractor={(item, index) => item + index}
/>
```

## Image

### resizeMode

设置图片的显示模式。

- `cover`：（默认）保持宽高比，不留空白。图片可能完全覆盖或者超出容器。

- `contain`：保持宽高比，完全显示图片。容器可能有空白。

- `stretch`：不保持宽高比，图片会被拉伸到刚好填满容器。

- `repeat`：保持原尺寸，图片会平铺直至填满容器。

- `center`：居中不拉伸。

## TextInput

### keyboardType

设置键盘的类型。详见 [React Native TextInput keyboardType prop values | Michael Lefkowitz](https://www.lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/)。

- `default`：默认键盘。

- `number-pad`：数字键盘。

- `decimal-pad`：数字键盘。

- `numeric`：数字键盘。

- `email-address`：英文键盘（电子邮件）。

- `phone-pad`：数字键盘（电话号码）。

### returnKeyType

设置 “确定” 按钮显示的内容（三星 & 搜狗键盘）。

- `done`：完成。

- `go`：转到 / 开始。

- `next`：下一步。

- `search`：搜索。

- `send`：发送。

## Expo SDK

### ImagePicker

访问相册并选择图片。

```tsx
import * as ImagePicker from "expo-image-picker"

const selectImage = async () => {
  // 询问用户权限
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if (!permission.granted) return alert("拒绝访问！")
  
  // 从相册获取图片
  const picker = await ImagePicker.launchImageLibraryAsync()
  if (picker.canceled) return alert("取消选择图片")
  
  setUri(picker.assets?.[0].uri!)
}
```

### Sharing

分享文件。

```tsx
import * as Sharing from "expo-sharing"

const share = async () => {
  if (Platform.OS === "web") return alert("平台不支持分享")
  await Sharing.shareAsync(uri)
}
```
