import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components'
const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Exchanges" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Market Cap" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value="5" /> </Col>
        <Col span={12}> <Statistic title="Total Markets" value="5" /> </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to = "/cryptocurrencies">
            Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to = "/news">
            Show More</Link>
        </Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage;