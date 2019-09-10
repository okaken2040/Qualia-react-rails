import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

class EditArea extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			img_url: "",
			serif: "",
			top: "",
			left: ""
		}
	}


	handleSerifChange2(event){
		// console.log(event.target.value);
    const inputValue = event.target.value;
		this.setState({serif:inputValue});
		this.props.handleSerifChange(event.target.value);
	}
	handleLeftChange2(event){
		const inputValue = event.target.value;
		this.setState({left:inputValue});
		this.props.handleLeftChange(event.target.value);
	}
	handleTopChange2(event){
		const inputValue = event.target.value;
		this.setState({top:inputValue});
		this.props.handleTopChange(event.target.value);
	}
	handleImgChange2(event){
		console.log(event.target.value);
	}

  render () {
		console.log(this.props);
    return (
      <React.Fragment>
				<Wrap>
					<form action="">
						<h3>セリフ設定</h3>
						<p>セリフ</p>
						<textarea 
							value={this.state.serif}
							onChange={(event) => {this.handleSerifChange2(event)}}
						/>
						<p>X座標</p>
						<input type="text"
							value={this.state.left}
							onChange={(event) => {this.handleLeftChange2(event)}}
							/>
						<p>Y座標</p>
						<input type="text"
							value={this.state.top}
							onChange={(event) => {this.handleTopChange2(event)}}
							/>
						<h3>画像設定</h3>
						<input type="file"
							onChange={(event) => {this.handleImgChange2(event)}}
						/> <br/>
						<input type="submit" value="更新"/>
					</form>
				</Wrap>
      </React.Fragment>
    );
  }
}


const Wrap = styled.div`
	width:400px;
	height:1000px;
	margin:0 auto;
	border:1px solid #000;
	border-radius:5px;
	position:absolute;
	top:0;
	right:0;
`;



export default EditArea
