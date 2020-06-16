import React from 'react';
import GrainOfSaltImg from './images/salt.jpg';
import BBPelletImg from './images/bb.jpg';
import GolfBallImg from './images/golf-ball.jpg';
import JupiterImg from './images/jupiter.jpg';
import NeptuneImg from './images/neptune.jpg';
import AlphaCentariImg from './images/alpha-centari.jpg';
import PolarisImg from './images/polaris.jpg';


// global consts
const diameterOfSunInMiles = 865370;
const milesInALightYear = 5880000000000;
const mmsInAnInch = 25.4;
const inchesInFoot = 12;
const feetInAMile = 5820;

let sunSizes = [];
let grainOfSalt = new SunSize(1, "Grain Of Salt", "grains of salt", 0.334, "salt.jpg");
let bbPellet = new SunSize(2, "BB Pellet", "bb pellets", 4.43, "bb.jpg");
let golfBall = new SunSize(3, "Golf Ball", "golf balls", 42.67, "golf-ball.jpg");
sunSizes.push(grainOfSalt, bbPellet, golfBall);

let targets = [];
let jupiter = new Target(1, "Jupiter", "our largest planet", 481000000);
let neptune = new Target(2, "Neptune", "our most distant planet", 2793000000);
let alphaCentari = new Target(3, "Alpha Centari", "our closest star", (milesInALightYear * 4.367));
let polaris = new Target(4, "Polaris", "also known as the 'North Star'", (milesInALightYear * 434));
targets.push(jupiter, neptune, alphaCentari, polaris);


// global functions
const ShowResults = () =>
{
    let resultsContainer = document.getElementById("ResultsContainer");
    resultsContainer.removeAttribute("class");
    resultsContainer.setAttribute("class", "my-b");

    CalculateResults();
};

const CalculateResults = () =>
{
    // get vals from drop downs
    const selectedSunSize = document.getElementById("SizeSelectorDropDown");
    const selectedTarget = document.getElementById("TargetSelectorDropDown");

    const jupiterImg = document.getElementById("JupiterImg");
    jupiterImg.setAttribute("class", "d-none");

    const neptuneImg = document.getElementById("NeptuneImg");
    neptuneImg.setAttribute("class", "d-none");

    const alphaCentariImg = document.getElementById("AlphaCentariImg");
    alphaCentariImg.setAttribute("class", "d-none");

    const polarisImg = document.getElementById("PolarisImg");
    polarisImg.setAttribute("class", "d-none");

    const saltImg = document.getElementById("SaltImg");
    saltImg.setAttribute("class", "d-none");

    const bbImg = document.getElementById("BBImg");
    bbImg.setAttribute("class", "d-none");

    const golfBallImg = document.getElementById("GolfBallImg");
    golfBallImg.setAttribute("class", "d-none");


    // selected objects (from drop downs)
    let sunSize = sunSizes[selectedSunSize.value-1];
    let target = targets[selectedTarget.value-1];
    let htmlOutput = "";

    const microMilesInMM = (diameterOfSunInMiles / sunSize.MMSize);
    const mmsAwayFromTarget = (target.DistanceInMiles / microMilesInMM);
    const inchesAwayFromTarget = (mmsAwayFromTarget / mmsInAnInch);
    const feetAwayFromTarget = (inchesAwayFromTarget / inchesInFoot);
    const milesAwayFromTarget = (feetAwayFromTarget / feetInAMile);
    const formula = ((((target.DistanceInMiles / microMilesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile);

    htmlOutput = `<p>Our sun is <strong>${FormatWithCommas(diameterOfSunInMiles, 0)} miles</strong> in diameter.</p>`;

    htmlOutput += `<p>If the sun were scaled down to the size of a <strong>${sunSize.Name}</strong>, `;
    htmlOutput += `it would be <strong>${sunSize.MMSize} mms</strong> in diameter. `;
    htmlOutput += `Each mm would be equal to <strong>${FormatWithCommas(microMilesInMM, 2)}</strong> miles. </p>`;

    // not far enough to use light years
    if (target.DistanceInMiles / milesInALightYear < 0.5)
    {
        htmlOutput += `<p><strong>${target.Name}</strong>, ${target.Description}, normally <strong>${FormatWithCommas(target.DistanceInMiles, 2)}</strong> miles `;
        htmlOutput += `from our sun, would be <strong>${FormatWithCommas((target.DistanceInMiles / feetInAMile), 2)}</strong> feet away from our sun at this scale.</p>`;
    }
    else
    {
        htmlOutput += `<p><strong>${target.Name}</strong>, ${target.Description}, is `;
        htmlOutput += `<strong>${target.DistanceInMiles / milesInALightYear}</strong> light years away. `;
        htmlOutput += `There are <strong>${FormatWithCommas(milesInALightYear, 0)} miles</strong> in one light year so that puts ${target.Name} `;
        htmlOutput += `<strong>${FormatWithCommas(target.DistanceInMiles, 2)}</strong> miles away from our sun.</p>`;
    }

    htmlOutput += `<p>If each mm is equal to <strong>${FormatWithCommas(microMilesInMM, 2)} miles</strong> in scale, that would place `;
    htmlOutput += `${target.Name} <strong>${FormatWithCommas(mmsAwayFromTarget, 2)}</strong> mms away from our sun `;
    htmlOutput += `also scaled down respectively.</p>`;

    htmlOutput += `<p>There are <strong>${mmsInAnInch} mms</strong> in an inch. That means <strong>${target.Name}</strong> `;
    htmlOutput += `is <strong>${FormatWithCommas(inchesAwayFromTarget, 2)} inches</strong> away from tiny our sun. `;
    htmlOutput += `That's <strong>${FormatWithCommas(feetAwayFromTarget, 2)} feet</strong> away from our sun. <p>`;

    // not far enough to use miles
    if(milesAwayFromTarget < 0.5)
    {
        htmlOutput += `<p>You would have to put these two tiny objects (${sunSize.PluralName}) <strong>${FormatWithCommas(feetAwayFromTarget, 2)} `;
        htmlOutput += `feet</strong> apart to accurately represent the distance between our sun and ${target.Name}.</p>`;
    }
    else
    {
        htmlOutput += `<p>Put in perspective, you would have to put these two tiny objects (${sunSize.PluralName}) <strong>${FormatWithCommas(milesAwayFromTarget, 2)} `;
        htmlOutput += `miles</strong> apart to accurately represent the distance between our sun and ${target.Name}.</p>`;
    }

    htmlOutput += "<p>&nbsp;</p>";
    htmlOutput += `<p><small><em>((((milesAwayFromAlphaCenari / milesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile): ${formula}</em></small></p>`;

    let resultsOutput = document.getElementById("ResultsOutput");
    resultsOutput.innerHTML = htmlOutput;
};

const FormatWithCommas = (input, decimalPlaces) =>
{
    // only displays upto 2 decimal places due to the comma insertions.

    // if non a number, fix it
    input = (isNaN(input)) ? 0 : input;

    if (decimalPlaces !== undefined && decimalPlaces < 5) {
        input = Number(input.toFixed(decimalPlaces));
    }
    else {
        input = Math.floor(input);
    }
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SunSize(index, name, pluralName, mmSize, imgName)
{
    this.Index = index;
    this.Name = name;
    this.PluralName = pluralName;
    this.MMSize = mmSize;
    this.ImageName = imgName;
}

function Target(index, name, description, milesAway) {
    this.Index = index;
    this.Name = name;
    this.Description = description;
    this.DistanceInMiles = milesAway;
}



// components
class App extends React.Component
{

    constructor()
    {
        super();
        this.state =
        {
            SunSizeId: 1,
            TargetId: 1
        }
    }

    SizeChanged = () =>
    {
        const selectedSunSize = document.getElementById("SizeSelectorDropDown");
        const saltImg = document.getElementById("SaltImg");
        const bbImg = document.getElementById("BBImg");
        const golfBallImg = document.getElementById("GolfBallImg");

        switch (parseInt(selectedSunSize.value))
        {
            // salt
            case 1:
                saltImg.removeAttribute("class");
                bbImg.removeAttribute("class");
                golfBallImg.removeAttribute("class");

                saltImg.setAttribute("class", "w-75");
                bbImg.setAttribute("class", "d-none");
                golfBallImg.setAttribute("class", "d-none");
                break;

            // bb
            case 2:
                saltImg.removeAttribute("class");
                bbImg.removeAttribute("class");
                golfBallImg.removeAttribute("class");

                saltImg.setAttribute("class", "d-none");
                bbImg.setAttribute("class", "w-75");
                golfBallImg.setAttribute("class", "d-none");
                break;

            // golf ball
            case 3:
                saltImg.removeAttribute("class");
                bbImg.removeAttribute("class");
                golfBallImg.removeAttribute("class");

                saltImg.setAttribute("class", "d-none");
                bbImg.setAttribute("class", "d-none");
                golfBallImg.setAttribute("class", "w-75");
                break;

            default:
                saltImg.removeAttribute("class");
                bbImg.removeAttribute("class");
                golfBallImg.removeAttribute("class");

                saltImg.setAttribute("class", "d-none");
                bbImg.setAttribute("class", "d-none");
                golfBallImg.setAttribute("class", "d-none");
        }
    };

    TargetChanged = () => {
        const selectedTarget = document.getElementById("TargetSelectorDropDown");
        const jupiterImg = document.getElementById("JupiterImg");
        const neptuneImg = document.getElementById("NeptuneImg");
        const alphaCentariImg = document.getElementById("AlphaCentariImg");
        const polarisImg = document.getElementById("PolarisImg");

        switch (parseInt(selectedTarget.value))
        {
            // jupiter
            case 1:
                jupiterImg.removeAttribute("class");
                neptuneImg.removeAttribute("class");
                alphaCentariImg.removeAttribute("class");
                polarisImg.removeAttribute("class");

                jupiterImg.setAttribute("class", "w-75");
                neptuneImg.setAttribute("class", "d-none");
                alphaCentariImg.setAttribute("class", "d-none");
                polarisImg.setAttribute("class", "d-none");
                break;

            // neptune
            case 2:
                jupiterImg.removeAttribute("class");
                neptuneImg.removeAttribute("class");
                alphaCentariImg.removeAttribute("class");
                polarisImg.removeAttribute("class");

                jupiterImg.setAttribute("class", "d-none");
                neptuneImg.setAttribute("class", "w-75");
                alphaCentariImg.setAttribute("class", "d-none");
                polarisImg.setAttribute("class", "d-none");
                break;

            // alpha centari
            case 3:
                jupiterImg.removeAttribute("class");
                neptuneImg.removeAttribute("class");
                alphaCentariImg.removeAttribute("class");
                polarisImg.removeAttribute("class");

                jupiterImg.setAttribute("class", "d-none");
                neptuneImg.setAttribute("class", "d-none");
                alphaCentariImg.setAttribute("class", "w-75");
                polarisImg.setAttribute("class", "d-none");
                break;

            // alpha centari
            case 4:
                jupiterImg.removeAttribute("class");
                neptuneImg.removeAttribute("class");
                alphaCentariImg.removeAttribute("class");
                polarisImg.removeAttribute("class");

                jupiterImg.setAttribute("class", "d-none");
                neptuneImg.setAttribute("class", "d-none");
                alphaCentariImg.setAttribute("class", "d-none");
                polarisImg.setAttribute("class", "w-75");
                break;

                default:
                jupiterImg.removeAttribute("class");
                neptuneImg.removeAttribute("class");
                alphaCentariImg.removeAttribute("class");
                polarisImg.removeAttribute("class");

                jupiterImg.setAttribute("class", "d-none");
                neptuneImg.setAttribute("class", "d-none");
                alphaCentariImg.setAttribute("class", "d-none");
                polarisImg.setAttribute("class", "d-none");
        }
    };

    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                        <SizeSelector OnChangeEvent={this.SizeChanged} />
                        <TargetSelector OnChangeEvent={this.TargetChanged} />
                        <CalculateButton ClickEvent={ShowResults} />
                        <Results />
                    </div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component
{
    render()
    {
        return (
                <div className="my-5">
                    <div className="display-4 my-5 text-center">Cosmic Calculator</div>
                    <p className="lead">
                        Our sun is 865,370 miles in diameter.  It would take 109 of our Earths to cover the width of our sun.
                    </p>
                    <p className="lead">
                        Imagine if you could shrink the size of our sun down to a small object and the rest of the universe would also
                        shrink down to the same scale. How far away would Jupiter be?  Neptune?  Alpha Centari - our closest star?
                    </p>
                </div>
                );
    }
}

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
                    </select>
                </div>
                <div className="col-sm-4 text-center">
                    <img id="SaltImg" src={GrainOfSaltImg} alt="size of sun" className="w-75" />
                    <img id="BBImg" src={BBPelletImg} alt="size of sun" className="d-none" />
                    <img id="GolfBallImg" src={GolfBallImg} alt="size of sun" className="d-none" />
                </div>
            </div>);
    }
}

class TargetSelector extends React.Component
{
    render()
    {
        return (<div className="form-group row">
                    <label className="col-sm-4 col-form-label text-right">Select the distant target</label>
                    <div className="col-sm-4">
                    <select id="TargetSelectorDropDown" className="form-control" onChange={this.props.OnChangeEvent}>
                            <option value="1">Jupiter (481,000,000 miles)</option>
                            <option value="2">Neptune (2,793,000,000 miles)</option>
                            <option value="3">Alpha Centari (4.37 light years)</option>
                            <option value="4">Polaris "North Star" (434 light years)</option>
                        </select>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img id="JupiterImg" src={JupiterImg} alt="target" className="w-75" />
                        <img id="NeptuneImg" src={NeptuneImg} alt="target" className="d-none" />
                        <img id="AlphaCentariImg" src={AlphaCentariImg} alt="target" className="d-none" />
                        <img id="PolarisImg" src={PolarisImg} alt="target" className="d-none" />
                    </div>
                </div>);
    }
}

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

class Results extends React.Component
{
    render()
    {
        return(
            <div className="my-b d-none" id="ResultsContainer">
                <div className="alert alert-success" role="alert" id="ResultsOutput">
                </div>
            </div>
        );
    }
}

export default App;
