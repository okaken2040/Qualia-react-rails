import React, {useContext, useState, useEffect, useRef} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
	CHANGE_SERIF,
	CHANGE_LEFT,
	CHANGE_TOP
} from '../actions'
import AppContext from '../contexts/AppContext'

const EditArea2_2 = () => {
	const { state, dispatch } = useContext(AppContext)
	const [img_url,setImg_url] = useState('')
	const [serif,setSerif] = useState('')
	const [left,setLeft] = useState('')
	const [top,setTop] = useState('')

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		img_url: "",
	// 		serif: "",
	// 		top: "",
	// 		left: ""
	// 	}
	// }



	const isFirstRef = useRef(true);


	// 次回使用するために前回のステートを更新
	const lastStateRef = useRef();

	useEffect(() => {
		if (isFirstRef.current) {
			isFirstRef.current = false;
		} else {
			dispatch({
				type: CHANGE_SERIF,
				serif,
				index:0
			})
		}
		lastStateRef.current = serif;
	}, [serif])

	useEffect(() => {
		dispatch({
			type: CHANGE_LEFT,
			left,
			index:1
		})
	}, [left])

	useEffect(() => {
		dispatch({
			type: CHANGE_TOP,
			top,
			index:1
		})
	}, [top])



	// handleSerifChange2(event){
	// 	// console.log(event.target.value);
  //   const inputValue = event.target.value;
	// 	this.setState({serif:inputValue});
	// 	this.props.handleSerifChangeB(event.target.value);
	// }
	// handleLeftChange2(event){
	// 	const inputValue = event.target.value;
	// 	this.setState({left:inputValue});
	// 	this.props.handleLeftChangeB(event.target.value);
	// }
	// handleTopChange2(event){
	// 	const inputValue = event.target.value;
	// 	this.setState({top:inputValue});
	// 	this.props.handleTopChangeB(event.target.value);
	// }
	// handleImgChange2(event){
	// 	console.log(event.target.value);
	// }


    return (
      <React.Fragment>

					<form action="">
						<h3>セリフ2設定</h3>
						<p>セリフ</p>
						<textarea 
							value={serif}
							onChange={ e => setSerif(e.target.value)}
						/>
						<p>X座標</p>
						<input type="text"
							value={left}
							onChange={ e => setLeft(e.target.value)}
							/>
						<p>Y座標</p>
						<input type="text"
							value={top}
							onChange={ e => setTop(e.target.value)}
							/>
						<h3>画像設定</h3>
						<input type="file"
						/> <br/>
						<input type="submit" value="更新"/>
					</form>

      </React.Fragment>
    );
}






export default EditArea2_2
