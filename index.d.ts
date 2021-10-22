export = cin;
/**
 * @function cin
 * @description 对node的输入流进行封装，从而在控制台友好的进行字符输入并获取输入结果
 * @param {Function} [callback] 可选参数callback，当想以异步回调方式进行调用时就传入callback进行处理
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
 *     process.stdout.write('请输入3:'); //标准输出
 *     //将标准输入进行封装
 *     cin((data) => {
 *         //更建议直接调用console.log()，他底层是封装的格式化的process.stdout.write
 *         process.stdout.write("输入结果为:" + data);
 *     });
 * }
 *
 */
declare function cin(callback?: Function): Promise<any>;
