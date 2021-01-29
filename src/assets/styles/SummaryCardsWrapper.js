import styled from "styled-components";

const SummaryCardsWrapper = styled.section`
	margin: 0 1rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.col {
		width: 50vw;
	}
	.summary-card {
		padding: 2rem 1rem;
		margin-bottom: 1rem;
		box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
		border-radius: 6px;

		div {
			h3 {
				font-size: 32px;
				font-weight: 700;
			}

			p {
				color: #9696a0;
				font-weight: 700;
				font-size: 16px;

				&:first-letter {
					text-transform: capitalize;
				}
			}
		}

		span {
			margin-top: 0.5em;
		}
	}
`;

export default SummaryCardsWrapper;
