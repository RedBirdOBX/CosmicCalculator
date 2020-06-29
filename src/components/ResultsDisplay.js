import React from 'react';

const ResultsDisplay = (props) =>
{
    console.log("results rendered....");

    return (
    <div className="my-b" id="ResultsDisplayNewContainer">
        <div className="alert alert-success" role="alert" id="ResultsDisplayNewOutput">
            <p><strong>The object you picked is.... {props.ResultsData.SelectedObjectSize.Name}</strong></p>
        </div>
    </div>);
};


export default ResultsDisplay;
