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
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5  g-4">
				{data.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="summary-card d-flex justify-content-between">
								<div>
									<h3>{item.value}</h3>
									<p>{item.desc}</p>
								</div>
								<span>
									<Alert />
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</SummaryCardsWrapper>
	);
};

export default SummaryCards;
