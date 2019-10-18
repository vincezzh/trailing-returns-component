import React, {Component} from 'react';
import './trailingReturns.css'
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartAxisDefaults,
    ChartLegend,
    ChartArea
} from '@progress/kendo-react-charts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import percentage from "../../util/percentage";

const categories = ["1 year", "3 year", "5 year", "7 year", "10 year"];

class TrailingReturns extends Component {

    render() {
        const setupData = () => {
            let _cacheDataCurrent = {};
            if (this.props.portfolio) {
                let arrayData = [];
                this.props.portfolio.details.portfolioReturnData.annualizedReturnsList.forEach(function (dataItem, i) {
                    if (dataItem.year === 1 || dataItem.year === 3 || dataItem.year === 5 || dataItem.year === 7 || dataItem.year === 10)
                        arrayData.push(dataItem.value);
                });
                _cacheDataCurrent.annualizedReturnData = {
                    name: this.props.portfolio.portfolioName,
                    data: arrayData
                }
            }
            let _cacheDataIndex = {};
            if (this.props.index) {
                let arrayData = [];
                this.props.index.portfolioReturnData.annualizedReturnsList.forEach(function (dataItem, i) {
                    if (dataItem.year === 1 || dataItem.year === 3 || dataItem.year === 5 || dataItem.year === 7 || dataItem.year === 10)
                        arrayData.push(dataItem.value);
                });
                _cacheDataIndex.annualizedReturnData = {
                    name: this.props.index.indexName,
                    data: arrayData
                }
            }
            else {
                _cacheDataIndex = {annualizedReturnData: null};
            }

            let dataSet = [_cacheDataCurrent.annualizedReturnData ? _cacheDataCurrent.annualizedReturnData : []];
            if (_cacheDataIndex.annualizedReturnData) dataSet.push(_cacheDataIndex.annualizedReturnData);
            return dataSet;
        }

        const dataCurrent = setupData();

        const displayIndexHeader = () => {
            if (this.props.index && dataCurrent[1] != null) {
                return <TableCell>Index</TableCell>
            }
        }

        const displayIndexCell = (idx) => {
            if (this.props.index && dataCurrent[1] != null) {
                return (
                    <TableCell>
                        <span>{ percentage(dataCurrent[1].data[idx]) }</span>
                    </TableCell>
                )
            }
        }

        const getBarColor = (idx) => {
            if (idx === 0) {
                return "blue";
            } else if (idx == 1) {
                return "grey";
            }
        }

        return (
            <div>
                <div>
                    <h1>Trailing Returns</h1>
                </div>
                <Table className='trailing-returns-table' size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Duration</TableCell>
                            <TableCell>Return</TableCell>
                            {displayIndexHeader()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataCurrent[0].data.map((item, idx) => (
                            <TableRow>
                                <TableCell>{categories[idx]}</TableCell>
                                <TableCell>
                                    <span>{ percentage(item) }</span>
                                </TableCell>
                                {displayIndexCell(idx)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className='trailing-returns-chart'>
                    <Chart>
                        <ChartArea width="600" height="300"/>
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} />
                        </ChartCategoryAxis>
                        <ChartAxisDefaults labels={{ format: "# \\%" }} />
                        <ChartSeries>
                            {dataCurrent.map((item, idx) => (
                                <ChartSeriesItem
                                    key={idx}
                                    type="column"
                                    data={item.data}
                                    name={item.name}
                                    color={getBarColor(idx)}
                                />))}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        );
    }
}

export default function(value, decimalPosition = 2) {
    return '$' + value
        .toFixed(decimalPosition)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export { TrailingReturns };

