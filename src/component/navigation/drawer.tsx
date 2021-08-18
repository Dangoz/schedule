import { useState } from "react"
import { Drawer, Menu, Button } from 'antd'
import DrawerStyle from '@/styles/navigation/drawer.module.css'
import { MenuFoldOutlined } from '@ant-design/icons'

const DrawerMenu = ({ visible, setVisible }: {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const onClose = () => {
    setVisible(false);
  }

  return (
    <>
      <Drawer className={DrawerStyle.drawer} visible={visible}
        onClose={onClose} closable={false} width={220} placement={'left'}
        bodyStyle={{ padding: 0 }}
      >

        <div className={DrawerStyle.wrapper}>

        </div>
      </Drawer>
    </>
  )
}

export default DrawerMenu