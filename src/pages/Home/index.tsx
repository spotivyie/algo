import Category from '../../components/Category'
import Drinks from '../../components/Drinks'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Online from '../../components/Online'
import Original from '../../components/Original'
import Vendidos from '../../components/Vendidos'

// import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  // const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  // const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Header />
      <Category />
        <Drinks />
        <Original />
        <Vendidos />
        <Online />
      <Footer />
    </>
  )
}

export default Home
