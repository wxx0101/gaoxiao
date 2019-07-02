import React from "react"
import { BrowserRouter } from "react-router-dom"
import RouteView from "./RouteView"
import routes from "./routeSetting"

function Router() {
    return <BrowserRouter>
        <RouteView routes={routes} />
    </BrowserRouter>
}
export default Router;