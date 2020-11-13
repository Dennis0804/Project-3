import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;
const arr = new Array(12).fill("");

const Home = () => {
  const history = useHistory();
  return (
    <div style={{ padding: "20px 100px" }}>
      <Row gutter={20}>
        {arr.map((item, index) => (
          <Col key={index} lg={6} md={8} sm={12} xs={24}>
            <Card
              cover={
                <img alt="example" src={require("../../assets/images/PTE-Course.png")} />
              }
            >
              <Meta
                title="PTE Course"
                description={
                  <Button
                    danger
                    onClick={() => {
                      history.push("/pay");
                    }}
                  >
                    Buy Course
                  </Button>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
