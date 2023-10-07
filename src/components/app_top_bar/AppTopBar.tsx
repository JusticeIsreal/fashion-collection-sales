"use client"
import { ActionIcon, Burger, Drawer, Flex, TextInput } from '@mantine/core'
import style from "../../assets/styles/modules/app_topbar.module.css"
import { RiAccountCircleLine, RiSearchLine, RiShoppingBag3Line } from "react-icons/ri"
import { useState } from 'react'
function AppTopBar() {
  const [drawer,setDrawer] = useState(false)
  return (
    <div className={style.app_topbar}>
      <Drawer onClose={()=> setDrawer(false)} opened={drawer} position='left'>
        <ul>
          <li>Home</li>
          <li></li>
        </ul>
      </Drawer>
        <div className={style["burger_icon"]}>
        <Burger onClick={()=> setDrawer(true)} opened={drawer} />
      </div>
      <a className={style.logo} href="">Sprinter</a>
      <TextInput w={500} size={"md"} icon={<RiSearchLine size={25} />} placeholder='Search' />
      <Flex className={style.icon_container} gap={20}>
        <ActionIcon>
          <RiShoppingBag3Line size={25} />
        </ActionIcon>

        <ActionIcon>
          <RiAccountCircleLine size={25} />
        </ActionIcon>

      </Flex> 

    
    </div>
  )
}

export default AppTopBar
