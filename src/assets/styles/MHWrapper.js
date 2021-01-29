import styled from "styled-components";

const MHWrapper = styled.div`
	max-width: 300px;
	font-size: 13px;
	ul.timeline {
		list-style-type: none;
		position: relative;
	}
	ul.timeline:before {
		content: " ";
		background: #d4d9df;
		display: inline-block;
		position: absolute;
		left: 29px;
		width: 1px;
		height: 100%;
		z-index: 400;
	}
	ul.timeline > li {
		margin: 20px 0;
		padding-left: 20px;
	}
	ul.timeline > li:before {
		content: " ";
		background: gray;
		display: inline-block;
		position: absolute;
		border-radius: 50%;
		left: 25px;
		width: 10px;
		height: 10px;
		z-index: 400;
	}

	.timeline > li {
		p.title {
			font-weight: 500;
			margin-bottom: 0.6rem;
		}
		span {
			color: #a1aace;
			font-weight: 500;
		}
		span.timestamp {
			margin-right: 0.4rem;
		}
		span.medium {
			&:before {
				display: inline-block;
				content: "• ";
				margin-right: 0.4rem;
			}
		}
	}
`;

export default MHWrapper;
