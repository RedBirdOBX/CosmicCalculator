import React from 'react';

const ResultsDisplay = () =>
{
    return (
    <div className="my-b d-none" id="ResultsDisplayContainer">
        <div className="alert alert-success" role="alert" id="ResultsDisplayOutput">
        </div>
    </div>);
};

export default ResultsDisplay;


// class Results extends React.Component
// {
//     render()
//     {
//         return(
//             <div className="my-b d-none" id="ResultsContainer">
//                 <div className="alert alert-success" role="alert" id="ResultsOutput">
//                 </div>
//             </div>
//         );
//     }
// }
