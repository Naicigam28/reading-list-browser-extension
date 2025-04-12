import React from "react";

import { Card } from "antd";

export default function MediaCard({ title, url }) {
  const faviconUrl = `${new URL(url).origin}/favicon.ico`;
  return (
    <Card
      hoverable
      style={{
        width: 300,
        margin: "10px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        height:300,
      }}
      cover={<img src={faviconUrl} />}
      title={title}
    >
      <p>{title}</p>
    </Card>
  );
}
