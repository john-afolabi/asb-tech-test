import React from "react";
import DataTable from "react-data-table-component";
import SDT from "../../assets/styles/StyledDataTable";
import data from "./data";
import columns from "./columns";

const Table = () => {
	return (
		<SDT>
			<DataTable columns={columns} data={data} selectableRows />{" "}
		</SDT>
	);
};

export default Table;
