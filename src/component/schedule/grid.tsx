import GridStyle from '@/styles/schedule/grid.module.css'
import { Row, Col, Spin } from 'antd'
import { useEffect, useState } from 'react'
import IStreamVideo from '@/interfaces/stream-video.interface'
import Card from './card'
import IProfile from '@/interfaces/profile.interface'
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear);

const Grid = ({ criteria, videos, isToday, isAfterwards, profiles }:
  { criteria: dayjs.Dayjs, videos: IStreamVideo[], isToday: boolean, isAfterwards: boolean, profiles: IProfile[] }) => {

  const [span] = useState({ xs: 24, sm: 12, md: 8, lg: 6 });
  const [title, setTitle] = useState('MM / DD');
  const [content, setContent] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const filterVideos = async (): Promise<IStreamVideo[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = videos.filter(video => {

          let timestamp = dayjs(video.availableAt);
          let sameDay: boolean = (timestamp.dayOfYear() === criteria.dayOfYear() && timestamp.year() === criteria.year());
          if (isToday) { return (+timestamp <= +criteria || sameDay) }
          else if (isAfterwards) { return (+timestamp >= +criteria || sameDay) }
          else { return sameDay };
        })
        console.log('filtered!', JSON.stringify(result, null, 2));

        result = result.sort((a, b) => {
          return +dayjs(a.availableAt) - +dayjs(b.availableAt);
        })

        resolve(result);
      }, 500)
    })
  }

  useEffect(() => {

    filterVideos().then(videos => {
      setContent(videos);
      setTitle(criteria.format('MM / DD'))
      setIsloading(false);
    })
  }, []);

  useEffect(() => {
    console.log('content!!!', content);
  }, [content])

  return (
    // only show grid that is initalizing (null), or contains contents (length > 0)
    <>
      {(!content || (content && content.length > 0)) && <div className={GridStyle.wrapper}>

        <div className={GridStyle.titleWrapper}>
          <div className={GridStyle.title}>{title}</div>
        </div>

        <div className={GridStyle.content}>
          {isLoading
            ? <div className={GridStyle.spinWrapper}><Spin className={GridStyle.spin} size={'large'} /></div>
            : <Row className={GridStyle.row} gutter={[0, 0]}
              justify={'center'}>

              {content.map(video => (
                <Col xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} className={GridStyle.colBox} key={video.link}>
                  <div className={GridStyle.col}>
                    <Card video={video} profiles={profiles} />
                  </div>
                </Col>
              ))}

            </Row>
          }
        </div>

      </div>}
    </>
  )
}

export default Grid
