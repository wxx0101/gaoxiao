import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import axios from "axios"
import "../../mock/mock"

export default class Login extends Component {
    state = {
        mailbox: "",
        pwd: "",
        open: false
    }
    render() {
        let {mailbox,pwd,open} = this.state
        return (
            <div className="loginBox">
                <img src="http://s.gxtodo.com/dist/img/girls.png" alt="" />
                <div className="rightBox">
                    <h2>登录</h2>
                    <p>邮箱：<input type="text" placeholder="请输入邮箱" value={mailbox} onChange={(e) => {
                        this.setState({
                            mailbox: e.target.value
                        })
                    }} /></p>
                    <p>密码：<input type="text" placeholder="请输入密码" value={pwd} onChange={(e) => {
                        this.setState({
                            pwd: e.target.value
                        })
                    }} /></p>
                    {open && <b>用户名或密码不能为空</b>}
                    <button onClick={this.loginClick.bind(this)}>登录</button>
                    <NavLink to="/Register">木有账号？马上注册一个</NavLink>
                </div>
            </div>
        )
    }
    componentDidMount(){
       
    }
    loginClick(){
        let {mailbox,pwd} = this.state
        let {history} = this.props
        if(mailbox!=="" && pwd!==""){
            axios.post("/login",{
                mailbox,
                pwd
            }).then(res=> {
                let {code,mes} = res.data
                if(code){
                    alert(mes)
                }else if(code === 1){
                    alert(mes)
                }else{
                    alert(mes)
                    history.push("/Task")
                }
            })
        }else{
            this.setState({
                open: true
            })
        }
    }
}
