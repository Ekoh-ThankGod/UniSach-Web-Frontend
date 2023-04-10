import "./reservation-table.styles.scss";
import {useTable} from "react-table";
import {useMemo} from "react";

const ReservationTable = () => {

	const rawData = [
		{
			id: "wqke",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "wqsf",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "dfdgg",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "fdfdg",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "wfdrg",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "lkhf",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "wdfgl",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "John Doe",
			phone: "0703473734",
			price: "₦2500"
		},
		{
			id: "wdfgl",
			date: "11-01-2023",
			code: "USPG287GB",
			item: "Paracetamol",
			amount: "4 packs",
			customer: "James Doe",
			phone: "0703473734",
			price: "₦2500"
		}
	]

	const columns = useMemo(() => [
		{
			Header: "DATE",
			accessor: "date"
		},
		{
			Header: "CODE",
			accessor: "code"
		},
		{
			Header: "ITEM",
			accessor: "item"
		},
		{
			Header: "AMOUNT",
			accessor: "amount"
		},
		{
			Header: "CUSTOMER",
			accessor: "customer"
		},
		{
			Header: "PHONE",
			accessor: "phone"
		},
		{
			Header: "PRICE",
			accessor: "price"
		},
	], []);

	const data = useMemo(() => rawData, []);

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});


	return(
		<div className="reservation-table__container">
			<table {...getTableProps()} className="reservation-table">
				<thead className="reservation-table__header">
					{
						headerGroups.map(headerGroup => {
							return <tr className="reservation-table__columns" {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return <th className="reservation-table__column" {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								})}
							</tr>
						})
					}
				</thead>
				<tbody className="reservation-table__body" {...getTableBodyProps()}>
					{
						rows.map(row => {
							prepareRow(row);

							return (<tr {...row.getRowProps()}>
								{
									row.cells.map(cell => {
										return (<td className="reservation-table__row" {...cell.getCellProps()}>{cell.render("Cell")}</td>)
									})
								}
							</tr>)
						})
					}
				</tbody>
			</table>
		</div>
	)	
}

export  default ReservationTable;