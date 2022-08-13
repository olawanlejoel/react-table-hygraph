import { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import request from 'graphql-request';
import { COLUMNS } from '../components/columns';

const GlobalFilteringTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { datasets } = await request(
				'https://api-us-east-1.hygraph.com/v2/cl6o3qnz40n6401uje6140m78/master',
				`
                {
                    datasets(first:50) {
                        id_number
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

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		state,
		setGlobalFilter,
		prepareRow,
	} = useTable({ columns, data }, useGlobalFilter);

	const { globalFilter } = state;

	return (
		<div>
			<div className="search-container">
				<input
					type="text"
					value={globalFilter || ''}
					onChange={(e) => setGlobalFilter(e.target.value)}
				/>
			</div>
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

export default GlobalFilteringTable;