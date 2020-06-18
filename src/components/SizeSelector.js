import React from 'react';

import GrainOfSaltImg from '../images/salt.jpg';
import BBPelletImg from '../images/bb.jpg';
import GolfBallImg from '../images/golf-ball.jpg';
import BasketballImg from '../images/basketball.jpg';

class SizeSelector extends React.Component
{
    render()
    {
        return (
            <div className="form-group row">
                <label className="col-sm-4 col-form-label text-right">Select the size of our sun</label>
                <div className="col-sm-4">
                    <select id="SizeSelectorDropDown" className="form-control" onChange={this.props.OnChangeEvent}>
                        <option value="1">Grain of Salt (0.33 mm)</option>
                        <option value="2">BB Pellet (4.43 mm)</option>
                        <option value="3">Golf Ball (42.67 mm)</option>
                        <option value="4">Basketball (241.55 mm)</option>
                    </select>
                </div>
                <div className="col-sm-4 text-center">
                    <img id="SaltImg" src={GrainOfSaltImg} alt="size of sun" className="w-75" />
                    <img id="BBImg" src={BBPelletImg} alt="size of sun" className="d-none" />
                    <img id="GolfBallImg" src={GolfBallImg} alt="size of sun" className="d-none" />
                    <img id="BasketballImg" src={BasketballImg} alt="size of sun" className="d-none" />
                </div>
            </div>);
    }
}


export default SizeSelector;