import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import './Graph.css';
import * as data from '../sample-data.json' ;

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            config: {
                "title": "Pressure Transient(s)",
                "xlabel": "Time",
                "ylabel": "Pressure (meters)",
                "gridLineWidth": 0.1,
                "labels": ["Date", "Tampines Ave10 (Stn 40)"],
                "connectSeparatedPoints": true,
                "axes": {
                    "x": {
                        "axisLabelFontSize": 9
                    }
                },
                "legend": "always"
            },
            data: function () {
                var arr = [];
                for (var key in data.default) {
                    var eachData = data.default[key];
                    eachData[0] = new Date(eachData[0]);
                    arr.push(eachData);
                }
                return arr;
            }
        };
    }
    componentDidMount() {
        var data = this.state.data();
        new Dygraph(
            document.getElementsByClassName("Graph-body")[0],
            data,
            this.state.config
        );
    }
    render() {
        return (
            <div className="Graph">
                <div className="Graph-body">
                </div>
            </div>
        );
    }
}

export default App;
