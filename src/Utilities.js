class Utilties
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

    ImageManager = (imageIdsToHide, imageIdsToShow) => {
        imageIdsToHide.forEach(this.HideImage);
        imageIdsToShow.forEach(this.ShowImage);
    };

    HideImage = (imageId) => {
        let imageToHide = document.getElementById(imageId);
        if (imageToHide !== null) {
            imageToHide.removeAttribute("class");
            imageToHide.setAttribute("class", "d-none");
        }
    };

    ShowImage = (imageId) => {
        let imageToShow = document.getElementById(imageId);
        if (imageToShow !== null) {
            imageToShow.removeAttribute("class");
            imageToShow.setAttribute("class", "w-100");
        }
    };
};

export default Utilties;