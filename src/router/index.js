import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AttrManage from "../views/attrManage";
import EventManage from "../views/eventManage";
import EventSearch from '../views/eventSearch'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Route path="/" corch} /> */}
                1111111
                <Route path="/eventsearch" component={EventSearch} />
                <Route path="/eventmanage" component={EventManage} />
                <Route path="/attrmanage" component={AttrManage} />
            </div>
        )
    }
}