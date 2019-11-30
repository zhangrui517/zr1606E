#! /usr/bin/env node

// console.log("爱你呦")
// console.log(process.argv[2] + '爱你呦')

// let argv = process.argv.slice(2)

// if (argv[0] === '-v') {
//     console.log("版本号为1.0.0")
// } else if (argv[0] === 'create') {
//     console.log("创建")
// }


// //commander
let program = require('commander')
let package = require('./package.json')
const inquirer = require('inquirer');


const promptList = [{
    type: 'input',
    message: '请输入姓名:',
    name: 'name',
    default: "user" // 默认值
}, {
    type: 'input',
    message: '身份证号:',
    name: 'phone',
    // validate: function(val) {
    //     if (val.match(/\d{18}/g)) { // 校验位数
    //         return val;
    //     }
    //     return "请输入18位数字";
    // }
}, {
    type: 'list',
    message: '请选择性别:',
    name: 'sex',
    choices: [
        "男",
        "女"
    ],
    filter: function(val) { // 使用filter将回答变为小写
        return val.toLowerCase();
    }
}]

program
    .version(package.version, "-v,--version")
    //多个单词形式
    .option('-a,--add', 'add a file')
    .option('-u,--update', 'update something')
    .option('-r,--remove', 'remove somthing')
    .action(function() {
        inquirer.prompt(promptList).then(answers => {
            console.log(answers)
        })
    })
    .parse(process.argv)



// if (program.add) console.log('add a file')
// if (program.update) console.log(' update something')
// if (program.remove) console.log(' remove something')