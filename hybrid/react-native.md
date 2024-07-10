---
title: React Native
icon: react
date: 2024-06-27
description: React Native
---

## 核心组件

### Image

**图片**。支持网络图片、静态图片、相册图片。

```tsx
<Image
  source={require("@/assets/images/react-logo.png")}
  resizeMode="cover"
/>
```

:::important Props

- `resizeMode`：设置图片的显示模式。

  - `cover`：（默认）保持宽高比，不留空白。图片可能完全覆盖或者超出容器。
  
  - `contain`：保持宽高比，完全显示图片。容器可能有空白。
  
  - `stretch`：不保持宽高比，图片会被拉伸到刚好填满容器。
  
  - `repeat`：保持原尺寸，图片会平铺直至填满容器。
  
  - `center`：居中不拉伸。

:::

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

引用网络或 base64 数据的图片时，需要使用 `uri` 指定资源地址或 base64 编码，并设置尺寸。

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

### TextInput

**文本输入框**。

```tsx
const [text, setText] = useState("hello react-native")

return <TextInput value={text} onChangeText={setText} />
```

:::important Props

- `keyboardType`：设置键盘的类型。详见 [React Native TextInput keyboardType](https://www.lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/)。

  - `default`：默认键盘。

  - `number-pad`：数字键盘。

  - `decimal-pad`：数字键盘。

  - `numeric`：数字键盘。

  - `email-address`：英文键盘（电子邮件）。

  - `phone-pad`：数字键盘（电话号码）。

- `returnKeyType`：设置 “确定” 按钮显示的内容（三星 & 搜狗键盘）。

  - `done`：完成。

  - `go`：转到 / 开始。

  - `next`：下一步。

  - `search`：搜索。

  - `send`：发送。

:::

### Button *

**按钮**。在 Android 和 iOS 会呈现不同的样式，**不推荐使用**。

```tsx
<Button title="Button" onPress={onPressFn} />
```

### Pressable

**按钮**。RN 推荐使用 `<Pressable>`，可以自定义样式。它有两种触发情况：

- 轻按：`onPressIn` => `onPressOut` => `onPress`

- 长按：`onPressIn` => `onLongPress` => `onPressOut`

`<Pressable>` 默认会撑满整个屏幕宽度，设置 `alignSelf: center` 可以让它被内容撑开。

```tsx
<Pressable
  onPressIn={/* 按压 */}
  onPressOut={/* 按压结束 */}
  onPress={/* 按压结束后 */}
  onLongPress={/* 长按 */}
  style={state => state.pressed ? styles.pressed : styles.button}
  hitSlop={{ top: 20, bottom: 30 }}
>
  {state => state.pressed
    ? <Text style={styles.pressedText}>Pressed</Text>
    : <Text style={styles.buttonText}>Button</Text>
  }
</Pressable>
```

:::important Props

- `style`：接受一个提供 “按压状态” 的函数。我们可以根据按钮是否处于按压状态，设置不同的样式。

- `hitSlop`：扩大触发范围，优化用户体验（用户可能不会准确按压触发区域）。

:::

### ScrollView

**滚动视图**。在 Web App 中，想要实现滚动视图的效果，需要借助第三方库。RN 直接提供了这样的组件。

```tsx
<ScrollView>
  <Text style={{ fontSize: 96 }}>Scrolling down</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  {/* repeat ... */}
</ScrollView>
```

### FlatList

**长列表**。`<FlatList>` 优先渲染屏幕上可见的元素，而不是所有元素。

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

**下拉刷新**

`onRefresh` 会自动添加 `<RefreshControl>` 组件，以便实现 “下拉刷新” 功能。但是必须同时设置 `refreshing`。

```tsx
const [list, setList] = useState(initialList)

const [isFreshing, setFreshing] = useState(false)

const refresh = async () => {
  setFreshing(true)
  const response = await (await fetch(url)).json()
  setList(response.data)
  setFreshing(false)
}

return <FlatList
  data={list}
  renderItem={({ item }) => <Text>{item.desc}</Text>}
  keyExtractor={item => item.id}
  onRefresh={refresh}
  refreshing={isFreshing}
/>
```

**上拉加载**

当视图接近底部时，会触发 `onEndReached` 事件。设置 `onEndReachedThreshold` Prop 可以改变触发距离。

```tsx
const [list, setList] = useState(initialList)

const [isReached, setReached] = useState(false)

const reach = async () => {
  setReached(true)
  const response = await (await fetch(url)).json()
  setList([...list, ...response.data])
  setReached(false)
}

return (
  <View>
    <FlatList
      data={list}
      renderItem={({ item }) => <Text>{item.desc}</Text>}
      keyExtractor={item => item.id}
      onEndReached={reach}
      onEndReachedThreshold={0.1}
    />
    {isReached && <ActivityIndicator />}
  </View>
)
```

### SectionList

**分组长列表**。`<SectionList>` 可以渲染一个标题，便于对数据进行分组。

```tsx
<SectionList
  sections={[
    { title: "D", data: ["Devin", "Dan", "Dominic"] },
    { title: "J", data: ["Jackson", "James", "Jillian", "Jimmy"] }
  ]}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  renderItem={({ item }) => <Text>{item}</Text>}
  keyExtractor={(item, index) => item + index}
/>
```

## 基础 API

### StyleSheet

**样式表**。StyleSheet 是类似于 CSS 样式表的抽象。RN 建议使用 `StyleSheet.create` 来集中定义组件的样式。

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

### Alert

**对话框**。可以自定义样式与功能。

> [!warning]
>
> Android 只能显示静态的提示框，iOS 支持文本输入框。

```tsx
const alert = () => {
  Alert.alert("Alert", "Hello React-Native!", [
    {
      text: "No",
      onPress: () => console.log("cancel")
    },
    {
      text: "Yes",
      onPress: () => console.log("confirm")
    }
  ])
}
```

### Keyboard

**键盘事件**。可以监听键盘行为，并做出响应。

```tsx
useEffect(() => {
  const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
    console.log("Keyboard Show")
  })
  const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
    console.log("Keyboard Hide")
  })
  
  return () => {
    keyboardShowListener.remove()
    keyboardHideListener.remove()
  }
}, [])

return <TextInput onSubmitEditing={Keyboard.dismiss} />
```

### AppState

**应用状态**。可以读取应用的运行状态，或监听状态的变化。

- `active`：前台运行。

- `background`：后台运行。

```tsx
useEffect(() => {
  const listener = AppState.addEventListener("change", state => {
    AppState.currentState // => 'active' or 'background'
    AppState.currentState === state // => true
  })
  
  return listener.remove
}, [])
```

## 设备 API

### Platform

**设备信息**。可以获取设备的相关信息。

```tsx
// 系统名称
Platform.OS // android

// 系统版本
Platform.Version // 34

// 设备品牌
Platform.constants.Brand // samsung

// 设备型号
Platform.constants.Model // SM-G9960

// 是否是 iPad
Platform.isPad // false

// 是否是 TV
Platform.isTV // false
```

### Appearance

**外观偏好**。可以获取或修改主题色模式。

```tsx
// 主题色模式
Appearance.getColorScheme() // light

// 修改主题色模式
Appearance.setColorScheme("dark")
```

### Dimensions

**屏幕尺寸**。可以获取屏幕的宽高和缩放系数。

```tsx
const { width, height, scale } = Dimensions.get("window")
```

### PixelRatio

**像素比例**。可以获取像素密度和字体缩放比例。

```tsx
// 像素密度
PixelRatio.get() // 2.8125 (Galaxy21+)

// 字体缩放比例
PixelRatio.getFontScale() // 1

// 将布局尺寸(dp)转换为像素尺寸(px)
PixelRatio.getPixelSizeForLayoutSize(100) // 281
```

## 动画 API

### LayoutAnimation

**布局动画**。动画会在下一次渲染或布局周期运行。用于透明度渐变、缩放。

```tsx
// 在 Android 上使用此动画，需要启用
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

return <Button
  title="Click"
  onPress={() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }}
/>
```

### Animated

**更精细的动画**。

## Expo SDK

### ImagePicker

访问相册并选择图片。

```tsx
import * as ImagePicker from "expo-image-picker"

const pickImage = async () => {
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
