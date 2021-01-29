import React from "react";
import DSWrapper from "../assets/styles/DSWrapper";
import { ReactComponent as DSImage } from "../assets/images/svg/division-summary.svg";
import { ReactComponent as Phone } from "../assets/images/svg/phone.svg";
import { ReactComponent as Mail } from "../assets/images/svg/mail.svg";
import { ReactComponent as Location } from "../assets/images/svg/location.svg";
import { ReactComponent as Journal } from "../assets/images/svg/journal.svg";
import { ReactComponent as Fingerprint } from "../assets/images/svg/fingerprint.svg";

const DivisionSummary = () => {
	return (
		<DSWrapper>
			<div className="d-flex align-items-center">
				<DSImage />
				<h4>Division Summary</h4>
			</div>
			<p>
				<span>
					<Phone />
				</span>
				0801 234 5678
			</p>
			<p>
				<span>
					<Mail />
				</span>
				asbfefr@gmail.com
			</p>
			<p>
				<span>
					<Location />
				</span>
				Mojidi, Lagos
			</p>
			<p>
				<span>
					<Journal />
				</span>
				2 Journal entries
			</p>
			<p>
				<span>
					<Fingerprint />
				</span>
				24 fingerprints enrolled
			</p>
		</DSWrapper>
	);
};

export default DivisionSummary;
