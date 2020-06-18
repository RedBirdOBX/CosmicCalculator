import React from 'react';

class Results extends React.Component
{
    render()
    {
        return(
            <div className="my-b d-none" id="ResultsContainer">
                <div className="alert alert-success" role="alert" id="ResultsOutput">
                </div>
            </div>
        );
    }
}

export default Results;