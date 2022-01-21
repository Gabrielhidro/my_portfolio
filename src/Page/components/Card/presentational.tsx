import { Container } from "./styles"

interface CardPropsInterface {
  cardTitle: string
}

function CardPresentational(props: CardPropsInterface){
  const { cardTitle } = props

    return (
        <Container>
          <h1>{cardTitle}</h1>
        </Container>
    )
} 

export default CardPresentational