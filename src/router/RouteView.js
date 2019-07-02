import React from 'react'
import {Redirect,Route,Switch} from "react-router-dom"

function RouteView({routes=[]}){
    const routesArr = routes.length && routes.filter(item => !item.redirect)
    const redirectArr = routes.length && routes.filter(item => item.redirect).map((item,key) => {
        return <Redirect key={key} from={item.path} to={item.redirect} />
    })

    return <Switch>
        {
            routesArr.map((item,key) => <Route key={key} path={item.path} render={(props) => {
                return <item.component {...props} routes={item.children} />  
            }} />).concat(redirectArr)
        }
    </Switch>
}

export default RouteView;
