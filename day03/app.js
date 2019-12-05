// const Koa = require('koa')
// const app = new Koa()
// app.use(async(ctx, next) => {
//     console.log("第一层开始")
//     await next()
//     console.log("第一层结束")
// })
// app.listen(8080, () => {
//     console.log("服务启动成功")
// })


const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
// const path = require('path');

app.use(async(ctx, next) => {
    let startTime = new Date().getTime();
    console.log("洋葱第一层开始");
    await next();
    let endTime = new Date().getTime();
    let timer = endTime - startTime;

    // console.log(ctx.path)  /api/add-post

    //ctx.request.method  ctx.response.status timer
    let filePath = `${ctx.path}-${ctx.request.method}-${ctx.response.status}-${timer}.log`;

    // fs.writeFileSync(process.cwd() + filePath, `耗时${timer}`, 'utf-8');

    console.log("洋葱第一层结束");
})

app.use(async(ctx, next) => {
    console.log("洋葱第二层开始");
    await next();
    console.log("洋葱第二层结束")
})

app.use(async(ctx, next) => {
    console.log("洋葱第三层开始");
    console.log("洋葱第三层结束")
    await next()
})
app.listen(8080, () => {
    console.log("服务启动成功")
})