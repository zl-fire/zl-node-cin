# zl-node-cin
**模块说明：**
对node的输入流进行封装，从而在控制台友好的进行字符输入与获取

# 说明
1. node中的标准输入流与输出流是通过process.stdin 与 process. stdout 进行实现
2. 对于输出，console对象的log/info等各方法已经非常对process.stdout做了格式化的封装，调用起来非常方便
   
3. 但是，对于输入流，我们确还得使用类似于如下方式，相对比较麻烦。
```js
        process.stdin.resume();//在旧模式下使用stdin必须调用process.stdin.resume()。注意如果调用了process.stdin.resume() stdin将转为旧模式。
        process.stdin.setEncoding('utf-8'); //设置输入流的编码方式为utf-8
        // 监听数据输入
        process.stdin.on('data', function (data) {
            process.stdin.emit('end'); //结束输入流
            // 获取输入结果：data
        });
        process.stdin.on('end', function () {
            process.stdin.pause(); //当输入流结束后就关闭输入流，不然后续代码会一直等待输入
        });
```
所以，这里我就对这个输入流做了一个简单的封装，有同步和异步两种方式

## 安装
```js

  npm i zl-node-cin -S

```
## 使用示例---以同步方式写代码进行调用

```js
let cin=require('zl-node-cin');
async function main() {
    // 以同步方式写代码进行调用（所在的外层main函数需要声明为异步async）
    process.stdout.write('请输入:'); //标准输出
    let num = await cin(); //将标准输入进行封装
    //更建议直接调用console.log()，他底层是封装的格式化的process.stdout.write
    process.stdout.write("输入结果为:" + num);
}
main(); //执行async入口函数：main
```
## 使用示例---以异步方式写代码进行调用

```js

    let cin=require('zl-node-cin');
    // 以异步回调方式进行调用
    process.stdout.write('请输入2:'); //标准输出
    //将标准输入进行封装
    cin((data) => {
        //更建议直接调用console.log()，他底层是封装的格式化的process.stdout.write
        process.stdout.write("输入结果为:" + data);
    }); 

```

## 具体参数说明
```js
/**
 * @function cin
 * @description 对node的输入流进行封装，从而在控制台友好的进行字符输入并获取输入结果
 * @param {Function} [callback] 可选参数 callback ，当想以异步回调方式进行调用时就传入callback进行处理
 * @param {String} [encoding] 可选参数 encoding ，设置输入流的编码方式，默认为utf-8
 * @returns {Promise} 当以同步方式调用时，会返回一个promise结果
 */
```