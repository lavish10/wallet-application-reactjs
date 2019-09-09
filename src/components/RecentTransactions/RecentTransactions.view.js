import React from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const RecentTransactionsView = (props) => {
    const columns = [
        {
            dataField: 'remarks',
            text:'Remarks',
            sort:true
        },
        {
            dataField: 'type',
            text:'Type',
            sort:true
        },
        {
            dataField: 'amount',
            text:'Amount',
            sort:true
        },
        {
            dataField: 'createdAt',
            text:'Date',
            sort:true
        }
    ];
    const defaultSorted = [{
        dataField: 'createdAt',
        order: 'desc'
    }];
    const rowStyle = (row) => {
        return row.type === 'CREDIT'
            ?{ backgroundColor: '#80bf83',color:'white' }
            : { backgroundColor: '#c25c51',color:'white' };
    };
    return (<div>
            <BootstrapTable
                defaultSorted={defaultSorted}
                bootstrap4
                keyField='id'
                data={ props.transactions}
                columns={ columns }
                rowStyle={rowStyle}
            />
        </div>

    );
};

export default RecentTransactionsView;