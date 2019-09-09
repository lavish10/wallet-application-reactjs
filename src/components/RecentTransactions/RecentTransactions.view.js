import React from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import './RecentTransactions.css'

const RecentTransactionsView = (props) => {
    const columns = [
        {
            dataField: 'remarks',
            text: 'Remarks',
            sort: true,
            headerStyle: (colum, colIndex) => {
                return {width: 'calc(22em * 0.5)', textAlign: 'center'};
            }
        },
        {
            dataField: 'type',
            text: 'Type',
            sort: true
        },
        {
            dataField: 'amount',
            text: '₹ Amount',
            sort: true
        },
        {
            dataField: 'createdAt',
            text: 'Date',
            sort: true,
            style: {fontWeight: 'bold', color: 'black'}
        }
    ];
    const defaultSorted = [{
        dataField: 'createdAt',
        order: 'desc'
    }];
    const rowStyle = (row) => {
        return row.type === 'CREDIT'
            ? {backgroundColor: '#80bf83', color: 'white'}
            : {backgroundColor: '#c25c51', color: 'white'};
    };
    return (
        <BootstrapTable
            defaultSorted={defaultSorted}
            bootstrap4
            keyField='id'
            data={props.transactions}
            columns={columns}
            rowStyle={rowStyle}
            bordered={false}
        />
    );
};

export default RecentTransactionsView;