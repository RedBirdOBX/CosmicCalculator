import React from 'react';

class Header extends React.Component
{
    render(){
        return (
            <div className="my-1">
                <div className="display-4 my-2 text-center">Cosmic Calculator</div>
                <p className="lead">
                    Imagine if you could shrink the size of our sun down to a small object and the rest of the universe would also
                    shrink down to the same scale. How far away would Jupiter be?  Neptune?  Alpha Centari - our closest star? Let's find out.
                </p>
            </div>
        );
    }
};

export default Header;