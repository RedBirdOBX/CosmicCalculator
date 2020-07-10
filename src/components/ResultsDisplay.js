import React from 'react';

class ResultsDisplay extends React.Component
{
    render()
    {
        let earthInvisibleMsg = "";
        if (this.props.Results.SelectedSunSize.Index === 0 && this.props.Results.SelectedTarget.Index < 3)
        {
            earthInvisibleMsg = `${this.props.Results.SelectedTarget.Name} at this scale, would be invisible to the naked eye.`;
        }

        let farAwayMsg = "";
        if (this.props.Results.MilesAwayFromTarget > 1)
        {
            farAwayMsg = `${this.props.Results.MilesAwayFromTargetFormatted} miles`; 
        }
        else
        {
            farAwayMsg = `${this.props.Results.InchesAwayFromTargetFormatted} inches`; 
        }

        return (
            <div>
                <p class="lead">
                    Our sun is <span class="text-info">{this.props.Results.DiameterOfSunInMilesFormatted} miles</span>&nbsp;in diameter.
                    If the sun could be scaled down to the size of a <span class="text-info">{this.props.Results.SelectedSunSize.Name}</span> and
                    the rest of the universe also scaled down proportionally:
                </p>

                <ul class="lead">
                    <li>Our sun would be <span class="text-info">{this.props.Results.SelectedSunSize.MMSize} mms</span>&nbsp;in diameter</li>
                    <li>Each millimeter would be equal to&nbsp;<span class="text-info">{this.props.Results.MicroMilesPerMMFormatted}</span>&nbsp;miles of normal space</li>
                    <li>A beam of light leaving our {this.props.Results.SelectedSunSize.Name}-sized sun, would travel <span class="text-info">{this.props.Results.ScaledFeetLightTravelsInADayFormatted}</span> feet in a day</li>
                </ul>

                <p class="lead">
                    <span class="text-info">{this.props.Results.SelectedTarget.Name}</span>, {this.props.Results.SelectedTarget.Description},
                    normally&nbsp;<span class="text-info">{this.props.Results.TargetDistanceInMilesFormatted} miles</span>&nbsp; 
                    from our sun:&nbsp;
                </p>

                <ul class="lead">
                    <li>Would be placed <span class="text-info">{this.props.Results.MMsAwayFromTargetFormatted} mms</span> away from our sun at this scale.</li>
                    <li>That's <span class="text-info">{farAwayMsg}</span>&nbsp;({this.props.Results.FeetAwayFromTargetFormatted} feet) away.</li>
                    <li>You could put (approximately) <span class="text-info">{this.props.Results.UnitsBetweenSunAndTargetFormatted}</span>
                    &nbsp;{this.props.Results.SelectedSunSize.PluralName} between our scaled-down Sun and {this.props.Results.SelectedTarget.Name}.</li>
                </ul>

                <p class="lead text-info text-center">
                    {earthInvisibleMsg}
                </p>
            </div>
        );
    }
}

export default ResultsDisplay;
