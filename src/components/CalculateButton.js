import React from 'react';

class CalculateButton extends React.Component
{
    render()
    {
        return (<div className="my-5 text-center">
                 <button type="button"
                        className="btn btn-success btn-lg"
                        onClick={this.props.ClickEvent}>
                        How far apart are these objects?
                 </button>
             </div>);
    }
}

export default CalculateButton;