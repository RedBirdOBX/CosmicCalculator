import React from 'react';
import GrainOfSaltImg from '../images/salt.jpg';
import BBPelletImg from '../images/bb.jpg';
import GolfBallImg from '../images/golf-ball.jpg';
import BasketballImg from '../images/basketball.jpg';

class SizeSelector extends React.Component {
    render() {
        return (
            <div id="SizeContainer">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-9 offset-lg-3 col-md-12">
                        <div className="text-center">Select the size of the sun</div>
                        <img id="SaltImg" src={GrainOfSaltImg} alt="size of sun" className="w-100" />
                        <img id="BBImg" src={BBPelletImg} alt="size of sun" className="d-none" />
                        <img id="GolfBallImg" src={GolfBallImg} alt="size of sun" className="d-none" />
                        <img id="BasketballImg" src={BasketballImg} alt="size of sun" className="d-none" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xl-6 offset-xl-6 col-lg-9 offset-lg-3 col-md-12">
                        <select id="SunSizeSelectorDropDown" className="form-control" onChange={this.props.ChangeEvent}>
                            <option value="0">Grain of Salt (0.33 mm)</option>
                            <option value="1">BB Pellet (4.43 mm)</option>
                            <option value="2">Golf Ball (42.67 mm)</option>
                            <option value="3">Basketball (241.55 mm)</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSelector;
