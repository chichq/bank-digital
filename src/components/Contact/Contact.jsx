import ButtonMain from "../ButtonMain"
import Paragraph from "../Paragraph"
import Separtor from "../Separator"
import Subtitle from "../Subtitle"
import { SectionContact } from "./ContactStyle"
import { ContainerContant } from "./ConteinerContactStyle"
import { Banner } from "./ConteinerContactStyle"
import { Form } from "./ConteinerContactStyle"
import { InputForm } from "./ConteinerContactStyle"
import { ContentForm } from "./ConteinerContactStyle"

export default function Contact() {
  
const handleSubmit = (ev) => {
  ev.preventDefault()
}


  return (
    <SectionContact>
      <ContainerContant>
        <Banner>
        </Banner>
        <Form>
          <ContentForm>
            <Subtitle textSubtitle="Entre em contato conosco" />
            <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi" />
            <div>
              <img src="/icon-email.png" alt="" />
              <Paragraph TextParagraph="smarbanksup@gmail.com" />
            </div>
            <div>
              <img style={{ backgroundColor: "#6b4ad5" }} src="/icon-tel.png" alt="" />
              <Paragraph TextParagraph="(17) 9999-99999" />
            </div>
            <div>
              <img style={{ backgroundColor: "#f75145" }} src="/icon-loc.png" alt="" />
              <Paragraph TextParagraph="R. Humberto Delboni, 1232 " />
            </div>
          </ContentForm>
          <InputForm onClick={handleSubmit}>
              <div>
                <input type="text" name="name" id="name" placeholder="Digite seu nome" />
              </div>
              <div>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <textarea name="mensasge" id="mensasge" rows="10" placeholder="Sua menssagem aqui"></textarea>
              </div>
              <ButtonMain textButtonMain="ENViAR AGORA " />
          </InputForm>
        </Form>
      </ContainerContant>
      <Separtor/>
    </SectionContact>
  )
}