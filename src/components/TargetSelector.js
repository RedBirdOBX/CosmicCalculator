import React from 'react';

import EarthImg from '../images/earth.jpg';
import JupiterImg from '../images/jupiter.jpg';
import NeptuneImg from '../images/neptune.jpg';
import AlphaCentariImg from '../images/alpha-centari.jpg';
import PolarisImg from '../images/polaris.jpg';

class TargetSelector extends React.Component
{
    render()
    {
        return (
            <div id="TargetContainer">
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">Select the distant target</div>
                        <img id="EarthImg" src={EarthImg} alt="target" className="w-100" />
                        <img id="JupiterImg" src={JupiterImg} alt="target" className="d-none" />
                        <img id="NeptuneImg" src={NeptuneImg} alt="target" className="d-none" />
                        <img id="AlphaCentariImg" src={AlphaCentariImg} alt="target" className="d-none" />
                        <img id="PolarisImg" src={PolarisImg} alt="target" className="d-none" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-6">
                        <select id="TargetSelectorDropDown" className="form-control" onChange={this.props.ChangeEvent}>
                            <option value="0">Earth (94,437,000 miles)</option>
                            <option value="1">Jupiter (481,000,000 miles)</option>
                            <option value="2">Neptune (2,793,000,000 miles)</option>
                            <option value="3">Alpha Centari (4.37 light years)</option>
                            <option value="4">Polaris "North Star" (434 light years)</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
};

export default TargetSelector;
