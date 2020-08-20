---
title: vue文档
date: 2019-7-29
tags: [note]
---

给 prop 指定值类型。

new Vue({
props: {
title: String,
likes: Number,
isPublished: Boolean,
}
})

自定义时间

this.$on('some-event')
this.$emit('some-event')

编译入口：

当我们使用 Runtime+

mixin：分发 组件中的 可复用功能 一个混入对象可以包含任意组件选项。所有混入对象的选项将被“混合”进入该组件本身的选项。

同名的钩子函数会被合并成一个数组，因此都会被调用。

全局混入

Vue.mixin({
created: function () {
var myOption = this.\$option.myOption
if (myOption) {// 做一个简单的容错
console.log(myOption)
}
}
})

new Vue({
myOption: "hello"
})

自定义选项合并策略

自定义指令：

Vue.directive('focus', {
inserted: function (el) {
el.foucus()
}
})

一个指令对象可以提供几个钩子函数：

- bind：只调用一次，指令第一次绑定到元素的时候调用。初始化设置
- inserted：被绑定元素插入父节点是调用
- update：所有组件的 Vnode 更新是调用，
- componentUpdated: 指令所在的组件的 VNode 全部更新后调用
- unbind：只调用一次，指令与元素解绑时调用

### nexttick

数据处理和 DOM 处理是一个异步的操作

macro task，micro mask

nexttick 两个地方：

globalAPI，index 里
render.js 里，还有

marcroTimerFun，microTimerFunc

isNative() // 检查是否与安生支持

如果最后都不支持，就会降级为 setTimeout

收集

### Vuex

应用核心： store
store：容器，包含应用中大部分 state
Vuex 状态存储是响应式的，当组件从 store 读取状态，会更新。
只能通过 commit 去更改 state

Vue.mixin({
beforeCreate: vuexInit
})

function vuexInit () {
const options = this.$options
    if (options.store) {
        this.$store = typeof options.store === 'function' ? options.store() ? options.store
}
}

vuex:
export default new Vuex.store({
actions,
getters,
state,
mutations,
modules
})

export class Store {
constructor (opotions = {}) {
this.\_committing = false
this.\_actions = Object.create(null)
this.\_actionSubscribers = []
}
}

## 初始化模块

单一状态树，应用的所有状态会集中到一个比较大的对象中，当应用非常复杂的时候，store 会变得非常臃肿，。将 store 分隔成模块。

模块的设计就是一个树形，store 本身是一个 root Module。简历模块的父子关系。

## 安装模块

初始化模块之后，执行安装模块的相关逻辑，目标是对 state，getters，mutations，actions 做初始化工作。

function installModule (store, rootstate, path, module, hot) {
module.forEachMutation((mutation, key) => {
const namespacedType = namespace + key
registerMutation(store, namespacedType, mutation, local)
})
, initState

    module.forEachAction((action, key) => {
        const type = action.root ? key : namespace + key
        const handler = action.handler || action
        registerAction(store, type, handler, local)
    })

    module.forEachChild((child, key) => {
        instatllModule(store, rootState, path.concat(key), child, hot)
    })

}

function makeLocalContext (store, namespace, path) { // 构造一个本地上下文环境
// d 定义了 local 对象，对于 dispatch 和 commit 方法，如果没有 namespace，就会直接指向 root store 的 dispatch 和 commit 方法。
const noNamespace = namespace === ''
}

export default class ModuleCollection {
    constructor (rawRootModule) {
        this.register([], rawRootModule, false)
    }
}

payload 字段：程序中最关心的内容，用这个字段做阐述。有效载荷，收费载重。

### 数据驱动

1.初始化，合并 options
2.initLifeCycle,

initState: initProps, initmethods, initData, initComputed, initWatch

data 和 props 最终都会挂在到实例上，所以 data 和 props 不能有重复的名字

this.message ===> this[soruce][message]

### Vue 实例挂载实现

query 方法，调用 querySelector 方法，

通过\$mount 方法挂载。不能挂在 body，html 这样的根节点上。

render 方法，看有没有定义 template 方法，getOuterHtml，获取 DOM 的字符串成

解析 el，renderfunction 转化为 template，最后在编译成 render function，最后通过 amount。
createEmptyVNode 创建一个空 VNode

runtimeOnly 版本，使用 template 必须要有 render 方法

渲染 watcher，和自定义 watcher

updateComponent: 实际上执行了一次渲染。

### render 方法

render 方法最终会走 createElement，renderProxy,最终渲染一个虚拟 Node

Proxy 对对象访问进行一个劫持

### Virtual DOM

使用原生的 JS 去描述一个 DOM 节点，比创建一个 DOM 的代价要小很多。使用的是 createElement 来创建一个 VDOM，实际上是对\_createElement 的封装

### update

Vue 的\_update 是实力的一个私有方法，首次渲染（数据驱动），和数据更新（响应式原理）的时候都会调用这个方法。

河西调用的是 vm.**patch**方法，

patch 方法是跟平台有关的，在 web 和 weex 环境，他把虚拟 dom 映射到对另平台上 DOM 的方法是不一样的，createPatchFunction 将参数提前固化

createEle 通过虚拟节点创建真实的 DOM 并插入到父节点中。

createChildren 遍历虚拟子节点，递归调用 createElm，

再接着调用 invokeCreateHkkos 方法执行所有的 create 钩子并把 vnodepush 到 insertedVnodeQueue 中

## 组件化

组件化：把页面拆分成多个组件，每个组件依赖 CSS，JavaScript，模版，图片资源放在一起开发和维护。

createComponent：

构造子类构造函数

### 服务端渲染

- 搜索引擎爬虫抓取数据可以直接查看完全渲染的页面。
    完全渲染好的页面！
- 开发条件所限，需要浏览器特定的代码，只能在某些生命周期狗子函数中使用

#### 通用代码

编写通用的代码，不能使用对平台单独访问的API