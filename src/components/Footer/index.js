import React from 'react'
import { Col, Row } from 'antd';
import {useHistory,Link} from 'react-router-dom'

import './footer.less'

const Footer = () => {
    const history = useHistory();
    return (
        <footer>
            <Row justify='center'>
                
                <Col lg={4} sm={12} xs={24} >
                    <h4>Learn</h4>
                    <nav>
                        <Link to="">Library</Link>
                        <Link to=''>Featured</Link>
                        <Link to=''>Explore</Link>
                        <Link to=''>Learning Paths</Link>
                    </nav>
                </Col>
                <Col lg={4} sm={12} xs={24} >
                    <h4>Learn</h4>
                    <nav>
                        <Link to="">Library</Link>
                        <Link to=''>Featured</Link>
                        <Link to=''>Explore</Link>
                        <Link to=''>Learning Paths</Link>
                    </nav>
                </Col>
                <Col lg={4} sm={12} xs={24} >
                    <h4>Learn</h4>
                    <nav>
                        <Link to="">Library</Link>
                        <Link to=''>Featured</Link>
                        <Link to=''>Explore</Link>
                        <Link to=''>Learning Paths</Link>
                    </nav>
                </Col>
                <Col lg={4} sm={12} xs={24} >
                    <h4>Learn</h4>
                    <nav>
                        <Link to="">Library</Link>
                        <Link to=''>Featured</Link>
                        <Link to=''>Explore</Link>
                        <Link to=''>Learning Paths</Link>
                    </nav>
                </Col>
            </Row>
            <p>Copyright 2019 © All rights Reserved.</p>
        </footer>
    )
}

export default Footer
