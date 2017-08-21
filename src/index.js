import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import './index.css';
import * as data from '../sample-data.json' ;
import * as config from '../sample-config.json' ;

ReactDOM.render(
  <Graph data={data} config={config}/>,
  document.getElementById('root')
);