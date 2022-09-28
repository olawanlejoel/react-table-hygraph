import { format } from 'date-fns';
import FilterForm from './FilterForm';

export const COLUMNS = [
	{
		Header: 'ID',
		accessor: 'idNumber',
		Filter: FilterForm,
	},
	{
		Header: 'First Name',
		accessor: 'firstName',
		Filter: FilterForm,
	},
	{
		Header: 'Last Name',
		accessor: 'lastName',
		Filter: FilterForm,
	},
	{
		Header: 'Email',
		accessor: 'email',
		Filter: FilterForm,
	},
	{
		Header: 'Department',
		accessor: 'department',
		Filter: FilterForm,
	},
	{
		Header: 'Date Joined',
		accessor: 'dateJoined',
		Filter: FilterForm,
		Cell: ({ value }) => format(new Date(value), 'MM/dd/yyyy'),
	},
];
