import React from 'react';
import Constants from '../Constants';
import Utilities from '../Utilities';


class ResultsDisplay extends React.Component
{

    constants = new Constants();
    utilities = new Utilities();
    diameterOfSunInMilesFormatted = this.utilities.FormatWithCommas(this.constants.DiameterOfSunInMiles, 0);
    //targetDistanceInMilesFormatted = this.utilities.FormatWithCommas(this.props.Target.DistanceInMiles, 2); ??

    render()
    {
        return (
            <div>
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
                    from our sun, would be <strong>{this.props.ResultsPackage.MMsAwayFromTargetFormatted}</strong> mms away from our sun at this scale.
                    That's <strong>{this.props.ResultsPackage.InchesAwayFromTargetFormatted}</strong> inches; <strong>{this.props.ResultsPackage.FeetAwayFromTargetFormatted}</strong>
                    &nbsp;feet away from our sun at this scale. You could roughly put <strong>{this.props.ResultsPackage.UnitsBetweenSunAndTargetFormatted}</strong>
                    &nbsp;{this.props.SunSize.PluralName} between the Sun and {this.props.Target.Name}.
                </p>
            </div>
        );
    }
}

export default ResultsDisplay;
