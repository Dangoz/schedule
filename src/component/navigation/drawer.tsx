import Link from 'next/link'
import { Drawer, Menu, Button } from 'antd'
import DrawerStyle from '@/styles/navigation/drawer.module.css'
import { ScheduleOutlined, HomeOutlined } from '@ant-design/icons'

const DrawerMenu = ({ visible, setVisible }: {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { SubMenu } = Menu;

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

            <Menu.Item key='1' icon={<ScheduleOutlined />} className={DrawerStyle.item}>
              <div className={DrawerStyle.text}>Schedule</div>
            </Menu.Item>

            <Menu.Divider />

            <SubMenu key='sub1' title='Generation 1' className={DrawerStyle.subMenu} >
              <Menu.Item key='2' className={DrawerStyle.item}><div className={DrawerStyle.text}>Pipkin Pippa</div></Menu.Item>
              <Menu.Item key='3' className={DrawerStyle.item}><div className={DrawerStyle.text}>nasa</div></Menu.Item>
              <Menu.Item key='4' className={DrawerStyle.item}><div className={DrawerStyle.text}>pipi</div></Menu.Item>
              <Menu.Item key='5' className={DrawerStyle.item}><div className={DrawerStyle.text}>nasa</div></Menu.Item>
              <Menu.Item key='6' className={DrawerStyle.item}><div className={DrawerStyle.text}>pipi</div></Menu.Item>
              <Menu.Item key='7' className={DrawerStyle.item}><div className={DrawerStyle.text}>nasa</div></Menu.Item>
              <Menu.Item key='8' className={DrawerStyle.item}><Link href='/pi'><div className={DrawerStyle.text}>pipi</div></Link></Menu.Item>
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