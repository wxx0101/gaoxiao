import Mock from "mockjs"


const loginData = [
    {
        mailbox: "2859050840@qq.com",
        pwd: "0646"
    },
    {
        mailbox: "2627842576@qq.com",
        pwd: "2627"
    }
]

Mock.mock("/login", (({ body }) => {
    let { mailbox, pwd } = JSON.parse(body)
    let mailboxFlag = loginData.find(item => item.mailbox === mailbox)
    let pwdFlag = loginData.find(item => item.pwd === pwd)
    if (mailboxFlag && pwdFlag) {
        localStorage.mailbox = mailbox;
        return {
            code: 0,
            mes: "登录成功"
        }
    } else if (mailboxFlag && !pwdFlag) {
        return {
            code: 1,
            mes: "密码输入有误"
        }
    } else {
        return {
            code: 2,
            mes: "用户名不存在,请亲注册"
        }
    }
}))

Mock.mock("/regist", (({ body }) => {
    let { mailbox, pwd } = JSON.parse(body)
    let flag = loginData.find(item => item.mailbox === mailbox)
    if (!flag) {
        localStorage.mailbox = mailbox;
        loginData.push({mailbox: mailbox,pwd: pwd})
        return {
            code: 0,
            mes: "注册成功"
        }
    } else {
        return {
            code: 1,
            mes: "用户名已存在,请前去登录吧"
        }
    }
}))

const stateData = [
    {
        title: "很重要-很紧急",
        id: 1,
        foods: []
    },
    {
        title: "重要-不紧急",
        id: 2,
        foods: []
    },
    {
        title: "不重要-紧急",
        id: 3,
        foods: []
    },
    {
        title: "不重要-不紧急",
        id: 4,
        foods: []
    }
]

Mock.mock("/stateData",stateData)