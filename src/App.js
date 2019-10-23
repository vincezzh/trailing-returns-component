import React, {Component} from 'react';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import portfolioData from './portfolio_data.json';
import indexData from './index_data.json';
import RiskScoringSplash from "./components/riskScoringSplash/riskScoringSplash";

class App extends Component {

    onQuestionnaireClick = (event) => {
        console.log("onQuestionnaireClick clicked!!!");
    }

    onSliderClick = (event) => {
        console.log("onSliderClick clicked!!!");
    }

    render () {
        console.log(portfolioData);
        console.log(indexData);
        return (
            <div className="App">
                <RiskScoringSplash
                    onQuestionnaireClick={this.onQuestionnaireClick}
                    onSliderClick={this.onSliderClick}
                />
            </div>
        );
    }
}

export default App;
