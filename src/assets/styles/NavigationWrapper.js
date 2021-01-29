import styled from "styled-components";

const Wrapper = styled.nav`
	box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
	@media (min-width: 992px) {
		height: 60px;
		padding: 0 1rem;
	}

	.navbar-brand {
		margin-right: 80px;
		span {
			font-size: 16px;
			line-height: 22px;
			font-weight: bold;
		}

		@media (max-width: 1200px) {
			margin-right: 30px;
		}
	}

	.navbar-nav {
		@media (min-width: 992px) {
			height: 60px;
		}
	}

	.nav-item {
		padding: 0 15px;

		@media (max-width: 992px) {
			padding-left: 0.5em;
			border-bottom: 1px solid #396960;
		}

		@media (min-width: 992px) {
			padding-top: 0.6rem;
		}
	}

	li.active {
		background-color: #deefff;
		border-bottom: 4px solid #006fd6;
		a.nav-link {
			color: #006fd6 !important;
			font-weight: 500;
			span > svg {
				color: #006fd6;
			}
		}
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

export default Wrapper;
