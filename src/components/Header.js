import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="fixed-header">
                <div className="container">
                    <nav>
                        <p>{props.name}</p>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;