import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import request from 'graphql-request';
import { COLUMNS } from '../components/columns';

const Table = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { datasets } = await request(
				'https://api-us-east-1.hygraph.com/v2/cl8l7vo872fwv01tca4no0wwc/master',
				`
                {
                    datasets (first:50) {
                        idNumber
                        firstName
                        lastName
                        email
                        department
                        dateJoined
                      }
                }
                `
			);
			setData(datasets);
		};
		fetchData();
	}, []);

	const columns = useMemo(() => COLUMNS, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<div>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
