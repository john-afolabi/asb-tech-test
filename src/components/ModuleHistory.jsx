import React from "react";
import MHWrapper from "../assets/styles/MHWrapper";

const ModuleHistory = () => {
	return (
		<MHWrapper>
			<ul class="timeline">
				<li>
					<p className="title">
						Searched “Journal Entries” on Division module
					</p>
					<span className="timestamp">22:10 15/09/2020</span>
					<span className="medium">Web</span>
				</li>
				<li>
					<p className="title">
						Searched “Fingerprint record” on Division module
					</p>
					<span className="timestamp">22:10 15/09/2020</span>
					<span className="medium">Web</span>
				</li>
				<li>
					<p className="title">
						Searched “Journal Entries” on Division module
					</p>
					<span className="timestamp">22:10 15/09/2020</span>
					<span className="medium">Web</span>
				</li>
			</ul>
		</MHWrapper>
	);
};

export default ModuleHistory;
