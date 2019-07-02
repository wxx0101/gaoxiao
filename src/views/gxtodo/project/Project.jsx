import React, { Component } from 'react'
import Slide from "../../../common/Slide"
import {NavLink} from "react-router-dom"
import RouteView from "../../../router/RouteView"

export default class Project extends Component {
    render() {
        let {routes} = this.props
        return (
            <div className="wrap">
                <Slide />
                <main>
                    <nav><NavLink to="/Project/Eventitems">活动项目</NavLink>
                    <NavLink to="/Project/Archiveditems">归档项目</NavLink></nav>
                    <div className="projectBox">
                        <RouteView routes={routes} />
                    </div>
                </main>
          </div>
        )
    }
}
