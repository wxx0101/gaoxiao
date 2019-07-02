import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Slide extends Component {
    render() {
        return (
            <div className="slideBox">  
                <p>{localStorage.mailbox ? localStorage.mailbox : "登录"}</p>
                <NavLink to="/Task">任务</NavLink>
                <NavLink to="/Note">便签</NavLink>
                <NavLink to="/Project">项目</NavLink>
                <NavLink to="/Address">地点</NavLink>
                <NavLink to="/Label">标签</NavLink>
            </div>
        )
    }
}
