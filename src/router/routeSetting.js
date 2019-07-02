import React from "react"
import loadable from "react-loadable"

class Loading extends React.Component{
    render(){
        return <>Loading.....</>
    }
}
const Home = loadable({
    loader: () => import("../views/Home"),
    loading: Loading
})
const Login = loadable({
    loader: () => import("../views/login/Login"),
    loading: Loading
})
const Register = loadable({
    loader: () => import("../views/login/Register"),
    loading: Loading
})
const Task = loadable({
    loader: () => import("../views/gxtodo/Task"),
    loading: Loading
})
const Project = loadable({
    loader: () => import("../views/gxtodo/project/Project"),
    loading: Loading
})
const Note = loadable({
    loader: () => import("../views/gxtodo/Note"),
    loading: Loading
})
const Label = loadable({
    loader: () => import("../views/gxtodo/Label"),
    loading: Loading
})
const Address = loadable({
    loader: () => import("../views/gxtodo/Address"),
    loading: Loading
})
const Eventitems = loadable({
    loader: () => import("../views/gxtodo/project/Eventitems"),
    loading: Loading
})
const Archiveditems = loadable({
    loader: () => import("../views/gxtodo/project/Archiveditems"),
    loading: Loading
})

const routes = [
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/",
        redirect: "/Home"
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/Task",
        component: Task
    },
    {
        path: "/Project",
        component: Project,
        children: [
            {
                path: "/Project/Archiveditems",
                component: Archiveditems
            },
            {
                path: "/Project/Eventitems",
                component: Eventitems
            },
            {
                path: "/Project",
                redirect: "/Project/Eventitems"
            }
        ]
    },
    {
        path: "/Note",
        component: Note
    },
    {
        path: "/Label",
        component: Label
    },
    {
        path: "/Address",
        component: Address
    },
    // {
    //     path: "/",
    //     redirect: "/Task"
    // },
]
export default routes