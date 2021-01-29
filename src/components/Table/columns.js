const columns = [
	{
		name: "",
		selector: "",
		sortable: true,
		cell: (row) => (
			<svg
				width={15}
				height={15}
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.979 9.853a.755.755 0 001.026 0l2.842-2.842a.724.724 0 000-1.027.724.724 0 00-1.026 0L7.5 8.305l-2.321-2.32a.743.743 0 00-.521-.222.743.743 0 00-.521.221.724.724 0 000 1.027l2.842 2.842z"
					fill="#0052CC"
				/>
				<path
					d="M7.5 15c4.137 0 7.5-3.363 7.5-7.5C15 3.363 11.637 0 7.5 0A7.507 7.507 0 000 7.5C0 11.637 3.363 15 7.5 15zm0-13.547A6.058 6.058 0 0113.547 7.5 6.058 6.058 0 017.5 13.547 6.058 6.058 0 011.453 7.5 6.058 6.058 0 017.5 1.453z"
					fill="#0052CC"
				/>
			</svg>
		),
		width: "3rem",
	},

	{
		name: "Name",
		selector: "name",
		sortable: true,
		cell: (row) => <div className="name-col">{row.name}</div>,
	},
	{
		name: "Address",
		selector: "address",
		cell: (row) => (
			<div className="address-col">
				<span className="d-block">{row.address.state}</span>
				<span>{row.address.street}</span>
			</div>
		),
	},
	{
		name: "Status",
		selector: "status",
		cell: (row) => (
			<div className="status-col">
				{row.status.issues ? (
					<span className="issues">
						{row.status.issues} Issues found
					</span>
				) : (
					<span className="no-issues">No issues</span>
				)}
			</div>
		),
	},
	{
		name: "Entries",
		selector: "entries",
		cell: (row) => (
			<div className="entries-col">
				<span className="d-block">
					{row.entries.count} unique entries
				</span>
				<span>{row.entries.type ? "Heterogenous" : "Homogenous"}</span>
			</div>
		),
	},
	{
		name: "Risk Profile",
		selector: "risk_profile",
		sortable: true,
		cell: (row) => (
			<div className="risk-profile-col">
				{(() => {
					switch (row.risk_profile) {
						case 0:
							return (
								<span className="text-capitalize low-risk">
									<svg
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M.833.834l8.333 8.333M9.166.834v8.333H.833"
											stroke="#3AB65C"
											strokeWidth={1.667}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									low risk
								</span>
							);
						case 1:
							return (
								<span className="text-capitalize mid-risk">
									<svg
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.108 8h11.785M8 2.108L13.893 8 8 13.893"
											stroke="#3C3AB6"
											strokeWidth={1.667}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									mid risk
								</span>
							);
						case 2:
							return (
								<span className="text-capitalize high-risk">
									<svg
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.949 13.892l.103-11.785M2.108 7.948l5.944-5.84 5.84 5.943"
											stroke="#B63A3A"
											strokeWidth={1.667}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									high risk
								</span>
							);
						default:
							return <span>No risk data</span>;
					}
				})()}
			</div>
		),
	},
];

export default columns;
