import React from 'react';

import EarthImg from '../images/earth.jpg';
import JupiterImg from '../images/jupiter.jpg';
import NeptuneImg from '../images/neptune.jpg';
import AlphaCentariImg from '../images/alpha-centari.jpg';
import PolarisImg from '../images/polaris.jpg';

const TargetSelector = (props) =>
{
    return (
            <div id="TargetContainer" className="xborder">
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
                        <select id="TargetSelectorDropDown" className="form-control" onChange={props.OnChangeEvent}>
                            <option value="1">Earth (94,437,000 miles)</option>
                            <option value="2">Jupiter (481,000,000 miles)</option>
                            <option value="3">Neptune (2,793,000,000 miles)</option>
                            <option value="4">Alpha Centari (4.37 light years)</option>
                            <option value="5">Polaris "North Star" (434 light years)</option>
                        </select>
                    </div>
                </div>
            </div>
        );
};

export default TargetSelector;


// class TargetSelector extends React.Component
// {
//     render()
//     {
//         return (<div className="form-group row">
//                     <label className="col-sm-4 col-form-label text-right">Select the distant target</label>
//                     <div className="col-sm-4">
//                     <select id="TargetSelectorDropDown" className="form-control" onChange={this.props.OnChangeEvent}>
//                             <option value="1">Earth (94,437,000 miles)</option>
//                             <option value="2">Jupiter (481,000,000 miles)</option>
//                             <option value="3">Neptune (2,793,000,000 miles)</option>
//                             <option value="4">Alpha Centari (4.37 light years)</option>
//                             <option value="5">Polaris "North Star" (434 light years)</option>
//                         </select>
//                     </div>
//                     <div className="col-sm-4 text-center">
//                         <img id="EarthImg" src={EarthImg} alt="target" className="w-75" />
//                         <img id="JupiterImg" src={JupiterImg} alt="target" className="d-none" />
//                         <img id="NeptuneImg" src={NeptuneImg} alt="target" className="d-none" />
//                         <img id="AlphaCentariImg" src={AlphaCentariImg} alt="target" className="d-none" />
//                         <img id="PolarisImg" src={PolarisImg} alt="target" className="d-none" />
//                     </div>
//                 </div>);
//     }
// }
