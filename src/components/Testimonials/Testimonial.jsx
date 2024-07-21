import { ContainerTestimonials } from "./TestimonialsStyle"
import { ContainerLeft } from "./ContainerLeftStyle"
import { ContainerRight } from "./ContainerRightStyle"
import { CommentCard } from "./CommentCardStyle"
import { TextParagraphStyle } from "../ParagraphStyle"
import TitleSecond from "../TitleSecond"
import Subtitle from "../Subtitle"
import Paragraph from "../Paragraph"
import ButtonMain from "../ButtonMain"

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards, Navigation } from 'swiper/modules';
import Separtor from "../Separator"


export default function Testimonials() {

  const commentsCard = [
    { id: "1", img: "/user-01.png", name: "Lucas S. Moura", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque alias rem explicabo numquam eum repellendus labore accusamus eveniet consequatur excepturi eligendi a facilis fugit, similique, debitis dolorum! Quaerat, sunt earum." },
    { id: "2", img: "/user-02.png", name: "Adam K. Silva", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque alias rem explicabo numquam eum repellendus labore accusamus eveniet consequatur excepturi eligendi a facilis fugit, similique, debitis dolorum! Quaerat, sunt earum." },
    { id: "3", img: "/user-03.png", name: "Matheus Rodrigues", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque alias rem explicabo numquam eum repellendus labore accusamus eveniet consequatur excepturi eligendi a facilis fugit, similique, debitis dolorum! Quaerat, sunt earum." },
    { id: "4", img: "/user-01.png", name: "Lucas S. Moura", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque alias rem explicabo numquam eum repellendus labore accusamus eveniet consequatur excepturi eligendi a facilis fugit, similique, debitis dolorum! Quaerat, sunt earum." }
  ]
  return (
    <ContainerTestimonials>
      <ContainerLeft >
        <TitleSecond textTitle="COMENTÁRIOS" />
        <Subtitle textSubtitle="Feedback dos nossos clientes" />
        <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi" />
        <ButtonMain textButtonMain="SABER MAIS" />
      </ContainerLeft>
      <ContainerRight>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          navigation={true}
          modules={[EffectCards, Navigation]}
          className="mySwiper"
        >{commentsCard.map((item) => (
          <SwiperSlide key={item.id}>
            <CommentCard>
              <div>
                <div>
                  <img src={item.img} alt="avatar" />
                  <h4>{item.name}</h4>
                </div>
                <TextParagraphStyle>{item.description}</TextParagraphStyle>
              </div>
              <p></p>
            </CommentCard>
          </SwiperSlide>
        ))}

        </Swiper>
        <Separtor />
      </ContainerRight>

    </ContainerTestimonials>
  )
}