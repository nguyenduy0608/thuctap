import { Col, Row } from 'antd';
import React from 'react';

const CardRow = ({
    left,
    right,
    rightStyle,
    leftStyle,
}: {
    left: any;
    right: any;
    rightStyle?: any;
    leftStyle?: any;
}) => {
    return (
        <Row className="gx-mt-4">
            <Col span={10} style={{ ...leftStyle }}>
                {left}{' '}
            </Col>
            <Col span={14} style={{ ...rightStyle, fontWeight: 700 }}>
                {right}
            </Col>
        </Row>
    );
};

export default CardRow;
