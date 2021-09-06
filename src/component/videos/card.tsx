import { useState } from 'react'
import { Divider } from 'antd'
import { ClockCircleOutlined, YoutubeOutlined, PlaySquareFilled } from '@ant-design/icons'
import ICompleteVideo from '@/interfaces/complete-video.interface'
import IProfile from '@/interfaces/profile.interface'
import CardStyle from '@/styles/videos/card.module.css'
import dayjs from 'dayjs'
import { parseDuration } from './helpers'

const Card = ({ video, talent }: { video: ICompleteVideo, talent: IProfile }) => {
  const [timestamp] = useState(dayjs(video.availableAt));

  return (<>
    <div className={CardStyle.card}>

      <a href={`${video.link}`} target={'_blank'}>
        <div className={CardStyle.content}>
          <div className={CardStyle.durationWrapper}><div className={CardStyle.duration}>{parseDuration(video.duration)}</div></div>
          <div className={CardStyle.hovering}>
            <div className={CardStyle.mask} />
            <div className={CardStyle.youtubeIconWrapper} ><YoutubeOutlined className={CardStyle.youtubeIcon} /></div>
          </div>
          <img src={video.thumbnail} className={CardStyle.thumbnail} />
        </div>
      </a>

      <a href={`${video.link}`} target={'_blank'}>
        <div className={CardStyle.title}>{video.title}</div>
      </a>

      {/* <Divider plain={true} type={'horizontal'}>
        <div className={CardStyle.name}>{talent.name}</div>
      </Divider> */}

      <div className={CardStyle.bottom}>
        
        <div className={CardStyle.viewWrapper}>
          {<PlaySquareFilled className={CardStyle.icon} />}
          <div className={CardStyle.view}>{video.liveViewCount}</div>
        </div>

        <div className={CardStyle.dateWrapper}>
          {<ClockCircleOutlined className={CardStyle.icon} />}
          <div className={CardStyle.date}>{timestamp.format('YYYY/MM/DD')}</div>
        </div>
      </div>

    </div>
  </>)
}

export default Card
