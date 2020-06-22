import React from 'react';

const ResultsDisplayNew = (props) =>
{
    return (
    <div className="my-b" id="ResultsDisplayNewContainer">
        <div className="alert alert-success" role="alert" id="ResultsDisplayNewOutput">
            <p>Our sun is <strong>{props.ResultsData.DiameterOfSunInMiles} miles</strong> in diameter.</p>
        </div>
    </div>);
};



// htmlOutput = ``;

// htmlOutput += `<p>If the sun were scaled down to the size of a <strong>${selectedSunSize.Name}</strong>, `;
// htmlOutput += `it would be <strong>${selectedSunSize.MMSize} mms</strong> in diameter. `;
// htmlOutput += `Each mm would be equal to <strong>${utilities.FormatWithCommas(microMilesInMM, 2)}</strong> miles. </p>`;


export default ResultsDisplayNew;
