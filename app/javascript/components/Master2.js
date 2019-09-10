import React,{ useState, useReducer } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import C2_Wrap from "./C2_Wrap"
import EditArea2_1 from "./EditArea2_1"
import EditArea2_2 from "./EditArea2_2"

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const Master2 = (props) => {
	const  props2  = {editScene: [props["0"],props["1"]]}

	const [initialState,setInitialState] = useState(props2)


	const [state, dispatch] = useReducer(reducer, initialState)


	// constructor(props){
	// 	super(props);
	// 	this.state = [{
	// 		img_url: this.props.img_url,
	// 		serif: this.props.serif,
	// 		top: this.props.top,
	// 		left: this.props.left},

	// 		{img_url: this.props.img_url2,
	// 		serif: this.props.serif2,
	// 		top: this.props.top2,
	// 		left: this.props.left2
	// 	}]
	// }

	// handleSerifChange = (serif) => {
	// 	this.setState({0:{serif:serif}});
	// }
	// handleLeftChange = (left) => {
	// 	this.setState({0:{left:left}});
	// }
	// handleTopChange = (top) => {
	// 	this.setState({0:{top:top}});
	// }



	// handleSerifChangeB = (serif) => {
	// 	this.setState({1:{serif:serif}});
	// }
	// handleLeftChangeB = (left) => {
	// 	this.setState({1:{left:left}});
	// }
	// handleTopChangeB = (top) => {
	// 	this.setState({1:{top:top}});
	// }


    return (
      <AppContext.Provider value={{ state, dispatch }}>
				<C2_Wrap/>
					<Wrap1>
						<EditArea2_1/>
					</Wrap1>
					<Wrap2>
						<EditArea2_2/>
					</Wrap2>
      </AppContext.Provider>
    );
}

const Wrap = styled.div`
	width:400px;
	height:450px;
	margin:0 auto;
	border:1px solid #000;
	border-radius:5px;
	position:absolute;
`;

const Wrap1 = styled(Wrap)`
	top:0px;
	right:0px;
`;

const Wrap2 = styled(Wrap)`
	top:460px;
	right:0px;
`;

export default Master2
