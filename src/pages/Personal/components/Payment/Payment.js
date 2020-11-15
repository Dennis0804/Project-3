import React, { Component } from 'react';
import { List, Popconfirm, Button, Skeleton } from 'antd';

class Payment extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    money: 199.99
                },
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    money: 289.99
                },
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    money: 359.99
                },
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    money: 679.99
                },
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    money: 589.99
                },
            ]
        }
    }
    delete = (idx) => {
        console.log(idx);
        this.setState({
            list: this.state.list.filter((item, index) => index != idx)
        })
    }
    render() {
        return (
            <div style={ { width: '50%' } }>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={ this.state.list }
                    renderItem={ (item, idx) => (
                        <List.Item
                            actions={ [<Popconfirm
                                title="Are you sure delete this task?"
                                onConfirm={ ()=>this.delete(idx) }
                                okText="Yes"
                                cancelText="No"
                            >
                                <a href="#">Delete</a>
                            </Popconfirm>] }
                        >
                            <Skeleton avatar title={ false } loading={ item.loading } active>
                                <List.Item.Meta
                                    title={ <a href="https://ant.design">{ item.title }</a> }
                                    description={ item.time }
                                />
                                <div>${ item.money }</div>
                            </Skeleton>
                        </List.Item>
                    ) }
                />
            </div>
        );
    }
}

export default Payment;
