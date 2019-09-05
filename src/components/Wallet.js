import React from 'react';

const Wallet = () => {
    return (
        <div>
            <div>
                <div className="fixed-header">
                    <div className="container">
                        <nav>
                            <p>Ankit Prasad</p>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h2>Balance : ₹ 500.00</h2>
                    <button className="button" id="b1">Add money</button>
                    <button className="button" id="b2">Send money</button>
                </div>
                <div className="fixed-footer">
                    <div className="container"></div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
