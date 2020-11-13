import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useHistory } from "react-router-dom";

import "./mycourse.less";
const { Meta } = Card;
const arr = new Array(6).fill("");

const MyCourse = () => {
  const history = useHistory();

  return (
    <>
      <Row gutter={20}>
        {arr.map((item, index) => (
          <Col
            style={{ marginBottom: 10 }}
            key={index}
            lg={6}
            md={8}
            sm={12}
            xs={24}
          >
            <Card
              cover={
                <img
                  alt="example"
                  src={require("../../../../assets/images/PTE-Course.png")}
                />
              }
            >
              <Meta
                title="PTE Course"
                description={
                  <Button
                    danger
                    onClick={() => {
                      history.push("/video");
                    }}
                  >
                    Start Learning
                  </Button>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyCourse;
