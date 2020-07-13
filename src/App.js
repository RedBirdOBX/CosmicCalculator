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

let defaultResults = new Results(grainOfSalt, earth);

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

function Results(selectedSunSize, selectedTarget)
{
    this.DiameterOfSunInMiles = constants.DiameterOfSunInMiles;
    this.DiameterOfSunInMilesFormatted = utilities.FormatWithCommas(this.DiameterOfSunInMiles, 0);
    this.MilesInALightYear = constants.MilesInALightYear;
    this.MilesInALightYearFormatted = utilities.FormatWithCommas(this.MilesInALightYear, 0);
    this.SpeedOfLight = constants.SpeedOfLight;
    this.SpeedOfLightFormatted = `${utilities.FormatWithCommas(this.SpeedOfLight, 0)} miles per second`;
    this.SelectedSunSize = selectedSunSize;
    this.SelectedTarget = selectedTarget;
    this.MicroMilesPerMM = utilities.CalculateMilesPerMM(selectedSunSize.MMSize);
    this.MicroMilesPerMMFormatted = utilities.FormatWithCommas(this.MicroMilesPerMM, 2);
    this.TargetDistanceInMiles = selectedTarget.DistanceInMiles;
    this.TargetDistanceInMilesFormatted = utilities.FormatWithCommas(selectedTarget.DistanceInMiles, 2);
    this.MMsPerInch = constants.MMsPerInch;
    this.MMsAwayFromTarget = utilities.CalculateMMsAwayFromTarget(selectedTarget.DistanceInMiles, this.MicroMilesPerMM);
    this.MMsAwayFromTargetFormatted = utilities.FormatWithCommas(this.MMsAwayFromTarget, 2);
    this.InchesAwayFromTarget = utilities.CalculateInchesAwayFromTarget(this.MMsAwayFromTarget);
    this.InchesAwayFromTargetFormatted = utilities.FormatWithCommas(utilities.CalculateInchesAwayFromTarget(this.MMsAwayFromTarget),2);
    this.FeetAwayFromTarget = utilities.CalculateFeetAwayFromTarget(this.MMsAwayFromTarget);
    this.FeetAwayFromTargetFormatted = utilities.FormatWithCommas(utilities.CalculateFeetAwayFromTarget(this.MMsAwayFromTarget), 2);
    this.MilesAwayFromTarget = utilities.CalculateMilesAwayFromTarget(this.MMsAwayFromTarget);
    this.MilesAwayFromTargetFormatted = utilities.FormatWithCommas(this.MilesAwayFromTarget, 2);
    this.UnitsBetweenSunAndTarget = utilities.CalculateUnitsBetweenSunAndTarget(selectedTarget.DistanceInMiles, selectedSunSize.MMSize);
    this.UnitsBetweenSunAndTargetFormatted = utilities.FormatWithCommas(utilities.CalculateUnitsBetweenSunAndTarget(selectedTarget.DistanceInMiles, selectedSunSize.MMSize), 2);
    this.ScaledFeetLightTravelsInADay = utilities.ScaledFeetLightTravelsInADay(selectedSunSize.MMSize);
    this.ScaledFeetLightTravelsInADayFormatted = utilities.FormatWithCommas(this.ScaledFeetLightTravelsInADay, 2);
}

class App extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            Results: defaultResults,
        };
    }

    UpdateResults = () =>
    {
        // grabbing vakue from drop downs
        const sunSizeDropDown = document.getElementById("SunSizeSelectorDropDown");
        let sunSizeValue = parseInt(sunSizeDropDown.value);
        let selectedSunSize = sunSizes[sunSizeValue];

        const targetDropDown = document.getElementById("TargetSelectorDropDown");
        let selectedTargetValue = parseInt(targetDropDown.value);
        let selectedTarget = targets[selectedTargetValue];

        // build new results
        let newResults = new Results(selectedSunSize, selectedTarget);

        // set new state
        this.setState({ Results: newResults});

        utilities.HideAllImages();
        utilities.ShowCorrectImages(sunSizeValue, selectedTargetValue);
    };

    render() {
        return (
            <div className="container">
                 <div className="row">
                     <div className="col-12">
                         <Header />
                         <div className="row">
                             <div className="col-6">
                                <SizeSelector ChangeEvent={this.UpdateResults} />
                             </div>
                            <div className="col-6">
                                <TargetSelector ChangeEvent={this.UpdateResults} />
                            </div>
                         </div>
                        <ResultsDisplay Results={this.state.Results} />
                     </div>
                 </div>
             </div>
        );
    }
}


export default App;
