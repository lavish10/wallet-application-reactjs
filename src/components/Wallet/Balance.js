import React from 'react';

function Balance(props) {
    return (
        <div>
            <h2>Balance : {(!isNaN(parseFloat(props.balance)))
                ? parseFloat(props.balance).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR'
                }).slice(0, -3) :
                'Loading'}</h2>
        </div>
    );
}

export default Balance;