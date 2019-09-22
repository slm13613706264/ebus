import React, { Component } from 'react';
import { Row, Col, Select, Avatar } from 'antd';
import logo from './CDB.png';
import './index.css';
const { Option } = Select;
export default class App extends Component {
    render() {
        return (
            <div className="header">
                <Row>
                    <Col span={8}>
                        <img src={logo} alt="logo" style={{ width: 20 }} />
                    </Col>
                    <Col span={16}>

                        <div className="Login" >
                            <Avatar size="small" icon="user" />
                            <span>你是</span>
                        </div>

                        <div className="select-wrap">
                            <Select
                                // value={currency}
                                // size={size}
                                style={{ width: 120 }}
                            // onChange={this.handleCurrencyChange}
                            >
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            <a>
                                转到文档
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}