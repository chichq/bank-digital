
import Separtor from "../Separator";
import Subtitle from "../Subtitle";
import TitleSecond from "../TitleSecond";

import { useEffect, useState } from "react";


import { ContainerLoan } from "./LoanStyle"
import { ContainerCardLoan } from "./CardLaonStyle"
import { TextParagraphStyle } from "../ParagraphStyle"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';

export default function Loan() {
  const [slidePerView, setSlidePerView] = useState(3)

  useEffect(() => {

function handleResize() {
  window.innerWidth < 850 
  ? setSlidePerView(1) 
  : window.innerWidth < 1250 
  ? setSlidePerView(2) 
  : setSlidePerView(3)
}
  handleResize()

  window.addEventListener("resize", handleResize)

  return() => {
    window.removeEventListener("resize", handleResize)
  }

  },[])

  const data = [
    { id: '1', icon: "/icon-documento.png", subtitle: "Empréstimo Parcelado", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." },
    { id: '2', icon: "/icon-renda.png", subtitle: "Empréstimo Consignado", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." },
    { id: '3', icon: "/icon-conversa.png", subtitle: "Emprestimo Pessoal", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." },
    { id: '4', icon: "/icon-documento.png", subtitle: "Empréstimo Parcelado", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." },
    { id: '5', icon: "/icon-renda.png", subtitle: "Empréstimo Consignado", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." },
    { id: '6', icon: "/icon-conversa.png", subtitle: "Emprestimo Pessoal", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente numquam corporis in aspernatur." }
  ]
  return (
    <ContainerLoan>
      <Separtor />
      <TitleSecond textTitle="TIPOS DE EMPRÉSTIMO" />
      <Subtitle textSubtitle="Explore nossa variedade de empréstimos pessoais" />

      <div>
        <Swiper
          slidesPerView={slidePerView}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ContainerCardLoan>
                <img src={item.icon} alt="icon" />
                <h4>{item.subtitle}</h4>
                <TextParagraphStyle>{item.description}</TextParagraphStyle>
              </ContainerCardLoan>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContainerLoan>
  )
}