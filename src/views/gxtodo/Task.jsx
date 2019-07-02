import React, { Component } from 'react'
import Slide from "../../common/Slide"
import axios from "axios"
import "../../mock/mock"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Actions from "../../store/Actions"

class Task extends Component {
    state = {
        stateData: [],
        self: -1,
        val: ""
    }
    render() {
        let { stateData, self, val } = this.state
        let { data,checked } = this.props
        console.log(checked)
        return (
            <div className="wrap">
                <Slide />
                <main>
                    <div className="topBox">
                        <b>2019-06-02</b>
                    </div>
                    <div className="content">
                        {
                            data.map((item, index) => <div key={item.id} className="item">
                                <div className="top" onClick={this.InputTask.bind(this, item.id)} >{item.title}<b onClick={() => { this.props.addProject(val, item.id); this.setState({ val: "" }) }}>+</b>
                                    {self === item.id && <input value={val} onChange={(e) => {
                                        this.setState({
                                            val: e.target.value
                                        })
                                    }} type="text" placeholder="输入任务名" />}
                                    {
                                        data[index].foods.map((ele, key) => <li key={key} onClick={()=> this.props.event(index,key,ele)}><span onClick={() => this.props.delProject(index, key)}></span>{ele.val}</li>)
                                    }
                                </div>
                                <div className="maskBox">
                                    {
                                        data.map((item,key) => <p key={key} onClick={()=>{checked && this.props.Change(key)}}>{item.title}</p>)
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                </main>
            </div>
        )
    }
    InputTask(id) {
        this.setState({
            self: id
        })
    }
    componentDidMount() {
        this.props.getData("/stateData")
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data,
        checked: state.checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
