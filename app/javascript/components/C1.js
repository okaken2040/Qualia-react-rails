import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


class C1 extends React.Component {



	// handleSerifChange(){
	// }
	render () {

    return (
      <React.Fragment>
				{/* <div>シーン1top: {this.props.top}</div>
				<div>シーン1left: {this.props.left}</div> */}
        <Wrap>
					<ShapedScene1>
						<Trapezoid1>
							<Img1 src={this.props.img_url}/>
						</Trapezoid1>
						<Serif top={this.props.top} left={this.props.left} >
							<p>セリフ「 {this.props.serif}」 <br/>
							改行してます。
							</p>
						</Serif>
					</ShapedScene1>
					<ShapedScene2>
						<Trapezoid2>
							<Img2 src={this.props.img_url}/>
						</Trapezoid2>
						<Serif top={this.props.top} left={this.props.left} >
							<p>セリフ「 {this.props.serif}」 <br/>
							改行してます。
							</p>
						</Serif>
					</ShapedScene2>
				</Wrap>
      </React.Fragment>
    );
  }
}


const Size = {
	small :10,
	base :16,
	large :20
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

const Scene = styled.div`
	display:inline-block;
	position:relative;
`;

const ShapedScene1 = styled(Scene)`
	&:hover {
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const ShapedScene2 = styled(Scene)`
	width:0px;
	&:hover {
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const Trapezoid1 = styled.div`
	display: inline-block;
	transform-origin: 0 100%;
	overflow: hidden;
	transform: skew(15deg);
`;

const Trapezoid2 = styled.div`
	display: inline-block;
	transform-origin: 0 100%;
	overflow: hidden;
	transform: skew(15deg);
	position:relative;
	right:-4px;
`;

const Img1 = styled.img`
	display: inline-block;
	transform-origin: 0 100%;
	overflow: hidden;
	transform: skew(-15deg);
`;

const Img2 = styled.img`
	display: inline-block;
	transform-origin: 0 0;
	overflow: hidden;
	transform: skew(-15deg);
`;

const Serif = styled.div`
	color:Red;
	background-color:#fff;
	font-size:${Size.large}px;
	border-radius:10px;
	-webkit-writing-mode: vertical-rl;
			-ms-writing-mode: tb-rl;
					writing-mode: vertical-rl;
	position:absolute;
	top:${props => props.top }px;
	left:${props => props.left }px;
`;



C1.propTypes = {
  greeting: PropTypes.string
};
export default C1
