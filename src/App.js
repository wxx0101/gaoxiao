import React, { Component } from 'react'
import Router from "./router/index"
import store from "./store/redux"
import {Provider} from "react-redux"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


export default App;
