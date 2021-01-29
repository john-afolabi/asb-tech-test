import styled from "styled-components";

const SDT = styled.div`
	box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
	border-radius: 6px;

	.rdt_TableHeadRow {
		background-color: #f3f6f9 !important;
		text-transform: uppercase;
		color: #899198;
		font-size: 12px;
	}

	.name-col {
		font-size: 14px;
		font-weight: 500;
	}

	.address-col {
		span.d-block {
			font-weight: 500;
			margin-bottom: 0.3em;
		}
	}

	.status-col {
		font-weight: 500;
		span {
			border-radius: 8px;
			padding: 0.3em 0.6em;
		}
		.issues {
			background-color: #fff6de;
			color: #f4b400;
		}
		.no-issues {
			background-color: #f6f3ff;
			color: #8c70ff;
		}
	}

	.entries-col {
		span.d-block {
			font-weight: 500;
			margin-bottom: 0.3em;

			&:before {
				display: inline-block;
				content: "";
				border-radius: 0.2rem;
				height: 0.4rem;
				width: 0.4rem;
				margin-right: 0.2rem;
				background-color: #000;
			}
		}
	}

	.risk-profile-col {
		span {
			font-weight: 500;
			font-size: 14px;
			svg {
				margin-right: 0.4rem;
			}
		}

		span.low-risk {
			color: #3ab65c;
		}
		span.mid-risk {
			color: #3c3ab6;
		}
		span.high-risk {
			color: #b63a3a;
		}
	}
`;

export default SDT;
