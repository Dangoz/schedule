import ICompleteVideo from '@/interfaces/complete-video.interface'
import IProfile from '@/interfaces/profile.interface'
import { useState, useEffect } from 'react'
import { Spin, Row, Col } from 'antd'
import ContentStyle from '@/styles/videos/content.module.css'
import Card from './card'

const Content = ({ videos, isLoading, talent }: 
  { videos: ICompleteVideo[], isLoading: boolean, talent: IProfile }) => {
  const [content, setContent] = useState(videos);
  const [span] = useState({ xs: 24, sm: 12, md: 8, lg: 6 });

  useEffect(() => {
    setContent(videos);
  }, [videos])

  return (
    <div className={ContentStyle.wrapper}>

      {videos.length === 0
        ? <div className={ContentStyle.notFound}>Not Found</div>
        : isLoading
          ? <div className={ContentStyle.spinWrapper}><Spin size={'large'} /></div>

          : <div>
            <Row className={ContentStyle.row} gutter={[0, 0]}
              justify={'center'}>

              {content.map(video => (
                <Col xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} className={ContentStyle.col} key={video.link}>
                    <Card video={video} talent={talent}/>
                </Col>
              ))}
            </Row>
          </div>}

    </div>
  )
}

export default Content
