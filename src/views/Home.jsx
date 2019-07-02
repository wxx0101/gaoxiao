import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <div className="homeBox">
                <div className="top">
                <NavLink  to="/Login">登录</NavLink>
                <NavLink to="/Register">注册</NavLink>
                </div>
                <img src={require("../img/banner.jpg")} alt="" />
                <div className="bottom">
                    <ul>
                        <li><p>点击下载安卓版</p></li>
                        <li> <img src={require("../img/qr.png")} alt="" /></li>
                    </ul>
                    <ul>
                        <li><p>点击下载iOS版</p></li>
                        <li> <img src={require("../img/qr.png")} alt="" /></li>
                    </ul>
                    <ul>
                        <li><p>点击下载安卓版</p></li>
                        <li><NavLink to={localStorage.mailbox ? "/Task" : "/Login" }>开始使用>></NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
