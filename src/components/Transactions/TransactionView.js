import React from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './../RecentTransactions/RecentTransactions.css'

const TransactionsView = (props) => {
    const columns = [
        {
            dataField: 'remarks',
            text: 'Remarks',
            sort: false,
            headerStyle: (colum, colIndex) => {
                return {width: '12.5em', textAlign: 'left', fontWeight: 'bold'};
            }
        },
        {
            dataField: 'type',
            text: 'Type',
            sort: false,
            headerStyle: (colum, colIndex) => {
                return {width: '12.5em', textAlign: 'left', fontWeight: 'bold'};
            }
        },
        {
            dataField: 'amount',
            text: '₹ Amount',
            sort: true,
            headerStyle: (colum, colIndex) => {
                return {width: '12.5em', textAlign: 'left', fontWeight: 'bold'};
            },
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                a=a.replace(/[^0-9.-]+/g,"");
                b=b.replace(/[^0-9.-]+/g,"");
                if (order === 'desc') {
                    if (parseFloat(a) < parseFloat(b)) return 1;
                    if (parseFloat(a) > parseFloat(b)) return -1;
                    return 0;
                } else {
                    if (parseFloat(a) < parseFloat(b)) return -1;
                    if (parseFloat(a) > parseFloat(b)) return 1;
                    return 0;
                }
            }
        },
        {
            dataField: 'createdAt',
            text: 'Date',
            sort: true,
            style: {fontWeight: 'bold', color: 'black'},
            headerStyle: (colum, colIndex) => {
                return {width: '12.5em', textAlign: 'left', fontWeight: 'bold'};
            },
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                if (order === 'desc') {
                    if (new Date(a) < new Date(b)) return 1;
                    if (new Date(a) > new Date(b)) return -1;
                    return 0;
                } else {
                    if (new Date(a) < new Date(b)) return -1;
                    if (new Date(a) > new Date(b)) return 1;
                    return 0;
                }
            }
        }
    ];
    const defaultSorted = [{
        dataField: 'createdAt',
        order: 'desc'
    }];
    const rowStyle = (row) => {
        return row.type === 'CREDIT'
            ? {backgroundColor: '#a8f5ab', color: 'black', border: '3px solid white'}
            : {backgroundColor: '#ffb9ba', color: 'black', border: '3px solid white'}

    };
    return (<div>
            <BootstrapTable
                defaultSorted={defaultSorted}
                bootstrap4
                keyField='id'
                data={props.transactions}
                columns={columns}
                rowStyle={rowStyle}
                bordered={false}
            />
        </div>
    );
};

export default TransactionsView;