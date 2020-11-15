import React, { Component } from 'react';
import { Descriptions, Button } from 'antd';
import './profile.less'
import SetInfoModal from './components/SetInfoModal/SetInfoModal';
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className='profile'>
                <Descriptions
                    title="Profile"
                    bordered
                    column={ { md: 1, sm: 1, xs: 1 } }
                >
                    <Descriptions.Item label="Name">Jerry</Descriptions.Item>
                    <Descriptions.Item label="Age">22</Descriptions.Item>
                    <Descriptions.Item label="Sex">man</Descriptions.Item>
                    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                        Data disk type: MongoDB
                    </Descriptions.Item>
                </Descriptions>
                <Button type="primary" block onClick={ this.showModal }>Reset</Button>
                <SetInfoModal
                    visible={ this.state.visible }
                    handleCancel={ this.handleCancel }
                    handleOk = {this.handleOk}
                />
            </div>
        );
    }
}

export default Profile;
