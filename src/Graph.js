import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import './Graph.css';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            config: props.config.default,
            data: function () {
                var arr = [];
                for (var key in props.data.default) {
                    var eachData = props.data.default[key];
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
