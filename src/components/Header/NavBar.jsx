import BtnLink from "./BtnLink";

export default function NavBar() {
  return(
    <nav>
      <BtnLink textBtnLink= "INICIO"/>
      <BtnLink textBtnLink= "BENEFÍCIOS"/>
      <BtnLink textBtnLink= "EMPRÉSTIMO"/>
      <BtnLink textBtnLink= "SUPORTE"/>
      <BtnLink textBtnLink= "CONTATO"/>
    </nav>
  )
}