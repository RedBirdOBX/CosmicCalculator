import React from 'react';

// Step 1 - get drop downs to read arrays / vals&output from functions

// global consts
const diameterOfSunInMiles = 865000;
const milesInALightYear = 5880000000000;
const mmsInAnInch = 25.4;
const inchesInFoot = 12;
const feetInAMile = 5820;


let sunSizes = [];
let grainOfSalt = new SunSize(1, "Grain Of Salt", "grains of salt", 0.334);
let bbPellet = new SunSize(2, "BB Pellet", "bb pellets", 4.43);
let golfBall = new SunSize(3, "Golf Ball", "golf balls", 42.67);
sunSizes.push(grainOfSalt, bbPellet, golfBall);

let targets = [];
let jupiter = new Target(1, "Jupiter", "our largest planet", 481000000);
let neptune = new Target(2, "Neptune", "our most distant planet", 2793000000);
let alphaCentari = new Target(3, "Alpha Centari", "our closest star", (milesInALightYear * 4.367));
let polaris = new Target(3, "Polaris", "also known as the 'North Star'", (milesInALightYear * 434));
targets.push(jupiter, neptune, alphaCentari, polaris);



const ShowResults = () =>
{
    let resultsContainer = document.getElementById("ResultsContainer");
    resultsContainer.removeAttribute("class");
    resultsContainer.setAttribute("class", "my-b");

    CalculateResults();
};

const CalculateResults = () =>
{
    console.clear();

    // selected objects (from drop downs)
    let selectedSize = sunSizes[0];
    let selectedTarget = targets[3];
    let htmlOutput = "";

    const microMilesInMM = (diameterOfSunInMiles / selectedSize.MMSize);
    const mmsAwayFromTarget = (selectedTarget.DistanceInMiles / microMilesInMM);
    const inchesAwayFromTarget = (mmsAwayFromTarget / mmsInAnInch);
    const feetAwayFromTarget = (inchesAwayFromTarget / inchesInFoot);
    const milesAwayFromTarget = (feetAwayFromTarget / feetInAMile);
    const formula = ((((selectedTarget.DistanceInMiles / microMilesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile);

    htmlOutput = `<p>Our sun is <strong>${FormatWithCommas(diameterOfSunInMiles, 0)} miles</strong> in diameter.</p>`;

    htmlOutput += `<p>If the sun were scaled down to the size of a <strong>${selectedSize.Name}</strong>, `;
    htmlOutput += `it would be <strong>${selectedSize.MMSize} mms</strong> in diameter. `;
    htmlOutput += `Each mm would be equal to <strong>${FormatWithCommas(microMilesInMM, 2)}</strong> miles. </p>`;

    // not far enough to use light years
    if (selectedTarget.DistanceInMiles / milesInALightYear < 0.5)
    {
        htmlOutput += `<p><strong>${selectedTarget.Name}</strong>, ${selectedTarget.Description}, normally <strong>${FormatWithCommas(selectedTarget.DistanceInMiles, 2)}</strong> miles `;
        htmlOutput += `from our sun, would be <strong>${FormatWithCommas((selectedTarget.DistanceInMiles / feetInAMile), 2)}</strong> feet away from our sun at this scale.</p>`;
    }
    else
    {
        htmlOutput += `<p><strong>${selectedTarget.Name}</strong>, ${selectedTarget.Description}, is `;
        htmlOutput += `<strong>${selectedTarget.DistanceInMiles / milesInALightYear}</strong> light years away. `;
        htmlOutput += `There are <strong>${FormatWithCommas(milesInALightYear, 0)} miles</strong> in one light year so that puts ${selectedTarget.Name} `;
        htmlOutput += `<strong>${FormatWithCommas(selectedTarget.DistanceInMiles, 2)}</strong> miles away from our sun.</p>`;
    }

    htmlOutput += `<p>If each mm is equal to <strong>${FormatWithCommas(microMilesInMM, 2)} miles</strong> in scale, that would place `;
    htmlOutput += `${selectedTarget.Name} <strong>${FormatWithCommas(mmsAwayFromTarget, 2)}</strong> mms away from our sun `;
    htmlOutput += `also scaled down respectively.</p>`;

    htmlOutput += `<p>There are <strong>${mmsInAnInch} mms</strong> in an inch. That means <strong>${selectedTarget.Name}</strong> `;
    htmlOutput += `is <strong>${FormatWithCommas(inchesAwayFromTarget, 2)} inches</strong> away from tiny our sun. `;
    htmlOutput += `That's <strong>${FormatWithCommas(feetAwayFromTarget, 2)} feet</strong> away from our sun. <p>`;

    // not far enough to use miles
    if(milesAwayFromTarget < 0.5)
    {
        htmlOutput += `<p>You would have to put these two tiny objects (${selectedSize.PluralName}) <strong>${FormatWithCommas(feetAwayFromTarget, 2)} `;
        htmlOutput += `feet</strong> apart to accurately represent the distance between our sun and ${selectedTarget.Name}.</p>`;
    }
    else
    {
        htmlOutput += `<p>Put in perspective, you would have to put these two tiny objects (${selectedSize.PluralName}) <strong>${FormatWithCommas(milesAwayFromTarget, 2)} `;
        htmlOutput += `miles</strong> apart to accurately represent the distance between our sun and ${selectedTarget.Name}.</p>`;
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


function SunSize(index, name, pluralName, mmSize)
{
    this.Index = index;
    this.Name = name;
    this.PluralName = pluralName;
    this.MMSize = mmSize;
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
            SizeOfSun: "grain of salt"
        }
    }

    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                        <SizeSelector Sizes={this.state.sunSizes} />
                        <TargetSelector />
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
                        Our sun is 864,000 midles in diameter.  It would take 109 of our Earths to cover the width of our sun.
                    </p>
                    <p className="lead">
                        Imagine you shrink the size of our sun down to a small object and the rest of the universe would also
                        shrink down to the same scale. How far away would Jupiter be?  The Earth?  Alpha Centari - our closest star?
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
                <label className="col-sm-4 col-form-label">Select the size of our sun</label>
                <div className="col-sm-4">
                    <select id="SizeSelectorDropDown" className="form-control">
                        <option>a grain of salt (0.3mm)xxx</option>
                        {/* {this.props.sunSizes.map(size => <option>size</option>)} */}
                    </select>
                </div>
            </div>);
    }
}

class TargetSelector extends React.Component
{
    // onChange={this.props.SelectionChanged("Alpha Centari")}
    render()
    {
        return (<div className="form-group row">
                    <label className="col-sm-4 col-form-label">Select the distant target</label>
                    <div className="col-sm-4">
                        <select id="TargetSelectorDropDown" className="form-control">
                            <option>Alpha Centari (4.4 light years)</option>
                        </select>
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
                        Show Results
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
