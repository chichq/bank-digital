import ButtonMain from "../ButtonMain"
import ButtonSecundary from "../ButtonSecundary"
import Footer from "../Footer/Footer"
import { ContentSideBar } from "./ContainerSideBarStyle"
import IconSideBar from "./IconSideBar"
import NavBar from "./NavBar"

export  default function SideBar( { sideBar, setSideBar } ) {

  const closeSideBar = () => {
    setSideBar(false)
  }

  return(
    <ContentSideBar sidebar={sideBar}>
      {sideBar &&
      <>
      <NavBar/>
      <ButtonSecundary textButtonSecondary="ENTRAR"/>
      <ButtonMain textButtonMain="ABRIR CONTA"/>
      <Footer/>
      </> 
      }
      
    </ContentSideBar>
  )
}