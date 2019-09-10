import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import C2_1 from "./C2_1"
import C2_2 from "./C2_2"


const C2_Wrap = () => {

	// handleSerifChange(){
	// }

    return (
      <React.Fragment>
				{/* <div>シーン1top: {this.props.top}</div>
				<div>シーン1left: {this.props.left}</div> */}
        <Wrap>
					<C2_1/>
					<C2_2/>
				</Wrap>
      </React.Fragment>
    );
}

const Wrap = styled.div`
	width:897px;
	background-color:#000;
	border:3px solid #000;
	font-size:0;
	`;
	// font-size:0;は、中の要素(inline-block)の無駄な余白を打ち消す。

		// &:after {
		// 	content: "";
		// 	display: block;
		// 	clear: both;
		// }
// ↑の&:afterはいらない






export default C2_Wrap
