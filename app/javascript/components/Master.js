import React from "react"
import PropTypes from "prop-types"
import C1 from "./C1"
import EditArea from "./EditArea"

class Master extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			img_url: this.props.img_url,
			serif: this.props.serif,
			top: this.props.top,
			left: this.props.left
		}
	}

	handleSerifChange = (serif) => {
		this.setState({serif:serif});
	}
	handleLeftChange = (left) => {
		this.setState({left:left});
	}
	handleTopChange = (top) => {
		this.setState({top:top});
	}

  render () {
    return (
      <React.Fragment>
				<C1 
				serif={this.state.serif}
				img_url={this.state.img_url}
				top={this.state.top}
				left={this.state.left}
				/>
				<EditArea 
				handleSerifChange={this.handleSerifChange}
				handleLeftChange={this.handleLeftChange}
				handleTopChange={this.handleTopChange}
				/>
      </React.Fragment>
    );
  }
}

export default Master
