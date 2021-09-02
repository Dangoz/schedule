import IProfile from '@/interfaces/profile.interface'
import { } from 'react'
import { Row, Col } from 'antd'
import { YoutubeFilled, TwitterOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ProfileStyle from '@/styles/profile/profile.module.css'

const Profile = ({ talent }: { talent: IProfile }) => {
  return (
    <div className={ProfileStyle.wrapper}>

      <div className={ProfileStyle.description}>
        {talent.lore} <br />
      </div>

      <div className={ProfileStyle.stats}>
        {talent.subscriberCount} <br />
        {talent.viewCount} <br />
        {talent.videoCount}  <br />
      </div>

      <div className={ProfileStyle.links}>
        <Link href={talent.youtube} passHref={true}>youtube</Link> <br />
        <a href={talent.youtube} target={'_blank'}>lala</a>
        {talent.twitter} <br />
        {talent.marshmallow} <br />
      </div>
    </div>
  )
}

export default Profile
