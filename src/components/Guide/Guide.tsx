/*
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2022-10-08 18:38:48
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-13 16:45:54
 * @FilePath: /abeats-develop/src/components/Guide/Guide.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
