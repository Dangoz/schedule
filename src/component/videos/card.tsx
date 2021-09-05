import { useState } from 'react'
import { Divider } from 'antd'
import { ClockCircleOutlined, YoutubeOutlined } from '@ant-design/icons'
import ICompleteVideo from '@/interfaces/complete-video.interface'
import IProfile from '@/interfaces/profile.interface'
import CardStyle from '@/styles/videos/card.module.css'
import dayjs from 'dayjs'

const Card = ({ video, talent }: { video: ICompleteVideo, talent: IProfile }) => {
  const [timestamp] = useState(dayjs(video.availableAt));

  return (<>
    <div className={CardStyle.card}>

      <div className={CardStyle.top}>
        <div className={CardStyle.timerIcon}>
          {<ClockCircleOutlined className={CardStyle.icon} />}
        </div>
        <div className={CardStyle.timer}>
          {<div className={CardStyle.defaultTimer}>{timestamp.format('YYYY/MM/DD h:mm A')}</div>}
        </div>
      </div>

      <a href={`${video.link}`} target={'_blank'}>
        <div className={CardStyle.content}>
          <div className={CardStyle.hovering}>
            <div className={CardStyle.mask} style={{}} />
            <div className={CardStyle.youtubeIconWrapper} style={{}}><YoutubeOutlined className={CardStyle.youtubeIcon} /></div>
          </div>
          <img src={video.thumbnail} className={CardStyle.thumbnail} />
        </div>
      </a>

      <a href={`${video.link}`} target={'_blank'}>
        <div className={CardStyle.title}>{video.title}</div>
      </a>

      <Divider plain={true} type={'horizontal'}>
        <div className={CardStyle.name}>{talent.name}</div>
      </Divider>

      {/* {video.duration} */}
    </div>
  </>)
}

export default Card
