import "./reservation-table.styles.scss";
import {useTable} from "react-table";
import {useMemo} from "react";
import changeReservationTableData from "../data/reservation-table-data.js";

const ReservationTable = () => {

	const columns = useMemo(() => changeReservationTableData().columnsObj, []);

	const data = useMemo(() => changeReservationTableData().rawData, []);

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