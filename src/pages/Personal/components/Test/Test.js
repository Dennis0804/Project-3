import React, { Component } from 'react';
import { List, Popconfirm, Button, Skeleton } from 'antd';

class Text extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    score: 85
                },
                {
                    title: 'English',
                    time: new Date().toLocaleString(),
                    score: 99
                },
                {
                    title: 'React',
                    time: new Date().toLocaleString(),
                    score: 85
                },
                {
                    title: 'English',
                    time: new Date().toLocaleString(),
                    score: 99
                },
                {
                    title: 'ch01',
                    time: new Date().toLocaleString(),
                    score: 100
                },
                {
                    title: 'ch02',
                    time: new Date().toLocaleString(),
                    score: 100
                },
                {
                    title: 'ch03',
                    time: new Date().toLocaleString(),
                    score: 93
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
                                <div>score：{ item.score }</div>
                            </Skeleton>
                        </List.Item>
                    ) }
                />
            </div>
        );
    }
}

export default Text;
