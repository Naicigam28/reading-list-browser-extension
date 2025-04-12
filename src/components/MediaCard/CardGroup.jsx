import React from "react";
import Card from "./Card";
import { Col, Row } from "antd";

export default function CardGroup({ items }) {
  return (
    <Row gutter={16}>
      {items.map((item) => (
        <Col span={8} key={item.id}>
          <Card title={item.title} url={item.url} />
        </Col>
      ))}
    </Row>
  );
}
