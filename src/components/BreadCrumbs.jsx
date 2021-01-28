import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
	.breadcrumb {
		background-color: unset;
		padding-left: 1.5em;
	}
	.breadcrumb-item {
		font-size: 14px;
	}
	.breadcrumb-item + .breadcrumb-item::before {
		content: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.4042 6.35889L0.583205 10.1799C0.169205 10.5939 0.169205 11.2659 0.583205 11.6799C0.997205 12.0939 1.66921 12.0939 2.08321 11.6799L6.69721 7.06589C7.0882 6.67489 7.0882 6.04189 6.69721 5.65189L2.08321 1.03789C1.66921 0.623887 0.997205 0.623887 0.583205 1.03789C0.169205 1.45189 0.169205 2.12389 0.583205 2.53789L4.4042 6.35889Z' fill='%230A5685'/%3E%3C/svg%3E%0A");
	}
`;
const BreadCrumbs = () => {
	return (
		<Wrapper aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">Divisions</li>
				<li class="breadcrumb-item" aria-current="page">
					Module
				</li>
			</ol>
		</Wrapper>
	);
};
export default BreadCrumbs;
