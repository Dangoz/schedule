import ICompleteVideo from '@/interfaces/completeVideo.interface'
import IProfile from '@/interfaces/profile.interface'
import { useState, useEffect } from 'react'
import { Spin, Row, Col } from 'antd'
import ContentStyle from '@/styles/videos/content.module.css'
import Card from './card'
import useTheme from '@/functions/useTheme'

const Content = ({ videos, isLoading }: { videos: ICompleteVideo[]; isLoading: boolean }) => {
  const theme = useTheme()
  const [content, setContent] = useState(videos)
  const [span] = useState({ xs: 24, sm: 12, md: 8, lg: 6 })

  useEffect(() => {
    setContent(videos)
  }, [videos])

  return (
    <>
      {videos.length === 0 ? (
        <div className={ContentStyle.wrapper}>
          <div className={ContentStyle.notFound} style={{ color: theme.textHigh }}>
            Not Found
          </div>
        </div>
      ) : isLoading ? (
        <div className={ContentStyle.wrapper}>
          <div className={ContentStyle.spinWrapper}>
            <Spin size={'large'} />
          </div>
        </div>
      ) : (
        <div>
          <Row className={ContentStyle.row} gutter={[0, 0]} justify={'center'}>
            {content.map((video) => (
              <Col xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} className={ContentStyle.col} key={video.link}>
                <Card video={video} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default Content
