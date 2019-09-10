import React, {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import AppContext from '../contexts/AppContext'

const C2_2 = () => {
	const { state } = useContext(AppContext)
	// handleSerifChange(){
	// }

    return (
      <React.Fragment>
				<ShapedScene2>
						<Trapezoid2>
							<Img2 src={state.editScene[1].img_url}/>
						</Trapezoid2>
						<Serif top={state.editScene[1].top} left={state.editScene[1].left} >
							<p>セリフ「 {state.editScene[1].serif}」 <br/>
							改行してます。
							</p>
						</Serif>
				</ShapedScene2>
      </React.Fragment>
    );
}


const Size = {
	small :10,
	base :16,
	large :20
}


const Scene = styled.div`
	display:inline-block;
	position:relative;
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

const Trapezoid2 = styled.div`
	display: inline-block;
	transform-origin: 0 100%;
	overflow: hidden;
	transform: skew(15deg);
	position:relative;
	right:-4px;
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



C2_2.propTypes = {
  greeting: PropTypes.string
};
export default C2_2
