/**
 * @function cin
 * @description 对node的输入流进行封装，从而在控制台友好的进行字符输入并获取输入结果
 * @param {Function} [callback] 可选参数 callback ，当想以异步回调方式进行调用时就传入callback进行处理
 * @param {String} [encoding] 可选参数 encoding ，设置输入流的编码方式，默认为utf-8
 * @returns {Promise} 当以同步方式调用时，会返回一个promise结果
 * @example
 * 
 * 
 * main(); // 在main函数中调用cin方法
 * 
 * // main函数的实现
 * async function main() {
 * 
 *     // 以同步方式写代码进行调用（所在的外层main函数需要声明为异步async）
 *     process.stdout.write('请输入:'); //标准输出
 *     let num = await cin(); //将标准输入进行封装
 *     //更建议直接调用console.log()，他底层是封装的格式化的process.stdout.write
 *     process.stdout.write("输入结果为:" + num);
 * 
 * 
 *     // 以异步回调方式进行调用
 *     process.stdout.write('请输入2:'); //标准输出
 *     //将标准输入进行封装
 *     cin((data) => {
 *         //更建议直接调用console.log()，他底层是封装的格式化的process.stdout.write
 *         process.stdout.write("输入结果为:" + data);
 *     }); 
 * }
 * 
 */
async function cin(callback, encoding = 'utf-8') {
    return new Promise(function (reslove, reject) {
        process.stdin.resume();//在旧模式下使用stdin必须调用process.stdin.resume()。注意如果调用了process.stdin.resume() stdin将转为旧模式。
        process.stdin.setEncoding(encoding); //设置输入流的编码方式为utf-8
        // 监听数据输入
        process.stdin.on('data', function (data) {
            reslove(data);
            // 如果用户还是想以回调的方式进行使用的话，那么就可以传入此回调函数
            if (typeof callback == "function") {
                callback(data);
            }
            process.stdin.emit('end'); //结束输入流
        });
        process.stdin.on('end', function () {
            process.stdin.pause(); //当输入流结束后就关闭输入流，不然后续代码会一直等待输入
        });
    })
}
module.exports = cin;