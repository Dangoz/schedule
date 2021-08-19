import GridStyle from '@/styles/schedule/grid.module.css'
import { Row, Col } from 'antd'
import { useState } from 'react';

const Grid = () => {
  const [xs] = useState(12);
  const [sm] = useState(8);
  const [md] = useState(6);
  const [lg] = useState(4);

  return (
    <div>
      <Row className={GridStyle.row} gutter={[0, 10]}
        justify={'center'}>
        <Col xs={xs} sm={sm} md={md} lg={lg} className={GridStyle.colBox}><div className={GridStyle.col}>a</div></Col>
        <Col xs={xs} sm={sm} md={md} lg={lg} className={GridStyle.colBox}><div className={GridStyle.col}>a</div></Col>
        <Col xs={xs} sm={sm} md={md} lg={lg} className={GridStyle.colBox}><div className={GridStyle.col}>a</div></Col>
        <Col xs={xs} sm={sm} md={md} lg={lg} className={GridStyle.colBox}><div className={GridStyle.col}>a</div></Col>
        <Col xs={xs} sm={sm} md={md} lg={lg} className={GridStyle.colBox}><div className={GridStyle.col}>a</div></Col>
      </Row>
    </div>
  )
}

export default Grid
