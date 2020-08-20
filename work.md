【本周工作内容】

1.完成唯品会+腾讯视频联合会员相关需求的开发，与现有的VIP+项目保持统一的样式。
2.完成ipad端和小企鹅app查询自动续费接口从pay.video.qq.com到vip.video.qq.com的迁移

【本周收获】

1.调Ipad支付的时候，有需要注意以下方面。

    - 首先dev.film.qq.com/weixin/test.html中，拉起ipad浮层，
    - 在拉起的页面中输入网址，在弹出对应支付页进行调试。
    - 调ipad支付的时候，外网需要用正式的环境支付对应正式的账号，而测试环境的支付需要用RDM版的腾讯视频。
    - 在“给腾讯视频打分”这一项中进入环境设置，将网络环境设置为测试环境，iap支付环境选择为沙箱环境。

2.学习了解Webpack一些关于tree shaking和scope hoisting的内容。


【下周工作安排】

1.按既定计划完成新的需求。
2.继续学习webpack的一些知识。

--- 

【本周工作内容】

1.完成ipad离线包的会员个人中心接口的迁移，并测试发布。

【本周收获】

- 关于登录态改造，QQ那边的登录态改为互联登录（appid，openid，AccessToken），业务需要将原来的getWXInfo方法改为现有的getMainCookie方法（common 库）。
- 进行离线包开发相关点。
    1）在 http://vmobile.webdev.com/devingao/v2/html/lixianbao.html 上传打包好的文件。
    2）打包好文件之后，在http://vmobile.webdev.com/devingao/v2/index.php?controller=Controller_Data&tb=terminalUp_lixianbao_ios 配置对应环境中更新的包。需要修改版本号，appcode，appname，hash，url一共5个信息。
    3）另外需要注意的是，ipad的支付是和对应的QQ号和微信号绑定的，如果支付的时候，微信号不对应正确的Appleid，则不能支付。ipad和iPhone对应的测试账号也是有区别，自测的时候需要注意。
- 学习腾讯视频+联合会员的代码
- 学习关于持续集成，冒烟测试和单元测试的相关内容。

debounce() // 创建一个防抖动函数，该函数会从上一次被调用后，用func方法。

账号体系：

QQ登录的账号体系目前主要两种：

- PTLogin登录体系：主要登录态有uin和skey识别
- 互联登录/开平登录：appid+openid+access_token识别

业务场景，授权方式，前端账号体系，后端存储体系

业务场景：腾讯视频
授权方式：采用app种cookie的方式为登录体系。
前端账号体系：openid，access_token
后端存储体系：openid


【本周工作内容】

1.完成VIP+专区入口banner图的过期时间配置，支持配置过期时间，banner图只在指定时间段进行展示。
2.完成VIP+专区入口Tab栏兼容4个以上的项目，并支持自动定位到对应的tab项。
3.完成vip+QQ音乐的组件更新，更换到新的接口获取模块数据。
4.修改了VIP+考拉项目的模块间距。

【本周收获】

1.在隐藏滚动条的样式设计中，可以使用外层盒子overflow: hidden，并设置大小，让里层的盒子滚动条溢出，从而实现滚动条的隐藏。
2.webpack页面打包性能分析，可以使用webpack-bundle-analyzer，进行文件的体积分析，分析文件过大主要的可优化点在哪。speed-measure-webpack-plugin插件可以进行文件的速度分析，针对打包时间较长的文件做优化。

===========

内存泄漏：内存泄漏指的是运行时创建的空间无法被使用，或这垃圾回收直到浏览器被关闭。

1.Event Listener事件监听
2.DOM或ActiveX Object Reference （DOM 或 ActiveX对象相互引用）
3.闭包造成的内存泄漏

4.Delete loosely （浅删除）

  var a = {P: {x:1}}
  var b = a.p
  delete a.p
  console.log(b.x) // 1

5.箱式转换

    var a = 'abc'
    console.log(a.length) // 3 内存泄漏

这种也会发生内存泄漏，需要左值类型转化之前先转换为对象。

6.两个DOM相互引用能够被垃圾回收机制侦测并回收

7非法的DOM操作

8.Pollution of the global namespace 全局命名空间的污染


本周工作内容提供



本周收获

- 点击事件无效，有一个问题可能是z-index小，被上层dom覆盖
- slot定制化
- 棱镜，啄木鸟监控系统

目录：

channels.js: 存放合作方的actid。
consts.js: 放业务不变的一些文案，连接地址，ptag
VuePortal：提取出来的弹窗
VisSenseFatory: 用来做懒加载，监听的元素滚动位置
Wheel：做滑动的插件
CreateAPI：在Vue的原型链上挂载实例方法。（弹窗之类的）
aid：流水关键信息。vipType, selectedProduct, selectVoucher, upgradeSign


--- 

PhantomJS：无头浏览器，网页自动化，网络爬虫等场景。


1. pay.js: 

reqIap:

- 计平通过groupid统计开通次数，进行拦截商品开通。魔方通过玉柱的开通流水id进行拦截
- 在微信里的webview里登录腾讯视频的微信账号，这个时候存在了账号a的cookie。切换微信登录之后，使用账号B购买会员，这个时候，进入授权页的时候，获取的是账号A的cookie。
- 修改padding，让content的宽度长一点

### 2020-03-17

传统的jq开发模式，可维护性和可复用性极低，要想提高可维护性，需要从减少干涉模块和减少干涉逻辑两各方面入手改善逻辑结构。

也就是要让选择器代表一段逻辑。如此一来，在开发的时候，只需要在HTML元素添加一个选择器标识，就可以复用一段逻辑。

只需要通过在HTML上声明依赖数据，与及数据变更时触发更新，这两个简单的操作就完成了一个交互逻辑的复用。这样的逻辑表达方式我们称之为数据绑定，它就是一种DOM操作逻辑的声明式绑定。

### 2020-03-20

function Point (x, y) {
    this.x = x
    this.y = y
}

Javascript Inline Cache: 通过缓存上一次对象的类型信息来加速当前对象属性的读写访问。

对象的隐藏类：JavaScript对象没有类型信息，JS引擎采用隐藏类（Hidden Class/Shape/Map）等来描述对象的布局信息。V8对JavaScript对象都使用HeapObject来描述和存储，每一个js对象都是HeapObject子类，而每个HeapObject都用map来描述对象的布局。对象的Map描述对象的类型，成员数目，成员名称，成员内存的位置信息等。

Map Transition：隐藏类变迁,this.x = x ===> map, this.y = y ===>map1 

Ic-Hit：上一次执行的代码缓存

函数对象上添加一个type_feedback_vector数组成员，对于该函数中的每处可能产生ic代码，Point中的type_feedback_vector缓存上一次执行至该函数中的Map和对应的ic-hitdadima .

### Tapable

一个类似于Nodejs的EventEmitter的库，主要是控制钩子函数的发布和订阅，哦控制着webpack的插件系统。

SyncHook,SyncBailHook,SyncWaterfallHook,SyncLoopHook （同步）
AsynParallelHook。。。。。。（异步钩子）

SyncBailHook：熔断钩子：遇到return直接返回
SyncWaterfallHook：流水钩子：执行结果传递到下一个插件


所有钩子都有hook后缀 

![钩子总结](https://puui.qpic.cn/vupload/0/1585100812948_6va55g1hmap.png/0)


钩子的绑定与执行

Tapable提供了同步和异步绑定钩子的方法，并且他们都有绑定事件和执行事件对应的方法

Async：绑定tapAsync/tapPromise/tap, 执行callAsync/promise

Sync: 绑定tap、执行call

webpack 是如何与webpack联系起来 ？

compiler

### Chrome Devtool Performance 中 DCL L FP FCP FMP LCP的含义

### DCL， L

首先要了解几个概念

DCL：DOMContentLoaded, 表示HTML加载完成事件，
L：表示页面所有资源加载完成

navigation Timing API

[performance](./performance.png)

fetchStart， DOMContentLoaded

startTime(Prompt for unload) 

FP, FCP, FMP, LCP

#### 发生了什么？

FP(First Paint): 页面在导航后首次呈现出不同于呈现前内容的时间点

FCP：首次挥之任何文本图像非空白canvas 或 SVG时间点

#### 它有什么用？FMP & LCP

FMP：首次绘制页面“主要内容”时间点。

本质上是通过一种算法来猜测某个时间点可能是FMP。

LCP：可视区域内容最大的可见元素开始出现在页面上的时间点

详细对比：

对于旧版的VIP+肯德基承载页多次测试页面取得平均数据如下

## WebWorker

提升的性能 = 并行提升的新能 - 通信消耗的性能

主线程和worker线程的数据传输方式：

主线程和Worker线程属于同一进程，可以访问和操作进程的内存空间。

通信方式：

- structured clone：postMessage 默认的通信方式，复制一份线程A的JS Object 内存到线程B，线程B能获取和操作新复制的内存。

缺点：通过复制内存的方式，简单有效地隔离了不同线程内次你，避免冲突；但是复制过程中，如果Object规模过大，会占用大量的线程时间

- transfer memory：转移内存，不需要同步执行主线程的 object serialization,大大减少传输过程占用的时间，但是转让后，线程A无法在访问这个内存

- shared array buffer：共享内存，线程A和线程B共享一块内存，但是多个并行的线程共享内存会产生竞争问题。

commid: 计平用的，多openid的时候识别同一个账号

openid：每个平台对应不同的openid

vuid：视频自己用的id

appid: 每个平台不一样的，区别平台

### URI

登录信息，端口号，等信息

相对URL，绝对URL。

绝对URL = 基本路径 + 相对URL

HTTP1.1 为了实现保持状态功能，添加cookies技术。有了cookie+http就可以管理状态了。

### 代码评判

易扩展，可读，可维护

通过各个维度去进行判断，需要综合各个维度来考量。

可读性，十分重要

keep it simple ，简单一点，简洁易懂

可维护，灵活，简洁，可扩展

封装：降低暴露的特性，只关注极少数的点，降低出错频率

抽象：提供一种只需要关注实现功能，而不需要关注细节的设计思路

继承：最大程度的实现代码的可复用，但是如果继承层次过深，可能会导致代码可读性差，可维护性差。

多态：子类可以替代父类，实际代码运行过程中，调用子类的方法实现。

多态需要编程语言提供特殊的语法机制

多态的实现方式除了使用继承之外，还可以使用接口类语法，duck-typing 语法（JavaScript）。

利用接口类来实现继承，子类必须要实现父类所规定的方法

duck-typing：只要定义了父类中的方法，就可以看作是该类的一个子类。

    class card {
        constructor (width) {
            this.width = width
        }
    }

    class s-card {
        constructor (width) {
            this.width = 20
        }
    }

    function getCardwidth (card) {
        return card.width
    }

封装：信息隐藏，数据访问保护。

抽象：提高代码的可扩展性，维护性，修改实现不需要改变定义，减少代码的改动范围。

继承：代码可复用

多态：扩展性，可复用性，灵活性

#### 单一职责

SOLID原则：包含了5个设计原则：单一职责，开闭原则，依赖倒置（设计框架的时候常用），

- 单一职责，一个类只能负责一个只能或者功能。设计类的时候粒度要小，功能单一。
- 开闭原则，对扩展开放，对修改关闭。

引入handler概念，将if判断逻辑分散在各个handler中

    for (handler in handlerArr) {
        handler.check(info)
    }


控制反转：IOC

依赖注入 DI

依赖翻转：DIP

DRY：don't repeat yourself，不要写重复代码。（逻辑重复但是功能意图不重复，不违反DRY；意图重复，逻辑不重复，违反DRY，需要统一逻辑思路）

高内聚：用来指导类本身的设计
松耦合：用来指导类与类之间的依赖关系

迪米特法则：Law of Demeter LOD， 最小知识原则

不该有依赖关系的类之间不要有依赖；有依赖关系的类之间，尽量依赖必要的接口（最小知识原则）



### 像素相关概念

CSS像素：跟DPR挂钩，最后换算成物理像素

物理像素：设备像素，pt

设备独立像素：CSS像素 = 设备独立像素 = 逻辑像素，可以通过dpr换算成一个独立像素为多少物理像素

