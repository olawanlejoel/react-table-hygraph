import Table from './Tables/Table';
// import ColumnFilteringTable from './Tables/ColumnFilteringTable';
// import GlobalFilteringTable from './Tables/GlobalFilteringTable';
// import SortTable from './Tables/SortTable';
// import TableFiltering from './Tables/TableFiltering';

const App = () => {
	return (
		<div className="container">
			{/* Table with no feature */}
			<Table />

			{/* Table with column filtering */}
			{/* <ColumnFilteringTable /> */}

			{/* Table with Global filtering */}
			{/* <GlobalFilteringTable /> */}

			{/* Table with sorting option on header */}
			{/* <SortTable /> */}

			{/* Table with both column and global filtering */}
			{/* <TableFiltering /> */}
		</div>
	);
};

export default App;
