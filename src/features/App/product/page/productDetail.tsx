import {
  Button,
  Card,
  Col,
  Descriptions,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../../../components/TopBar";
import { ProductData } from "../components/Product.Config";

const ProductDetail = () => {
  return (
    <>
      <TopBar title="Chi tiết sản phẩm " />
      <CardComponent title="Thông tin chung">
        <Row>
          <Col span={12}>
            <Descriptions column={1}>
              <Descriptions.Item
                label="Mã sản phẩm"
                labelStyle={{ width: "50%" }}
                contentStyle={{ width: "50%" }}
              >
                {ProductData[0]?.id_product}
              </Descriptions.Item>
              <Descriptions.Item
                label="Tên sản phẩm"
                labelStyle={{ width: "50%" }}
                contentStyle={{ width: "50%" }}
              >
                {ProductData[0]?.name}
              </Descriptions.Item>
              <Descriptions.Item
                label="Giá bán"
                labelStyle={{ width: "50%" }}
                contentStyle={{ width: "50%" }}
              >
                {ProductData[0]?.price}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions column={1}>
              <Descriptions.Item
                label="Trạng thái hoạt động"
                labelStyle={{ width: "50%" }}
                contentStyle={{ width: "50%" }}
              >
                {ProductData[0]?.id_product}
              </Descriptions.Item>
              <Descriptions.Item
                label="Tên sản phẩm"
                labelStyle={{ width: "50%" }}
                contentStyle={{ width: "50%" }}
              >
                {ProductData[0]?.name}
              </Descriptions.Item>
              <Descriptions.Item
                label="Giá bán"
                labelStyle={{ width: "25%" }}
                contentStyle={{ width: "25%" }}
              >
                {ProductData[0]?.price}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </CardComponent>
      <CardComponent title="Thông tin hình ảnh">
        <Descriptions>
            <Descriptions.Item label = "Hình ảnh sản phẩm">
                
            </Descriptions.Item>
        </Descriptions>
      </CardComponent>
    </>
  );
};
export default ProductDetail;
const CardComponent = styled(Card)`
  border-radius: 6px;
  margin: 6px;
`;
const Item = styled(Descriptions.Item)``;
