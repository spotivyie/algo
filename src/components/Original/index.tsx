import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import jack from '../../assets/jacke.jpg'
import algo from '../../assets/algo.webp'
import * as S from './styles'

const Original = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  }

  return (
    <S.OriginalBar>
        <h1>Bebidas</h1>
      <Carousel responsive={responsive}>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
        <div>
          <img src={jack} alt="" />
        </div>
      </Carousel>
      <S.Imagem>
        <img src={algo} alt="" />
      </S.Imagem>
    </S.OriginalBar>
  )
}

export default Original
