import styled from "styled-components";

const Wraooer = styled.nav`
	box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
	.navbar-brand {
		margin-right: 80px;
		span {
			font-size: 16px;
			line-height: 22px;
			font-weight: bold;
		}
	}

	.nav-item {
		padding: 0 15px;
	}

	.nav-item .active {
		color: red;
	}

	div > ul > li > a > span > svg {
		margin-right: 8px;
	}

	div > div > svg {
		margin: 0 25px;
	}

	form > span {
		position: absolute;
		margin-left: 15px;
		height: 25px;
		display: flex;
		align-items: center;
	}

	input {
		padding-left: 40px;
	}

	div > div > span > svg {
		margin-left: 10px;
	}
`;

export default Wraooer;
