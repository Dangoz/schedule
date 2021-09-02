import IProfile from '@/interfaces/profile.interface'
import { } from 'react'
import { Row, Col } from 'antd'
import { YoutubeFilled, TwitterOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ProfileStyle from '@/styles/profile/profile.module.css'

const Profile = ({ talent }: { talent: IProfile }) => {
  return (
    <div className={ProfileStyle.wrapper}>

      {talent.lore} <br />
      {talent.videoCount}  <br />
      {talent.subscriberCount} <br />
      {talent.viewCount} <br />

      {talent.youtube} <br />
      {talent.twitter} <br />
      {talent.marshmallow} <br />
    </div>
  )
}

export default Profile
