import Category from '../../components/Category'
import Drinks from '../../components/Drinks'
import Original from '../../components/Original'
import Vendidos from '../../components/Vendidos'

// import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  // const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  // const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Category />
      <Drinks />
      <Original />
      <Vendidos />
    </>
  )
}

export default Home
