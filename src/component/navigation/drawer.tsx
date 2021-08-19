import Link from 'next/link'
import { useState } from 'react'
import { Drawer, Menu, Button } from 'antd'
import DrawerStyle from '@/styles/navigation/drawer.module.css'
import { ScheduleOutlined, HomeOutlined } from '@ant-design/icons'
import IProfile from '@/interfaces/profile.interface'
import { g1order } from '@/constant/drawerOrder'
import { sortTalentsByGeneration } from '@/util/sort'

const DrawerMenu = ({ visible, setVisible, profiles }: {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  profiles: IProfile[]
}) => {
  const { SubMenu } = Menu;
  const [g1talents] = useState(sortTalentsByGeneration(profiles, g1order, 'generation 1'));

  const onClose = () => {
    setVisible(false);
  }

  const itemSelect = async () => {
    // setVisible(false);
  }

  return (
    <>
      <Drawer className={DrawerStyle.drawer} visible={visible}
        onClose={onClose} closable={false} width={230} placement={'left'}
        bodyStyle={{ padding: 0, backgroundColor: '#001529' }}
      >
        <div className={DrawerStyle.wrapper}>
          <Menu className={DrawerStyle.menuWrapper} defaultOpenKeys={['sub1']}
            style={{ width: 230 }} mode={'inline'}
            theme={'dark'} onSelect={itemSelect}>

            <Menu.Item key='0' icon={<ScheduleOutlined />} className={DrawerStyle.item}>
              <Link href='/'><div className={DrawerStyle.text}>Schedule</div></Link>
            </Menu.Item>

            <Menu.Divider />

            <SubMenu key='sub1' title='Generation 1' className={DrawerStyle.subMenu} >
              {/* <Menu.Item key='dwadaw' className={DrawerStyle.item}><div className={DrawerStyle.text}>ashelia</div></Menu.Item>
              <Menu.Item key='3' className={DrawerStyle.item}><div className={DrawerStyle.text}>nasa</div></Menu.Item>
              <Menu.Item key='4' className={DrawerStyle.item}><div className={DrawerStyle.text}>michiru</div></Menu.Item>
              <Menu.Item key='5' className={DrawerStyle.item}><div className={DrawerStyle.text}>tenma</div></Menu.Item>
              <Menu.Item key='6' className={DrawerStyle.item}><div className={DrawerStyle.text}>pipi</div></Menu.Item>
              <Menu.Item key='7' className={DrawerStyle.item}><div className={DrawerStyle.text}>uruka</div></Menu.Item>
              <Menu.Item key='8' className={DrawerStyle.item}><Link href='/v/pipi'><div className={DrawerStyle.text}>iori</div></Link></Menu.Item> */}
              {
                g1talents.map(talent => (
                  <Menu.Item key={`${talent.name}`} className={DrawerStyle.item}
                    icon={<div className={DrawerStyle.photo}><img className={DrawerStyle.photoImg} src={`${talent.photo}`}/></div>}>

                    <Link href={`/v/${talent.href}`}><div className={DrawerStyle.text}>{`${talent.name}`}</div></Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>

            <Menu.Divider />

            <Menu.Item key='99' icon={<HomeOutlined />} className={DrawerStyle.item}>
              <Link href='https://phase-connect.com'><div className={DrawerStyle.text}>Home Site</div></Link>
            </Menu.Item>
          </Menu>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerMenu