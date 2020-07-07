import React from 'react';

class ResultsDisplay extends React.Component {
    render() {
        return (
            <div>
                <h3>The selected sun size is {this.props.SunSizeData.Name}</h3>

                <h3>The selected target is {this.props.TargetData.Name}</h3>

                <p>
                    {/* Our sun is <strong>{props.ResultsData.DiameterOfSunInMiles} miles</strong> in diameter at it takes 109 Earth-sized
                    objects, side by side, to cover the diameter of the sun.
                    But what if the sun could be scaled down to the size of a <strong>{props.ResultsData.SizeName}</strong> and
                    the rest of the universe also scaled down accordingly? Our sun would
                    be <strong>{props.ResultsData.SunSizeInMM} mms</strong> in diameter which means each mm
                    would be equal to <strong>{props.ResultsData.MicroMilesInMM}</strong> miles of normal scale. */}
                </p>

                {/* <p>
                    <strong>{props.ResultsData.TargetName}</strong>, {props.ResultsData.TargetDescription}, normally <strong>{props.ResultsData.TargetMilesFromSun}</strong> miles
                    from our sun, would be <strong>{props.ResultsData.MMsAwayFromTargetFormatted}</strong> mms away from our sun at this scale.
                    That's <strong>{props.ResultsData.InchesAwayFromTargetFormatted}</strong> inches,
                    <strong>{props.ResultsData.FeetAwayFromTargetFormatted}</strong> feet away from our sun at this scale.
                    You could roughly put <strong>{props.ResultsData.UnitsBetweenSunAndTarget}</strong> {props.ResultsData.SizePluralName} between the
                    Sun and {props.ResultsData.TargetName}.
                </p> */}
            </div>
        );
    }
}

export default ResultsDisplay;
