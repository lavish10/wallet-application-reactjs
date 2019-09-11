import React from 'react';
import DateFilter from "../Wallet/DateFilter";

const Transactions = (props) => {
    return (
        <div>
            <div className={'container'} style={{marginTop: '100px'}}>
                <DateFilter id={props.walletId}/>
            </div>
        </div>
    );
};

export default Transactions;