import React from 'react';

class ResultsDisplay extends React.Component
{
    render()
    {

        let earthInvisible = "";
        if (this.props.Results.SelectedSunSize.Index===0 && this.props.Results.SelectedTarget.Index===0)
        {
            earthInvisible = "Earth at this scale would be invisible to the naked eye.";
        }

        return (
            <div>
                <p>
                    Our sun is <strong>{this.props.Results.DiameterOfSunInMilesFormatted} miles</strong> in diameter
                    and it takes 109 Earth-sized objects, side by side, to cover the diameter of the sun.
                </p>

                <p>
                    If the sun could be scaled down to the size of a <strong>{this.props.Results.SelectedSunSize.Name}</strong> and
                    the rest of the universe also scaled down porportionately, our sun would be <strong>{this.props.Results.SelectedSunSize.MMSize} mms</strong>
                    &nbsp;in diameter. This means each millimeter would be equal to&nbsp;<strong>{this.props.Results.MicroMilesPerMMFormatted}</strong>
                    &nbsp;miles in normal space.
                </p>

                <p>
                    <strong>{this.props.Results.SelectedTarget.Name}</strong>, {this.props.Results.SelectedTarget.Description},
                    normally&nbsp;<strong>{this.props.Results.TargetDistanceInMilesFormatted}</strong> miles
                    from our sun, would be <strong>{this.props.Results.MMsAwayFromTargetFormatted}</strong> mms away from our sun at this scale.
                    That's <strong>{this.props.Results.InchesAwayFromTargetFormatted}</strong> inches ({this.props.Results.FeetAwayFromTargetFormatted} feet) 
                    away from our sun at this scale. You could roughly put <strong>{this.props.Results.UnitsBetweenSunAndTargetFormatted}</strong>
                    &nbsp;{this.props.Results.SelectedSunSize.PluralName} between our scaled down Sun and {this.props.Results.SelectedTarget.Name}.
                </p>

                <p>
                    {earthInvisible}
                </p>
            </div>
        );
    }
}

export default ResultsDisplay;
