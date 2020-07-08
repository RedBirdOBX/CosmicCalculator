import React from 'react';
import Constants from '../Constants';
import Utilities from '../Utilities';


class ResultsDisplay extends React.Component
{

    constants = new Constants();
    utilities = new Utilities();
    diameterOfSunInMilesFormatted = this.utilities.FormatWithCommas(this.constants.DiameterOfSunInMiles, 0);
    //microMilesPerMM = this.utilities.CalculateMilesPerMM(this.constants.DiameterOfSunInMiles, this.props.SunSize.MMSize);
    //microMilesPerMMFormatted = this.utilities.FormatWithCommas(this.microMilesPerMM, 2);
    // mmsAwayFromTarget = this.utilities.CalculateMMsAwayFromTarget(this.props.Target.DistanceInMiles, this.microMilesPerMM);
    // mmsAwayFromTargetFormatted = this.utilities.FormatWithCommas(this.mmsAwayFromTarget, 2);
    targetDistanceInMilesFormatted = this.utilities.FormatWithCommas(this.props.Target.DistanceInMiles, 2);
    inchesAwayFromTargetFormatted = this.utilities.FormatWithCommas(this.utilities.CalculateInchesAwayFromTarget(this.mmsAwayFromTarget),2);
    feetAwayFromTargetFormatted = this.utilities.FormatWithCommas(this.utilities.CalculateFeetAwayFromTarget(this.mmsAwayFromTarget), 2);
    unitsBetweenSunAndTarget = this.utilities.CalculateUnitsBetweenSunAndTarget(this.props.Target.DistanceInMiles, this.props.SunSize.MMSize);
    unitsBetweenSunAndTargetFormatted = this.utilities.FormatWithCommas(this.unitsBetweenSunAndTarget, 2);


    render()
    {
        return (
            <div>

                {/* <h3>The selected sun size is </h3>

                <h3>The selected target is {this.props.Target.Name}</h3> */}

                <p>
                    Our sun is <strong>{this.diameterOfSunInMilesFormatted} miles</strong> in diameter
                    and it takes 109 Earth-sized objects, side by side, to cover the diameter of the sun.
                </p>

                <p>
                    But what if the sun could be scaled down to the size of a <strong>{this.props.SunSize.Name}</strong> and
                    the rest of the universe also scaled down accordingly? Our sun would be <strong>{this.props.SunSize.MMSize} mms</strong>
                    &nbsp;in diameter which means each mm would be equal to&nbsp;<strong>{this.props.ResultsPackage.MicroMilesPerMMFormatted}</strong>
                    &nbsp;miles of normal scale.
                </p>

                <p>
                    <strong>{this.props.Target.Name}</strong>, {this.props.Target.Description},
                    normally&nbsp;<strong>{this.props.ResultsPackage.TargetDistanceInMilesFormatted}</strong> miles
                    from our sun, would be xx<strong>{this.mmsAwayFromTargetFormatted}</strong>xx mms away from our sun at this scale.
                    That's <strong>{this.inchesAwayFromTargetFormatted}</strong> inches, <strong>{this.feetAwayFromTargetFormatted}</strong>
                    &nbsp;feet away from our sun at this scale. You could roughly put <strong>{this.unitsBetweenSunAndTargetFormatted}</strong>
                    &nbsp;{this.props.SunSize.PluralName} between the Sun and {this.props.Target.Name}.
                </p>

                {/* <p>
                    {/* Our sun is <strong>{props.ResultsData.DiameterOfSunInMiles} miles</strong> in diameter at it takes 109 Earth-sized
                    objects, side by side, to cover the diameter of the sun.
                    But what if the sun could be scaled down to the size of a <strong>{props.ResultsData.SizeName}</strong> and
                    the rest of the universe also scaled down accordingly? Our sun would
                    be <strong>{props.ResultsData.SunSizeInMM} mms</strong> in diameter which means each mm
                    would be equal to <strong>{props.ResultsData.MicroMilesInMM}</strong> miles of normal scale. }


                <p>
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
