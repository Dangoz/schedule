import GridStyle from '@/styles/schedule/grid.module.css'
import { Row, Col, Spin } from 'antd'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import IStreamVideo from '@/interfaces/stream-video.interface';
import Card from './card'

const Grid = ({ criteria, videos, isToday, isAfterwards }:
  { criteria: dayjs.Dayjs, videos: IStreamVideo[], isToday: boolean, isAfterwards: boolean }) => {
    
  const [span] = useState({ xs: 12, sm: 8, md: 6, lg: 4 });
  const [title, setTitle] = useState('MM/DD');
  const [content, setContent] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const filterVideos = async (): Promise<IStreamVideo[]> => {
    // const result = videos.filter(video => {
    //   if (isToday) { return (dayjs(video.availableAt).date() <= criteria.date()) }
    //   else if (isAfterwards) { return (dayjs(video.availableAt).date() >= criteria.date()) }
    //   else { return (dayjs(video.availableAt).date() === criteria.date()) };
    // })
    // console.log('filtered!', JSON.stringify(result, null, 2));
    // return result;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = videos.filter(video => {
          if (isToday) { return (dayjs(video.availableAt).date() <= criteria.date()) }
          else if (isAfterwards) { return (dayjs(video.availableAt).date() >= criteria.date()) }
          else { return (dayjs(video.availableAt).date() === criteria.date()) };
        })
        console.log('filtered!', JSON.stringify(result, null, 2));
        resolve(result);
      }, 500)
    })
  }

  useEffect(() => {

    filterVideos().then(videos => {
      setContent(videos);
      setTitle(criteria.format('MM/DD'))
      setIsloading(false);
    })
  }, []);

  useEffect(() => {
    console.log('content!!!', content);
  }, [content])

  return (
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

              {content.map(video => {
                <Col xs={span.xs} sm={span.sm} md={span.md} lg={span.lg} className={GridStyle.colBox}>
                  <div className={GridStyle.col}>
                    <Card video={video} />
                  </div>
                </Col>
              })}

            </Row>
          }
        </div>

      </div>}
    </>
  )
}

export default Grid
