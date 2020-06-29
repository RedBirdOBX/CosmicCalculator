import React, { useState} from 'react';

// components
import ResultsDisplay from './components/ResultsDisplay';
import Header from './components/Header';
import SizeSelector from './components/SizeSelector';
import Utilities from './Utilities';

// globals
const utilities = new Utilities();

let objectSizes = [];
let grainOfSalt = new ObjectSize(0, "Grain Of Salt", "grains of salt", 0.334, "salt.jpg");
let bbPellet = new ObjectSize(1, "BB Pellet", "bb pellets", 4.43, "bb.jpg");
let golfBall = new ObjectSize(2, "Golf Ball", "golf balls", 42.67, "golf-ball.jpg");
let basketball = new ObjectSize(3, "Basketball", "basketballs", 241.55, "basketball.jpg");
objectSizes.push(grainOfSalt, bbPellet, golfBall, basketball);

// default results
let defaultResultsObject = new Results(grainOfSalt);

// global functions
function ObjectSize(index, name, pluralName, mmSize, imgName)
{
    this.Index = index;
    this.Name = name;
    this.PluralName = pluralName;
    this.MMSize = mmSize;
    this.ImageName = imgName;
}

function Results(selectedObjectSize)
{
    this.SelectedObjectSize = selectedObjectSize;
};


const App = () =>
{
    // state
    const [resultsObject, setResultsObject] = useState(defaultResultsObject);

    const SizeChanged = () =>
    {
        const objectSizeDropDown = document.getElementById("SizeSelectorDropDown");
        let selectedObjectSize = parseInt(objectSizeDropDown.value);

        // img management
        utilities.HideSizeImages();
        switch (selectedObjectSize)
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

        let objectSize = objectSizes[selectedObjectSize];
        resultsObject.SelectedObjectSize = objectSize;
        setResultsObject(resultsObject);

        console.clear();
        console.dir(resultsObject);
    };

    return (<div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                        <div className="row">
                            <div className="col-6">
                                <SizeSelector OnChangeEvent={SizeChanged} />
                            </div>
                        </div>
                        <ResultsDisplay ResultsData={resultsObject} />
                    </div>
                </div>
            </div>
    );
};

export default App;
