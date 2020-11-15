import React, { Component } from 'react';
import { List, Popconfirm, Button, Skeleton } from 'antd';

class Assignment extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    score: 80
                },
                {
                    title: 'English',
                    time: new Date().toLocaleString(),
                    score: 90
                },
                {
                    title: 'ch01',
                    time: new Date().toLocaleString(),
                    score: 98
                },
                {
                    title: 'ch02',
                    time: new Date().toLocaleString(),
                    score: 80
                },
                {
                    title: 'ch03',
                    time: new Date().toLocaleString(),
                    score: 95
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
                                    description={ '提交时间：'+item.time }
                                />
                                <div>score:{ item.score }</div>
                            </Skeleton>
                        </List.Item>
                    ) }
                />
            </div>
        );
    }
}

export default Assignment;
