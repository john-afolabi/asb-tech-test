import React from "react";
import { ReactComponent as Alert } from "../assets/images/svg/alert.svg";
import SummaryCardsWrapper from "../assets/styles/SummaryCardsWrapper";

const data = [
	{
		value: 31454,
		desc: "ongoing metric",
	},
	{
		value: 2344,
		desc: "past metric",
	},
	{
		value: 14224,
		desc: "missed metric",
	},
	{
		value: 635,
		desc: "failed metric",
	},
	{
		value: 11334,
		desc: "pending metric",
	},
];

const SummaryCards = () => {
	return (
		<SummaryCardsWrapper>
			{data.map((item, index) => {
				return (
					<div
						className="summary-card d-flex justify-content-between"
						key={index}
					>
						<div>
							<h3>{item.value}</h3>
							<p>{item.desc}</p>
						</div>
						<span>
							<Alert />
						</span>
					</div>
				);
			})}
		</SummaryCardsWrapper>
	);
};

export default SummaryCards;
