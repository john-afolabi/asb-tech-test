import React from "react";
import MHWrapper from "../assets/styles/MHWrapper";
import { ReactComponent as MHImage } from "../assets/images/svg/module-history.svg";

const history = [
	{
		title: "Searched “Journal Entries” on Division module",
		timestamp: "22:10 15/09/2020",
		medium: "Web",
	},
	{
		title: "Searched “Fingerprint record” on Division module",
		timestamp: "22:10 15/09/2020",
		medium: "Web",
	},
	{
		title: "Searched “Journal Entries” on Division module",
		timestamp: "22:10 15/09/2020",
		medium: "Web",
	},
];
const ModuleHistory = () => {
	return (
		<MHWrapper>
			<div className="d-flex align-items-center">
				<MHImage />
				<h4>Module History</h4>
			</div>
			<ul className="timeline">
				{history.map((item, index) => {
					return (
						<li key={index}>
							<p className="title">{item.title}</p>
							<span className="timestamp">{item.timestamp}</span>
							<span className="medium">{item.medium}</span>
						</li>
					);
				})}
			</ul>
		</MHWrapper>
	);
};

export default ModuleHistory;
