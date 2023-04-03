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
import { OrderColumns, Orderdata } from "../components/Order.Config";

const OrderDetail = () => {
  return (
    <>
      <TopBar title="Chi tiết đơn hàng " />
      <Row>
        <Col span={12}>
          <CardComponent title="Thông tin khách hàng">
            <Descriptions column={1}>
              <Descriptions.Item label="Tên khách hàng">
                <b>Duy dz</b>
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                <b>09048462512</b>
              </Descriptions.Item>
            </Descriptions>
          </CardComponent>

          <CardComponent title="Thông tin người nhận hàng">
            <Descriptions column={1}>
              <Descriptions.Item label="Tên người nhận">
                <b>Duy dz</b>
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                <b>09048462512</b>
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ chi tiết">
                <b>Số nhà 19, Đường Láng, P. Láng, Q.Thanh Xuân, TP. Hà Nội</b>
              </Descriptions.Item>
            </Descriptions>
          </CardComponent>
        </Col>

        <Col span={12}>
          <CardComponent title="Lịch sử đơn hàng">
            <Descriptions column={1}>
              <Descriptions.Item label="Thời gian đặt hàng">
                <b>23-08-2020 12:50</b>
              </Descriptions.Item>
              <Descriptions.Item label="Xác nhận đơn hàng">
                <b>25-08-2020 14:23</b>
              </Descriptions.Item>
            </Descriptions>
          </CardComponent>
        </Col>
      </Row>
      <CardComponent title="Thông tin đơn hàng">
        <Descriptions column={2}>
          <Descriptions.Item label="Mã đơn hàng">
            <b>23-08-2020 12:50</b>
          </Descriptions.Item>
          <Descriptions.Item label="Số lượng sản phẩm">
            <b>25-08-2020 14:23</b>
          </Descriptions.Item>
          <Descriptions.Item label="Hình thức thanh toán">
            <b>25-08-2020 14:23</b>
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái thanh toán">
            <b>25-08-2020 14:23</b>
          </Descriptions.Item>
          <Descriptions.Item label="Khu vực mua hàng">
            <b>25-08-2020 14:23</b>
          </Descriptions.Item>
          <Descriptions.Item label="Tổng tiền">
            <b>25-08-2020 14:23</b>
          </Descriptions.Item>
        </Descriptions>
      </CardComponent>
      <CardComponent title="Thông tin sản phẩm">
        <Table
          columns={[...OrderColumns]}
          bordered={true}
          dataSource={Orderdata}
        />
      </CardComponent>
    </>
  );
};
export default OrderDetail;
const CardComponent = styled(Card)`
  border-radius: 6px;
  margin: 6px;
`;
