import { useState } from "react"
import Paragraph from "../Paragraph"
import { CardDescription } from "./CArdQuestionStyle"


const CardQuestion = ({ titleQuestion }) => {

  const [descriptionActive, setDescriptionActive] = useState(false)

  const handleToggle = () => {
    if(descriptionActive) {
      return setDescriptionActive(false)
    }
    setDescriptionActive(true)
  } 

  return (

    <CardDescription isVisible={descriptionActive}>
      <div onClick={() => handleToggle()}>
        <h3>{titleQuestion}</h3>
        <button
          
        >
          <img src="/seta.png" alt="icone seta" />
        </button>
      </div>
      <div>
        <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue." />
      </div>


    </CardDescription>

  )
}

export default CardQuestion