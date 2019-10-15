import React, {Component} from 'react';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { TrailingReturns } from './components/portfolio/trailingReturns';
import portfolioData from './portfolio_data.json';
import indexData from './index_data.json';

class App extends Component {
    render () {
        console.log(portfolioData);
        console.log(indexData);
        return (
            <div className="App">
                <TrailingReturns
                    portfolio={portfolioData}
                    index={indexData}
                />
            </div>
        );
    }
}

export default App;
