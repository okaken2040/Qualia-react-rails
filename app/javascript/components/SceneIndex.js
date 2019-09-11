import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Page1 from "./Page1"
import Page2 from "./Page2"

const page1 = () => <div><h1>page1</h1>1枚目のページです</div>

const SceneIndex = () => {
    return (
      <React.Fragment>
				<BrowserRouter>
					<div><Link to='/page1'>page1</Link></div>
					<div><Link to='/page2'>page2</Link></div>
					<Route path='/page1' exact component={Page1}/>
					<Route path='/page2' exact component={Page2}/>
				</BrowserRouter>
      </React.Fragment>
    );
}

export default SceneIndex
