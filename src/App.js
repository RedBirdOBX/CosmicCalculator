import React, { useState} from 'react';

// components
import Results from './components/Results';
import CalculateButton from './components/CalculateButton';
import Header from './components/Header';
import TargetSelector from './components/TargetSelector';
import SizeSelector from './components/SizeSelector';
import Utilities from './Utilities';

// globals
const diameterOfSunInMiles = 865370;
const milesInALightYear = 5880000000000;
const mmsInAnInch = 25.4;
const inchesInFoot = 12;
const feetInAMile = 5820;
let imagesToHide = [];
let imagesToShow = [];
const utilities = new Utilities();

let sunSizes = [];
let grainOfSalt = new SunSize(1, "Grain Of Salt", "grains of salt", 0.334, "salt.jpg");
let bbPellet = new SunSize(2, "BB Pellet", "bb pellets", 4.43, "bb.jpg");
let golfBall = new SunSize(3, "Golf Ball", "golf balls", 42.67, "golf-ball.jpg");
let basketball = new SunSize(4, "Basketball", "basketballs", 241.55, "golf-ball.jpg");
sunSizes.push(grainOfSalt, bbPellet, golfBall, basketball);

let targets = [];
let earth = new Target(1, "Earth", "our home", 94437000);
let jupiter = new Target(2, "Jupiter", "our largest planet", 481000000);
let neptune = new Target(3, "Neptune", "our most distant planet", 2793000000);
let alphaCentari = new Target(4, "Alpha Centari", "our closest star", (milesInALightYear * 4.367));
let polaris = new Target(5, "Polaris", "also known as the 'North Star'", (milesInALightYear * 434));
targets.push(earth, jupiter, neptune, alphaCentari, polaris);


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

const App = () =>
{
    // state
    const [sunSize, setSunSize] = useState(1);
    const [target, setTarget] = useState(1);
    console.log(`sunSize: ${sunSize}`);
    console.log(`target: ${target}`);

    //const
    const ShowResults = () => {
        const resultsContainer = document.getElementById("ResultsContainer");
        resultsContainer.removeAttribute("class");
        resultsContainer.setAttribute("class", "my-b");

        imagesToShow = []
        imagesToHide = [];
        imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg", "SaltImg", "BBImg", "GolfBallImg", "BasketballImg");

        utilities.ImageManager(imagesToHide, imagesToShow);
        CalculateResults();
    };

    const CalculateResults = () =>
    {
        // renaming of sunSize vs selectedSunSize might be needed

        const resultsOutput = document.getElementById("ResultsOutput");

        // selected objects (from drop downs)
        let selectedSunSize = sunSizes[sunSize - 1];
        let selectedTarget = targets[target - 1];
        let htmlOutput = "";

        const microMilesInMM = (diameterOfSunInMiles / selectedSunSize.MMSize);
        const mmsAwayFromTarget = (selectedTarget.DistanceInMiles / microMilesInMM);
        const inchesAwayFromTarget = (mmsAwayFromTarget / mmsInAnInch);
        const feetAwayFromTarget = (inchesAwayFromTarget / inchesInFoot);
        const milesAwayFromTarget = (feetAwayFromTarget / feetInAMile);
        const formula = ((((selectedTarget.DistanceInMiles / microMilesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile);

        htmlOutput = `<p>Our sun is <strong>${utilities.FormatWithCommas(diameterOfSunInMiles, 0)} miles</strong> in diameter.</p>`;

        htmlOutput += `<p>If the sun were scaled down to the size of a <strong>${selectedSunSize.Name}</strong>, `;
        htmlOutput += `it would be <strong>${selectedSunSize.MMSize} mms</strong> in diameter. `;
        htmlOutput += `Each mm would be equal to <strong>${utilities.FormatWithCommas(microMilesInMM, 2)}</strong> miles. </p>`;

        // not far enough to use light years
        if (selectedTarget.DistanceInMiles / milesInALightYear < 0.5) {
            htmlOutput += `<p><strong>${selectedTarget.Name}</strong>, ${selectedTarget.Description}, normally <strong>${utilities.FormatWithCommas(selectedTarget.DistanceInMiles, 2)}</strong> miles `;
            htmlOutput += `from our sun, would be <strong>${utilities.FormatWithCommas((feetAwayFromTarget), 2)}</strong> feet away from our sun at this scale.</p>`;
        }
        else {
            htmlOutput += `<p><strong>${selectedTarget.Name}</strong>, ${selectedTarget.Description}, is `;
            htmlOutput += `<strong>${selectedTarget.DistanceInMiles / milesInALightYear}</strong> light years away. `;
            htmlOutput += `There are <strong>${utilities.FormatWithCommas(milesInALightYear, 0)} miles</strong> in one light year so that puts ${selectedTarget.Name} `;
            htmlOutput += `<strong>${utilities.FormatWithCommas(selectedTarget.DistanceInMiles, 2)}</strong> miles away from our sun.</p>`;
        }

        htmlOutput += `<p>If each mm is equal to <strong>${utilities.FormatWithCommas(microMilesInMM, 2)} miles</strong> in scale, that would place `;
        htmlOutput += `${selectedTarget.Name} <strong>${utilities.FormatWithCommas(mmsAwayFromTarget, 2)}</strong> mms away from our sun `;
        htmlOutput += `also scaled down respectively.</p>`;

        htmlOutput += `<p>There are <strong>${mmsInAnInch} mms</strong> in an inch. That means <strong>${selectedTarget.Name}</strong> `;
        htmlOutput += `is <strong>${utilities.FormatWithCommas(inchesAwayFromTarget, 2)} inches</strong> away from tiny our sun. `;
        htmlOutput += `That's <strong>${utilities.FormatWithCommas(feetAwayFromTarget, 2)} feet</strong> away from our sun. <p>`;

        // not far enough to use miles
        if (milesAwayFromTarget < 0.5) {
            htmlOutput += `<p>You would have to put these two tiny objects (${selectedSunSize.PluralName}) <strong>${utilities.FormatWithCommas(feetAwayFromTarget, 2)} `;
            htmlOutput += `feet</strong> apart to accurately represent the distance between our sun and ${selectedTarget.Name}.</p>`;
        }
        else {
            htmlOutput += `<p>Put in perspective, you would have to put these two tiny objects (${selectedSunSize.PluralName}) <strong>${utilities.FormatWithCommas(milesAwayFromTarget, 2)} `;
            htmlOutput += `miles</strong> apart to accurately represent the distance between our sun and ${selectedTarget.Name}.</p>`;
        }

        htmlOutput += "<p>&nbsp;</p>";
        htmlOutput += `<p><small><em>((((milesAwayFromAlphaCenari / milesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile): ${formula}</em></small></p>`;

        resultsOutput.innerHTML = htmlOutput;
    };

    const SizeChanged = () =>
    {
        const sunSizeDropDown = document.getElementById("SizeSelectorDropDown");
        let selectedSunSize = parseInt(sunSizeDropDown.value);
        setSunSize(selectedSunSize);

        imagesToHide = [];
        imagesToShow = [];

        switch (selectedSunSize)
        {
            // salt
            case 1:
                imagesToHide.push("BBImg", "GolfBallImg", "BasketballImg");
                imagesToShow.push("SaltImg");
                break;
            // bb
            case 2:
                imagesToHide.push("SaltImg", "GolfBallImg", "BasketballImg");
                imagesToShow.push("BBImg");
                break;
            // golf ball
            case 3:
                imagesToHide.push("SaltImg", "BBImg", "BasketballImg");
                imagesToShow.push("GolfBallImg");
                break;
            // basektball
            case 4:
                imagesToHide.push("SaltImg", "BBImg", "GolfBallImg");
                imagesToShow.push("BasketballImg");
                break;

            default:
                imagesToHide.push("SaltImg", "BBImg", "GolfBallImg", "BasketballImg");

        }

        utilities.ImageManager(imagesToHide, imagesToShow);
    };

    const TargetChanged = () => {

        const targetDropDown = document.getElementById("TargetSelectorDropDown");
        let selectedTarget = parseInt(targetDropDown.value);
        setTarget(selectedTarget);

        imagesToHide = [];
        imagesToShow = [];

        // img management
        switch (selectedTarget)
        {
            // earth
            case 1:
                imagesToHide.push("JupiterImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg");
                imagesToShow.push("EarthImg");
                break;
            // jupiter
            case 2:
                imagesToHide.push("EarthImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg");
                imagesToShow.push("JupiterImg");
                break;
            // neptune
            case 3:
                imagesToHide.push("EarthImg", "JupiterImg", "AlphaCentariImg", "PolarisImg");
                imagesToShow.push("NeptuneImg");
                break;
            // alpha centari
            case 4:
                imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "PolarisImg");
                imagesToShow.push("AlphaCentariImg");
                break;
            // polaris
            case 5:
                imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg");
                imagesToShow.push("PolarisImg");
                break;

            default:
                imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg", "Polaris");
        }

        utilities.ImageManager(imagesToHide, imagesToShow);
    };

    return (<div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                        <div className="row">
                            <div className="col-6">
                                <SizeSelector OnChangeEvent={SizeChanged} />
                            </div>
                            <div className="col-6">
                                <TargetSelector OnChangeEvent={TargetChanged} />
                            </div>
                        </div>
                        <CalculateButton ClickEvent={ShowResults} />
                        <Results />
                    </div>
                </div>
            </div>
    );
};

export default App;




// components
// CLASS VERSION
// class App extends React.Component
// {

//     constructor()
//     {
//         super();
//         this.state =
//         {
//             SunSizeId: 1,
//             TargetId: 1
//         }
//     }

//     ShowResults = () => {
//         const resultsContainer = document.getElementById("ResultsContainer");
//         resultsContainer.removeAttribute("class");
//         resultsContainer.setAttribute("class", "my-b");

//         imagesToShow = []
//         imagesToHide = [];
//         imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg", "SaltImg", "BBImg", "GolfBallImg", "BasketballImg");

//         utilities.ImageManager(imagesToHide, imagesToShow);
//         this.CalculateResults();
//     };

//     CalculateResults = () => {
//         const selectedSunSize = document.getElementById("SizeSelectorDropDown");
//         const selectedTarget = document.getElementById("TargetSelectorDropDown");
//         const resultsOutput = document.getElementById("ResultsOutput");

//         // selected objects (from drop downs)
//         let sunSize = sunSizes[selectedSunSize.value - 1];
//         let target = targets[selectedTarget.value - 1];
//         let htmlOutput = "";

//         const microMilesInMM = (diameterOfSunInMiles / sunSize.MMSize);
//         const mmsAwayFromTarget = (target.DistanceInMiles / microMilesInMM);
//         const inchesAwayFromTarget = (mmsAwayFromTarget / mmsInAnInch);
//         const feetAwayFromTarget = (inchesAwayFromTarget / inchesInFoot);
//         const milesAwayFromTarget = (feetAwayFromTarget / feetInAMile);
//         const formula = ((((target.DistanceInMiles / microMilesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile);

//         htmlOutput = `<p>Our sun is <strong>${utilities.FormatWithCommas(diameterOfSunInMiles, 0)} miles</strong> in diameter.</p>`;

//         htmlOutput += `<p>If the sun were scaled down to the size of a <strong>${sunSize.Name}</strong>, `;
//         htmlOutput += `it would be <strong>${sunSize.MMSize} mms</strong> in diameter. `;
//         htmlOutput += `Each mm would be equal to <strong>${utilities.FormatWithCommas(microMilesInMM, 2)}</strong> miles. </p>`;

//         // not far enough to use light years
//         if (target.DistanceInMiles / milesInALightYear < 0.5) {
//             htmlOutput += `<p><strong>${target.Name}</strong>, ${target.Description}, normally <strong>${utilities.FormatWithCommas(target.DistanceInMiles, 2)}</strong> miles `;
//             htmlOutput += `from our sun, would be <strong>${utilities.FormatWithCommas((feetAwayFromTarget), 2)}</strong> feet away from our sun at this scale.</p>`;
//         }
//         else {
//             htmlOutput += `<p><strong>${target.Name}</strong>, ${target.Description}, is `;
//             htmlOutput += `<strong>${target.DistanceInMiles / milesInALightYear}</strong> light years away. `;
//             htmlOutput += `There are <strong>${utilities.FormatWithCommas(milesInALightYear, 0)} miles</strong> in one light year so that puts ${target.Name} `;
//             htmlOutput += `<strong>${utilities.FormatWithCommas(target.DistanceInMiles, 2)}</strong> miles away from our sun.</p>`;
//         }

//         htmlOutput += `<p>If each mm is equal to <strong>${utilities.FormatWithCommas(microMilesInMM, 2)} miles</strong> in scale, that would place `;
//         htmlOutput += `${target.Name} <strong>${utilities.FormatWithCommas(mmsAwayFromTarget, 2)}</strong> mms away from our sun `;
//         htmlOutput += `also scaled down respectively.</p>`;

//         htmlOutput += `<p>There are <strong>${mmsInAnInch} mms</strong> in an inch. That means <strong>${target.Name}</strong> `;
//         htmlOutput += `is <strong>${utilities.FormatWithCommas(inchesAwayFromTarget, 2)} inches</strong> away from tiny our sun. `;
//         htmlOutput += `That's <strong>${utilities.FormatWithCommas(feetAwayFromTarget, 2)} feet</strong> away from our sun. <p>`;

//         // not far enough to use miles
//         if (milesAwayFromTarget < 0.5) {
//             htmlOutput += `<p>You would have to put these two tiny objects (${sunSize.PluralName}) <strong>${utilities.FormatWithCommas(feetAwayFromTarget, 2)} `;
//             htmlOutput += `feet</strong> apart to accurately represent the distance between our sun and ${target.Name}.</p>`;
//         }
//         else {
//             htmlOutput += `<p>Put in perspective, you would have to put these two tiny objects (${sunSize.PluralName}) <strong>${utilities.FormatWithCommas(milesAwayFromTarget, 2)} `;
//             htmlOutput += `miles</strong> apart to accurately represent the distance between our sun and ${target.Name}.</p>`;
//         }

//         htmlOutput += "<p>&nbsp;</p>";
//         htmlOutput += `<p><small><em>((((milesAwayFromAlphaCenari / milesInMM) / mmsInAnInch) / inchesInFoot) / feetInAMile): ${formula}</em></small></p>`;

//         resultsOutput.innerHTML = htmlOutput;
//     };

//     SizeChanged = () =>
//     {
//         const selectedSunSize = document.getElementById("SizeSelectorDropDown");
//         imagesToHide = [];
//         imagesToShow = [];

//         switch (parseInt(selectedSunSize.value))
//         {
//             // salt
//             case 1:
//                 imagesToHide.push("BBImg", "GolfBallImg", "BasketballImg");
//                 imagesToShow.push("SaltImg");
//                 break;
//             // bb
//             case 2:
//                 imagesToHide.push("SaltImg", "GolfBallImg", "BasketballImg");
//                 imagesToShow.push("BBImg");
//                 break;
//             // golf ball
//             case 3:
//                 imagesToHide.push("SaltImg", "BBImg", "BasketballImg");
//                 imagesToShow.push("GolfBallImg");
//                 break;
//             // basektball
//             case 4:
//                 imagesToHide.push("SaltImg", "BBImg", "GolfBallImg");
//                 imagesToShow.push("BasketballImg");
//                 break;

//                 default:
//                     imagesToHide.push("SaltImg", "BBImg", "GolfBallImg","BasketballImg");

//         }

//         utilities.ImageManager(imagesToHide, imagesToShow);
//     };

//     TargetChanged = () => {

//         const selectedTarget = document.getElementById("TargetSelectorDropDown");
//         imagesToHide = [];
//         imagesToShow = [];

//         switch (parseInt(selectedTarget.value))
//         {
//             // earth
//             case 1:
//                 imagesToHide.push("JupiterImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg");
//                 imagesToShow.push("EarthImg");
//                 break;
//             // jupiter
//             case 2:
//                 imagesToHide.push("EarthImg", "NeptuneImg", "AlphaCentariImg", "PolarisImg");
//                 imagesToShow.push("JupiterImg");
//                 break;
//             // neptune
//             case 3:
//                 imagesToHide.push("EarthImg", "JupiterImg", "AlphaCentariImg", "PolarisImg");
//                 imagesToShow.push("NeptuneImg");
//                 break;
//             // alpha centari
//             case 4:
//                 imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "PolarisImg");
//                 imagesToShow.push("AlphaCentariImg");
//                 break;
//             // polaris
//             case 5:
//                 imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg");
//                 imagesToShow.push("PolarisImg");
//                 break;

//                 default:
//                     imagesToHide.push("EarthImg", "JupiterImg", "NeptuneImg", "AlphaCentariImg", "Polaris");
//         }

//         utilities.ImageManager(imagesToHide, imagesToShow);
//     };

//     render()
//     {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <Header />
//                         <SizeSelector OnChangeEvent={this.SizeChanged} />
//                         <TargetSelector OnChangeEvent={this.TargetChanged} />
//                         <CalculateButton ClickEvent={this.ShowResults} />
//                         <Results />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
