## 更好的Nodejs

调试方式：

- 打日志
- 断点调试
- 测试驱动l

## 模块与核心

commonJS

依赖闭环

for (var i = 0; i < 5; i ++) {
    setTimeout(()=>{console.log(i)})
}

function () {
    let i
    while(i < 5) {
        i = 0
        setTimeout(() => {
            console.log(i)
        })
        i++
    }
}

inquirer.js 可嵌入式的美观命令行界面。

询问操作者问题，获取并解析用户输入，监测用户回答是否合法，管理多层级提示。

### 异步写法与流程控制

异步流程调用方式，改进方式等。

Asynchronous 异步

Nodejs异步原理的核心是EventLoop，调用NodejsAPI的时候，会把具体的操作和回调函数传到事件循环中去执行，EventLoop维护了一个回调函数队列，维护的是一个先进先出的队列回调函数在队列中是顺序执行的。

EventLoop使用C++编写的Libuv库，异步事件驱动

异步的核心在于：Nodejs SDK中的API调用，然后交给EventLoop（Lib）去执行

在高并发的环境中，要注意不要使用同步的API

    const fs = require('fs')
    const path = '.'
    fs.readdir(path, (err, files) => {
        if (err) {
            throw new Error(err)
        }
        console.log(files)
    }) // 异步获取文件名称

如果需要开发工具类的软件，可以考虑使用同步的API，但是大部分情况都推荐使用异步的。特别是高并发

同步会带来线程的阻塞，易于理解
异步会造成嵌套，代码不利于维护。效率高

### 异步写法

#### 错误优先回调

Nodejs中有两种事件处理方式：callback，EventEmitter

错误有限的回调方式， error-first回调。如果有错误就会返回error信息，正常操作返回null

函数定义

    fs.readFile(path, (err, data) => {
        // ...
    })

#### EventEmitter

#### Koa 洋葱模型

    const koa = require('koa')
    const app = new Koa()

    app.use(async (ctx, next) => {
        console.log('middle ware 1 in')
        await next()
        console.log('moddle ware 1 out')
    })
    app.use(async (ctx, next) => {
        console.log('middle ware 2 in')
        await next()
        console.log('moddle ware 2 out')
    })
    app.use(async (ctx, next) => {
        console.log('middle ware 3 in')
    })

    // 1 in , 2 in, 3 in, 2 out, 1 out