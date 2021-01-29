import styled from "styled-components";

const MHWrapper = styled.div`
	padding: 1em;
	max-width: 300px;
	font-size: 13px;

	ul.timeline {
		list-style-type: none;
		position: relative;
		margin-left: -1.5rem;

		li {
			margin: 20px 0;
			padding-left: 15px;

			&:before {
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
		}
		&:before {
			content: " ";
			background: #d4d9df;
			display: inline-block;
			position: absolute;
			left: 29px;
			width: 1px;
			height: 100%;
			z-index: 400;
		}
	}

	.timeline > li {
		p.title {
			font-weight: 500;
			margin-bottom: 0.4rem;
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
`;

export default MHWrapper;
