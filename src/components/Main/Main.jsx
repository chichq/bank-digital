import { ContainerMain  } from "./MainStyle"
import { ContentMain  } from "./ContentMainStyle"
import { ContentMainLeft } from "./ContentMainLeftStyle"
import ImageMain from "./ImageMain"
import { ContentMainRight } from "./ContentMainRightStyle"
import  {ImgSecundaryOne}  from "./ImgSecundaryOneStyle"
import  {ImgSecundaryTwo}  from "./ImgSecundaryTwoStyle"
import { GroupCheck } from "../GroupCheckStyle"
import IconChecked from "../IconChecked"
import Paragraph from "../Paragraph"
import ButtonMain from "../ButtonMain"
export function Main() {
  return(
    <ContainerMain>
      <ContentMain>
        <ContentMainLeft>
        <h1>Transforme sua experiência financeira com nosso banco digital</h1>
        <GroupCheck>
          <div><IconChecked/> <Paragraph TextParagraph= "Transferências rápidas e seguras"/></div>
          <div><IconChecked/> <Paragraph TextParagraph= "Sem taxas absurdas"/></div>
          <div><IconChecked/> <Paragraph TextParagraph= "100% pensando em você"/></div>
        </GroupCheck>
        <ButtonMain textButtonMain="ABRIR UMA CONTA "/>
        </ContentMainLeft>
        <ContentMainRight>
          <ImgSecundaryOne src="/banner-shape-1.png" alt="Banner imagem secundaria" />
          <ImageMain/>
          <ImgSecundaryTwo src="/banner-shape-2.png" alt="Banner imagem secundaria" />
        </ContentMainRight>
      </ContentMain>
    </ContainerMain>
  )
}