import React from 'react';

// components
 import Header from './components/Header';
import ResultsDisplay from './components/ResultsDisplay';
import SizeSelector from './components/SizeSelector';
import TargetSelector from './components/TargetSelector';
import Utilities from './Utilities';
import Constants from './Constants';

// globals
const utilities = new Utilities();
const constants = new Constants();

let sunSizes = [];
let grainOfSalt = new SunSize(0, "Grain Of Salt", "grains of salt", 0.334, "/images/salt.jpg");
let bbPellet = new SunSize(1, "BB Pellet", "bb pellets", 4.43, "bb.jpg");
let golfBall = new SunSize(2, "Golf Ball", "golf balls", 42.67, "golf-ball.jpg");
let basketball = new SunSize(3, "Basketball", "basketballs", 241.55, "basketball.jpg");
sunSizes.push(grainOfSalt, bbPellet, golfBall, basketball);

let targets = [];
let earth = new Target(0, "Earth", "our home", 94437000);
let jupiter = new Target(1, "Jupiter", "our largest planet", 481000000);
let neptune = new Target(2, "Neptune", "our most distant planet", 2793000000);
let alphaCentari = new Target(3, "Alpha Centari", "our closest star", (constants.MilesInALightYear * 4.367));
let polaris = new Target(4, "Polaris", "also known as the 'North Star'", (constants.MilesInALightYear * 434));
targets.push(earth, jupiter, neptune, alphaCentari, polaris);

// experimental
let defaultResultsPackage = new ResultsPackage(
                                utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, grainOfSalt.MMSize), 
                                earth.DistanceInMiles, 
                                utilities.CalculateMMsAwayFromTarget(earth.DistanceInMiles, utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, grainOfSalt.MMSize)));
// global functions
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

// experimental
function ResultsPackage(microMilesPerMM, targetDistanceInMiles, mmsAwayFromTarget)
{
    this.MicroMilesPerMM = microMilesPerMM;
    this.MicroMilesPerMMFormatted = utilities.FormatWithCommas(microMilesPerMM, 2);
    this.TargetDistanceInMiles = targetDistanceInMiles;
    this.TargetDistanceInMilesFormatted = utilities.FormatWithCommas(targetDistanceInMiles, 2);
    this.MMsAwayFromTarget = mmsAwayFromTarget;
    this.MMsAwayFromTargetFormatted = utilities.FormatWithCommas(mmsAwayFromTarget, 2);
}



class App extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            // defaults
            SelectedSunSize: sunSizes[0],
            SelectedTarget: targets[0],
            ResultsPackage: defaultResultsPackage,
        };
    }

    SunSizeChanged = () =>
    {
        // grabbing vakue from drop down
        const sunSizeDropDown = document.getElementById("SunSizeSelectorDropDown");
        let sunSizeValue = parseInt(sunSizeDropDown.value);
        let selectedSunSize = sunSizes[sunSizeValue];

        // build new results
        let newResults = new ResultsPackage(
                                utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, selectedSunSize.MMSize),
                                this.state.SelectedTarget.DistanceInMiles,
                                utilities.CalculateMMsAwayFromTarget(this.state.SelectedTarget.DistanceInMiles, utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, selectedSunSize.MMSize)));

        // set states
        this.setState({ SelectedSunSize: selectedSunSize });
        this.setState({ ResultsPackage: newResults});

        // img management
        utilities.HideSizeImages();
        switch (selectedSunSize.Index)
        {
            case 0:
                utilities.ShowImage("SaltImg");
                break;
            case 1:
                utilities.ShowImage("BBImg");
                break;
            case 2:
                utilities.ShowImage("GolfBallImg");
                break;
            case 3:
                utilities.ShowImage("BasketballImg");
                break;
            default:
                utilities.ShowImage("SaltImg");
        }
    };

    TargetChanged = () => {

        // grabbing vakue from drop down
        const targetDropDown = document.getElementById("TargetSelectorDropDown");
        let selectedTargetValue = parseInt(targetDropDown.value);
        let selectedTarget = targets[selectedTargetValue];

        // build new results
        let newResults = new ResultsPackage(
            utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, this.state.SelectedSunSize.MMSize),
            selectedTarget.DistanceInMiles,
            utilities.CalculateMMsAwayFromTarget(selectedTarget.DistanceInMiles, utilities.CalculateMilesPerMM(constants.DiameterOfSunInMiles, this.state.SelectedSunSize.MMSize)));

        // set states
        this.setState({ SelectedTarget: selectedTarget });
        this.setState({ ResultsPackage: newResults});

        // img management
        utilities.HideTargetImages();
        switch (selectedTarget.Index) {
            case 0:
                utilities.ShowImage("EarthImg");
                break;
            case 1:
                utilities.ShowImage("JupiterImg");
                break;
            case 2:
                utilities.ShowImage("NeptuneImg");
                break;
            case 3:
                utilities.ShowImage("AlphaCentariImg");
                break;
            case 4:
                utilities.ShowImage("PolarisImg");
                break;
            default:
                utilities.ShowImage("EarthImg");
        }
    };

    render() {
        return (
            <div className="container">
                 <div className="row">
                     <div className="col-12">
                         <Header />
                         <div className="row">
                             <div className="col-6">
                                <SizeSelector ChangeEvent={this.SunSizeChanged} />
                             </div>
                            <div className="col-6">
                                <TargetSelector ChangeEvent={this.TargetChanged} />
                            </div>
                         </div>
                        <ResultsDisplay SunSize={this.state.SelectedSunSize} Target={this.state.SelectedTarget} ResultsPackage={this.state.ResultsPackage} />
                     </div>
                 </div>
             </div>
        );
    }
}


export default App;
