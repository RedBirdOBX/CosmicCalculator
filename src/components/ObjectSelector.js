import React from 'react';

class ObjectSelector extends React.Component {
    render() {
        return (
            <div>
                <select id="ObjectSelectorDropDown" onChange={this.props.ChangeEvent}>
                    <option value="0">Car</option>
                    <option value="1">Cat</option>
                    <option value="2">Pie</option>
                </select>
            </div>
        );
    }
}

export default ObjectSelector;
