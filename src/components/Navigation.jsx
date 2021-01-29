import React, { useState } from "react";
import Wrapper from "../assets/styles/NavigationWrapper";
import Logo from "../assets/images/svg/logo.svg";
import Search from "../assets/images/svg/search.svg";
import { ReactComponent as Home } from "../assets/images/svg/home.svg";
import { ReactComponent as Entries } from "../assets/images/svg/entries.svg";
import { ReactComponent as Divisions } from "../assets/images/svg/divisions.svg";
import { ReactComponent as Notification } from "../assets/images/svg/notification.svg";
import { ReactComponent as DropDown } from "../assets/images/svg/dropdown.svg";
import DefaultProfile from "../assets/images/png/profile.png";

const Navigation = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<Wrapper className="navbar navbar-expand-lg navbar-light">
			<a className="navbar-brand" href="/">
				<img src={Logo} alt="Logo" />
				<span>FE Engineer Test 1</span>
			</a>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded={!isNavCollapsed ? true : false}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className={`${
					isNavCollapsed ? "collapse" : ""
				} navbar-collapse`}
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								<Home />
								Home
							</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								<Entries /> Entries
							</span>
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/">
							<span className="d-flex align-items-center">
								<Divisions />
								Divisions
							</span>
						</a>
					</li>
				</ul>

				<form className="form-inline my-2 my-lg-0">
					<span>
						<img src={Search} alt="search" />
					</span>
					<input
						className="form-control mr-sm-2"
						type="search"
						aria-label="Search"
					/>
				</form>

				<div>
					<Notification />
					<span>
						<img src={DefaultProfile} alt="user profile " />
						<DropDown />
					</span>
				</div>
			</div>
		</Wrapper>
	);
};
export default Navigation;
