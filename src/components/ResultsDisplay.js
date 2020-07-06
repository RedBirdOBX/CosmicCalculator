import React from 'react';

class ResultsDisplay extends React.Component {
    render() {
        return (
            <div>
                <h3>The selected sun size is {this.props.ResultsData.Name}</h3>
            </div>
        );
    }
}

export default ResultsDisplay;
