# Getting Started with React-Table & Hygraph

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To clone this project, you can run:

```bash
git clone https://github.com/olawanlejoel/react-table-hygraph.git
```

The install all dependencies using:

```bash
npm install
```

In the project directory, you can run:

```bash
npm start
```

The app will run in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Project Instruction
In this project, we have 5 differnt tables performing specific react-table features. To test out any one of them, un-comment the import statement alongside the component in `App.js`.

For example, if we want to test global filtering alone, we would un-comment both it's import statement and where the component was called:

```js
// import Table from './Tables/Table';
// import ColumnFilteringTable from './Tables/ColumnFilteringTable';
import GlobalFilteringTable from './Tables/GlobalFilteringTable';
// import SortTable from './Tables/SortTable';
// import TableFiltering from './Tables/TableFiltering';

const App = () => {
	return (
		<div className="container">
			{/* Table with no feature */}
			{/* <Table /> */}

			{/* Table with column filtering */}
			{/* <ColumnFilteringTable /> */}

			{/* Table with Global filtering */}
			<GlobalFilteringTable />

			{/* Table with sorting option on header */}
			{/* <SortTable /> */}

			{/* Table with both column and global filtering */}
			{/* <TableFiltering /> */}
		</div>
	);
};

export default App;
```

Have fun coding!!!