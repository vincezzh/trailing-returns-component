import React, {Component} from 'react';
import './riskScoringSplash.css';

class RiskScoringSplash extends Component {

    render() {
        return (
            <div className="risk-scoring-splash-frame">
                <div className="risk-scoring">
                    Risk Scoring
                </div>
                <div className="description">
                    Find your client's risk tolerance by going through a questionnaire or through
                    a quantitative slider to see your client's risk tolerance
                </div>
                <div className="button-group">
                    <button onClick={this.props.onQuestionnaireClick}>QUESTIONNAIRE</button>
                    <button onClick={this.props.onSliderClick}>SLIDER</button>
                </div>
            </div>
        )
    }
}

export default RiskScoringSplash;
