import styled from "styled-components";

const DSWrapper = styled.div`
	background-color: #fff;
	padding: 1em;
	width: 300px;
	box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
	border-radius: 6px;
	font-weight: 500;

	div {
		margin-bottom: 1.5rem;
		svg {
			margin-right: 1rem;
		}
		h4 {
			margin-top: 0.3rem;
			font-size: 16px;
		}
	}

	p > span > svg {
		margin-right: 1rem;
	}
`;

export default DSWrapper;
