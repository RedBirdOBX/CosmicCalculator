import Constants from './Constants';


class Utilities
{
    constants = new Constants();

    FormatWithCommas = (input, decimalPlaces) => {
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
    };

    HideAllImages = () =>
    {
        let saltImg = document.getElementById("SaltImg");
        saltImg.removeAttribute("class");
        saltImg.setAttribute("class", "d-none");

        let bbImg = document.getElementById("BBImg");
        bbImg.removeAttribute("class");
        bbImg.setAttribute("class", "d-none");

        let golfBallImg = document.getElementById("GolfBallImg");
        golfBallImg.removeAttribute("class");
        golfBallImg.setAttribute("class", "d-none");

        let basketballImg = document.getElementById("BasketballImg");
        basketballImg.removeAttribute("class");
        basketballImg.setAttribute("class", "d-none");

        let earthImg = document.getElementById("EarthImg");
        earthImg.removeAttribute("class");
        earthImg.setAttribute("class", "d-none");

        let jupiterImg = document.getElementById("JupiterImg");
        jupiterImg.removeAttribute("class");
        jupiterImg.setAttribute("class", "d-none");

        let neptuneImg = document.getElementById("NeptuneImg");
        neptuneImg.removeAttribute("class");
        neptuneImg.setAttribute("class", "d-none");

        let alphaCentariImg = document.getElementById("AlphaCentariImg");
        alphaCentariImg.removeAttribute("class");
        alphaCentariImg.setAttribute("class", "d-none");

        let polarisImg = document.getElementById("PolarisImg");
        polarisImg.removeAttribute("class");
        polarisImg.setAttribute("class", "d-none");
    };

    ShowCorrectImages = (sunSizeValue, selectedTargetValue) => 
    {
        switch (sunSizeValue)
        {
            case 0:
                this.ShowImage("SaltImg");
                break;
            case 1:
                this.ShowImage("BBImg");
                break;
            case 2:
                this.ShowImage("GolfBallImg");
                break;
            case 3:
                this.ShowImage("BasketballImg");
                break;
            default:
                this.ShowImage("SaltImg");
        }

        switch (selectedTargetValue) 
        {
            case 0:
                this.ShowImage("EarthImg");
                break;
            case 1:
                this.ShowImage("JupiterImg");
                break;
            case 2:
                this.ShowImage("NeptuneImg");
                break;
            case 3:
                this.ShowImage("AlphaCentariImg");
                break;
            case 4:
                this.ShowImage("PolarisImg");
                break;
            default:
                this.ShowImage("EarthImg");
        }
    };

    ShowImage = (imageId) =>
    {
        let imageToShow = document.getElementById(imageId);
        if (imageToShow !== null)
        {
            imageToShow.removeAttribute("class");
            imageToShow.setAttribute("class", "w-100");
        }
    };

    // calculations
    CalculateMilesPerMM = (sunSizeInMM) => {
        return this.constants.DiameterOfSunInMiles / sunSizeInMM;
    };

    CalculateMMsAwayFromTarget = (targetDistanceInMiles, microMilesInMM) =>
    {
        return targetDistanceInMiles / microMilesInMM;
    };

    CalculateInchesAwayFromTarget = (mmsAwayFromTarget) => {
        return mmsAwayFromTarget / this.constants.MMsInAnInch;
    };

    CalculateFeetAwayFromTarget = (mmsAwayFromTarget) => {
        return (mmsAwayFromTarget / this.constants.MMsInAnInch) / this.constants.InchesInFoot;
    };

    CalculateUnitsBetweenSunAndTarget = (targetDistanceInMiles, sunSizeInMMs) =>
    {
        return (targetDistanceInMiles / (this.constants.DiameterOfSunInMiles / sunSizeInMMs)) * (sunSizeInMMs * 10);
    };
};

export default Utilities;