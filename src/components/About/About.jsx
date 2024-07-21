import { SectionAbout } from "./AboutStyle"
import ButtonMain from "../ButtonMain"
import IconChecked from "../IconChecked"
import Paragraph from "../Paragraph"
import Subtitle from "../Subtitle"
import TitleSecond from "../TitleSecond"
import { GroupCheck } from "../GroupCheckStyle"
import { ContentLeftAbout } from "./AboutStyle"
import Separtor from "../Separator"
import { ImgAbout } from "./ImgAbout"

export default function About() {
  return (
    <SectionAbout>
      
      <ContentLeftAbout >
        <TitleSecond textTitle="BENEFÍCIOS" />
        <Subtitle textSubtitle="Explorando o mundo dos investimentos" />
        <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et masa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur." />
        <GroupCheck >
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Autenticação de dois fatores" />
          </div>
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Cashback e descontos em compras" />
          </div>
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Benefícios Exclusivos e Programas de Fidelidade" />
          </div>
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Segurança Adicional (autenticação biométrica e monitoramento de fraudes)" />
          </div>
        </GroupCheck>
        <ButtonMain textButtonMain="SABER MAIS"/>
      </ContentLeftAbout>
      <ImgAbout src="/img-about.png" alt="Banner de tabela de investimentos" />
    </SectionAbout>

  )
}