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
                <p class="lead">
                    Our sun is <span class="text-info">{this.props.Results.DiameterOfSunInMilesFormatted} miles</span>&nbsp; 
                    in diameter and it takes <span class="text-info">109</span> Earth-sized objects, side by side, to cover the diameter of the sun.
                </p>

                <p class="lead">
                    If the sun could be scaled down to the size of a <span class="text-info">{this.props.Results.SelectedSunSize.Name}</span> and
                    the rest of the universe also scaled down proportionally, our sun would be <span class="text-info">{this.props.Results.SelectedSunSize.MMSize} mms</span>
                    &nbsp;in diameter. This means each millimeter would be equal to&nbsp;<span class="text-info">{this.props.Results.MicroMilesPerMMFormatted}</span>
                    &nbsp;miles in normal space.
                </p>

                <p class="lead">
                    <span class="text-info">{this.props.Results.SelectedTarget.Name}</span>, {this.props.Results.SelectedTarget.Description},
                    normally&nbsp;<span class="text-info">{this.props.Results.TargetDistanceInMilesFormatted} miles</span>&nbsp; 
                    from our sun, would be <span class="text-info">{this.props.Results.MMsAwayFromTargetFormatted} mms</span> away from our sun at this scale.
                    That's <span class="text-info">{this.props.Results.InchesAwayFromTargetFormatted}</span> inches ({this.props.Results.FeetAwayFromTargetFormatted} feet) 
                    away from our sun at this scale. You could put (approximately) <span class="text-info">{this.props.Results.UnitsBetweenSunAndTargetFormatted}</span>
                    &nbsp;{this.props.Results.SelectedSunSize.PluralName} between our scaled down Sun and {this.props.Results.SelectedTarget.Name}.
                </p>

                <p class="lead text-info">
                    {earthInvisible}
                </p>
            </div>
        );
    }
}

export default ResultsDisplay;
