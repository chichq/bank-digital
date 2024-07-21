import ButtonMain from "../ButtonMain"
import Paragraph from "../Paragraph"
import Separtor from "../Separator"
import Subtitle from "../Subtitle"
import { ContainerLeft } from "../Testimonials/ContainerLeftStyle"
import TitleSecond from "../TitleSecond"
import { ContainerFaq } from "./FaqStyle"

import { ContainerRightFaq } from "./ContainerRightFaqStyle"
import CardQuestion from "./CardQuestion"
import { useState } from "react"



export default function Faq() {

  return (


    // <div style={{display:"flex", flexDirection:"column", padding: "5rem 10rem", backgroundColor:"#0E0A24"}}>

    //   {<Separtor/>}
    <ContainerFaq>
      <ContainerLeft>
        <TitleSecond textTitle="SUPORTE" />
        <Subtitle textSubtitle="Perguntas frequentes" />
        <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi" />
        <ButtonMain textButtonMain="CONTATO" />
      </ContainerLeft>
      <ContainerRightFaq>
        <CardQuestion 
          titleQuestion="Como faço para abrir minha conta?"/>
        <Separtor/>
        <CardQuestion titleQuestion="Como fazer transferencia online?"/>
        <Separtor/> 
        <CardQuestion titleQuestion="Meu dinheiro está seguro?"/>
        <Separtor/> 
        <CardQuestion titleQuestion="Como faço para mudar minha senha?"/>
      </ContainerRightFaq>
    </ContainerFaq>
    // </div>
  )
}