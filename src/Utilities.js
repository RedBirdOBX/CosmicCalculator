class Utilities
{
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

    HideSizeImages = () =>
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
    };

    HideTargetImages = () =>
    {
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

    ShowImage = (imageId) =>
    {
        let imageToShow = document.getElementById(imageId);
        if (imageToShow !== null)
        {
            imageToShow.removeAttribute("class");
            imageToShow.setAttribute("class", "w-100");
        }
    };
};

export default Utilities;