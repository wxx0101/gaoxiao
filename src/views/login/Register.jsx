import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import axios from "axios"
import "../../mock/mock"

export default class Register extends Component {
    state = {
        mailbox: "",
        pwd: "",
        qrpwd: ""
    }
    render() {
        let {open,qrpwd,pwd,mailbox} = this.state
        return (
            <div className="registerBox">
                <img src="http://s.gxtodo.com/dist/img/girls.png" alt="" />
                <div className="rightBox">
                    <h2>注册</h2>
                    <p>注册邮箱：<input type="text" value={mailbox} placeholder="请输入邮箱" onChange={(e) => {
                        this.setState({
                            mailbox: e.target.value
                        })
                    }} /></p>
                    <p>输入密码：<input type="text" value={pwd} placeholder="请输入密码" onChange={(e) => {
                        this.setState({
                            pwd: e.target.value
                        })
                    }} /></p>
                    <p>确认密码：<input type="text" value={qrpwd} placeholder="请再次输入密码" onChange={(e) => {
                        this.setState({
                            qrpwd: e.target.value
                        })
                    }} /></p>
                    {open && <b>两次输入的密码必须一致或输入框不能为空</b>}
                    <button onClick={this.registClick.bind(this)}>注册</button>
                    <NavLink to="/Login">已有账号？</NavLink>
                </div>
            </div>
        )
    }
    registClick(){
        let {qrpwd,pwd,mailbox} = this.state
        let {history} = this.props
        if(qrpwd!==""&&pwd!==""&&mailbox!==""&&qrpwd===pwd){
            axios.post("/regist",{
                mailbox,
                pwd
            }).then(res => {  
                let {code,mes} = res.data
                if(code){
                    alert(mes)
                }else{
                    alert(mes)
                    history.push("/Login")
                }
            })
        }else{
            this.setState({
                open: true
            })
        }
    }
}
