import IProfile from '@/interfaces/profile.interface'
import { useState, useEffect } from 'react'
import { Row, Col, Divider } from 'antd'
import { YoutubeFilled, TwitterOutlined, StarTwoTone, VideoCameraTwoTone, EyeFilled, StarFilled, VideoCameraFilled } from '@ant-design/icons'
import Link from 'next/link'
import ProfileStyle from '@/styles/profile/profile.module.css'

const Profile = ({ talent }: { talent: IProfile }) => {
  const [isMobile, setIsMobile] = useState<boolean>(null);

  useEffect(() => {
    setIsMobile(require('@/config/isMobile')(navigator.userAgent));
  }, [])

  return (<>
    <div className={ProfileStyle.wrapper} style={{ paddingTop: isMobile ? '10px' : '50px' }}>
      <div className={ProfileStyle.bg} style={{ backgroundImage: `url(${talent.banner.split('=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj')[0]})` }} />

      <div className={ProfileStyle.description}>
        <div className={ProfileStyle.descriptionText}>

          {talent.lore}
          <Divider style={{ margin: '7px 0 3px 0' }} />
        </div>
      </div>

      <Row className={ProfileStyle.row} justify={'center'}>
        <Col xs={24} sm={11} md={8} lg={8} className={ProfileStyle.linksCol} key={'links'}>

          <Row className={ProfileStyle.links} justify={'center'} >
            <Col xs={8} sm={24} md={24} lg={24} className={ProfileStyle.linkCol}>
              <a href={talent.youtube} target={'_blank'}>
                <div className={ProfileStyle.container}>
                  <div className={ProfileStyle.icon}><YoutubeFilled className={ProfileStyle.youtubeIcon} /></div>
                </div>
              </a>
            </Col>
            <Col xs={8} sm={24} md={24} lg={24} className={ProfileStyle.linkCol}>
              <a href={talent.twitter} target={'_blank'}>
                <div className={ProfileStyle.container}>
                  <div className={ProfileStyle.icon}><TwitterOutlined className={ProfileStyle.twitterIcon} /></div>
                </div>
              </a>
            </Col>
            <Col xs={8} sm={24} md={24} lg={24} className={ProfileStyle.linkCol}>
              <a href={talent.marshmallow} target={'_blank'}>
                <div className={ProfileStyle.container}>
                  <div className={ProfileStyle.icon}><img className={ProfileStyle.marshmallow} src="/marshmallow.png" alt="marshmallow" /></div>
                </div>
              </a>
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={13} md={16} lg={16} className={ProfileStyle.statsCol} key={'stats'}>

          <div className={ProfileStyle.stats}>
            <Divider style={{ margin: '7px 0 7px 0', fontSize: 16, fontWeight: 500 }} orientation={'left'}>Subscribers</Divider>
            <div className={ProfileStyle.data}>
              <div className={ProfileStyle.box}><StarFilled className={ProfileStyle.statsIcon} style={{ color: 'gold' }} /><br />{talent.subscriberCount}</div>
            </div>
            <Divider style={{ margin: '7px 0 7px 0', fontSize: 16, fontWeight: 500 }} orientation={'left'}>Views</Divider>
            <div className={ProfileStyle.data}>
              <div className={ProfileStyle.box}><EyeFilled className={ProfileStyle.statsIcon} /><br />{talent.viewCount}</div>
            </div>
            <Divider style={{ margin: '7px 0 7px 0', fontSize: 16, fontWeight: 500 }} orientation={'left'}>Videos</Divider>
            <div className={ProfileStyle.data}>
              <div className={ProfileStyle.box}><VideoCameraFilled className={ProfileStyle.statsIcon} style={{ color: '#1890ff' }} /><br />{talent.videoCount}</div>
            </div>
          </div>
        </Col>
      </Row>

    </div>
  </>)
}

export default Profile
