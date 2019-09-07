import React from 'react';
import {MDBDataTable} from 'mdbreact';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const RecentTransactionsView = (props) => {
    const data = {
        columns: [
            {
                label: 'Remarks',
                field: 'remarks',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Type',
                field: 'type',
                sort: 'asc',
                width: 270
            },
            {
                label: '₹ Amount',
                field: 'amount',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Date',
                field: 'createdAt',
                sort: 'asc',
                width: 100
            }
        ],
        rows: props.rows
    };

    return (
        <MDBDataTable
            striped
            bordered ={false}
            hover
            data={data}
            entries={7}
            info={false}
            searching={false}
            displayEntries={false}
            paging={false}
        />
    );
};

export default RecentTransactionsView;