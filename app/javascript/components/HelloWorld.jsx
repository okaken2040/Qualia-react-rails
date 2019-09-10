import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HelloWorld = (props) => {

	return <React.Fragment>
			<Wrap>
				<ShapedScene>
					<Serif top={props.top}	left={props.left} >
						ご挨拶: {props.greeting}</Serif>
					<Serif>ご挨拶: {props.top}</Serif>
					<Serif>ご挨拶: {props.left}</Serif>
				</ShapedScene>
			</Wrap>
		</React.Fragment>
};

const Size = {
	small :10,
	base :16,
	large :20
}
const Wrap = styled.div`
	height:1200px;
	width:1200px;
	background-color:orange;
	&:after {
		content: "";
		display: block;
		clear: both;
	}
`;
const Scene = styled.div`
	height:1000px;
	width:1000px;
	background-color:pink;
	position:relative;
	&:hover {
		background-color:lightblue;
	}
`;
const Serif = styled.p`
	color:red;
	font-size:${Size.large}px;
	position:absolute;
	top:${props => props.top || 0}px;
	left:${props => props.left || 0}px;
`;

const ShapedScene = styled(Scene)`
	border-radius:25%;
`;



HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
