import React from "react";
import { Card, Avatar, Col, Row, Button } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;
const arr = new Array(20).fill("");

const Home = () => {
  const history = useHistory();
  return (
    <div style={{ padding: "20px 100px" }}>
      <Row gutter={20}>
        {arr.map((item, idx) => (
          <Col key={idx} span={6}>
            <Card
              cover={<img alt="example" src={require("../assets/images/PTE-Course.png")} />}
            >
              <Meta
                title="PTE Course"
                description={
                  <Button
                    danger
                    onClick={() => {
                      history.push("/payment");
                    }}
                  >
                    购买课程
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
