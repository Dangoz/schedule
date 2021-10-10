import Link from 'next/link'
import IStreamVideo from '@/interfaces/stream-video.interface'
import IProfile from '@/interfaces/profile.interface'
import CardStyle from '@/styles/schedule/card.module.css'
import { useState, useEffect } from 'react'
import { findProfileByVideo, sortTalentsByGeneration } from '@/functions/sort'
import { Statistic, Divider } from 'antd'
import { PlayCircleTwoTone, ClockCircleOutlined, FieldTimeOutlined, ClockCircleTwoTone, YoutubeOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
dayjs.extend(relativeTime)
dayjs.extend(calendar)

const { Countdown } = Statistic;
const countdownLimit: number = 12;

const Card = ({ video, profiles }: { video: IStreamVideo, profiles: IProfile[] }) => {
  const [timestamp] = useState(dayjs(video.availableAt));
  const [talent, setTalent] = useState(null);

  const [live, setLive] = useState(video.status);
  const [counting, setCounting] = useState(+timestamp <= +dayjs().add(countdownLimit, 'h'));

  const timerChecker = async () => {
    const i = setInterval(() => {
      if (live === 'live') return clearInterval(i);
      setCounting(+timestamp <= +dayjs().add(countdownLimit, 'h'));
      if (+dayjs() >= +timestamp) setLive('live');
    }, 1000)
  }

  useEffect(() => {
    timerChecker();

    // find video's corresponding profile, attach href to profile using sortTalentsByGeneration
    const profile = findProfileByVideo(profiles, video);
    console.log('VIDEO:', video, 'PROFILE: ', profile)
    setTalent(sortTalentsByGeneration([profile], [profile.name], profile.suborg)[0]);
  }, [])

  return (
    <>
      {talent &&

        <div className={CardStyle.card}>

          <div className={CardStyle.top}>
            <div className={CardStyle.timerIcon}>
              {live === 'live'
                ? <PlayCircleTwoTone className={CardStyle.icon + ' ' + CardStyle.liveIcon} twoToneColor={'red'} />
                : counting
                  ? <ClockCircleTwoTone className={CardStyle.icon} />
                  : <ClockCircleOutlined className={CardStyle.icon} />}
            </div>
            <div className={CardStyle.timer}>
              {live === 'live'
                ? <div className={CardStyle.liveTimer}>LIVE NOW</div>
                : counting
                  ? <Countdown value={+timestamp} format={"HH [H] mm [M] ss [S]"} className={CardStyle.countdown} valueStyle={{ fontSize: 20, color: '#1890ff', fontFamily: 'sans-serif' }} />
                  : <div className={CardStyle.defaultTimer}>{timestamp.format('YYYY/MM/DD h:mm A')}</div>}
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

          <div className={CardStyle.bottom}>
            <Link href={`/v/${talent.href}`}>
              <img className={CardStyle.photo} src={`${talent.photo}`} />
            </Link>

            {/* <Divider type={'vertical'} plain={true}><Link href={`/v/${talent.href}`}>
              <div className={CardStyle.name}>{talent.name}</div>
            </Link></Divider> */}
          </div>

          <Divider plain={true}><Link href={`/v/${talent.href}`}>
            <div className={CardStyle.name}>{talent.name}</div>
          </Link></Divider>
          {/* <Divider /> */}


        </div>
      }
    </>
  )
}

export default Card