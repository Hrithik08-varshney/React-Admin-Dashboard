import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Widgets } from '../../components/widgets/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';

import "./home.scss";
import Table from '../../components/table/Table';

export default function home() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widgets type="user"/>
        <Widgets type="order"/>
        <Widgets type="earning"/>
        <Widgets type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart aspect={2/1} title="Last 6 Month Revenue"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">
          Latest Trasactions
        </div>
        <Table/>
      </div>
    </div>
    </div>
  )
}

/* 2:07:37 */
