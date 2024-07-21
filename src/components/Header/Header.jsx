
import ButtonMain from "../ButtonMain";
import ButtonSecundary from "../ButtonSecundary";
import { ContainerHeader } from "./HeaderStyle";
import Logo from "../Logo";
import NavBar from "./NavBar";
// import Separtor from "../Separator";
// import IconSideBar from "../SideBar/IconSideBar";


import { useState } from "react"
import IconSideBar from "./IconSideBar"
import SideBar from "./SideBar";




export default function Header() {
  const [sideBar, setSideBar] = useState(false)

  const toggleSideBar = () => setSideBar(!sideBar)


  return (

    <ContainerHeader>
      <Logo />
      <NavBar />
      <div>
        <ButtonSecundary textButtonSecondary="ENTRAR" />
        <ButtonMain textButtonMain="ABRIR CONTA" />
        <SideBar />
      </div>

      <IconSideBar sideBar={sideBar} onClick={() => toggleSideBar()} />
      {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
    </ContainerHeader>

  )
}
