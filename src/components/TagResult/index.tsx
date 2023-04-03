import { Tag } from 'antd';
import React from 'react';

const TagResult = ({ text, color }: { text: string; color: string }) => {
    return (
        <Tag className="gx-mb-0" color={color} style= {{fontWeight:700}}>
            {text}
        </Tag>
    );
};

export default TagResult;
