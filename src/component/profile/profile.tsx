import IProfile from '@/interfaces/profile.interface'
import { } from 'react'

const Profile = ({ talent }: { talent: IProfile }) => {
  return (
    <div>
      {talent.marshmallow}
    </div>
  )
}

export default Profile
