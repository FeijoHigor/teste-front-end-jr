import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import RelatedProducts from './components/RelatedProducts/RelatedProducts'
import DoubbleCard from './components/Cards/DoubbleCard'
import Brands from './components/Brands/Brands'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <RelatedProducts options />
      <DoubbleCard cardData={[{cardType: 'big', title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur', btnText: 'Confira'}]} />
      <RelatedProducts />
      <DoubbleCard cardData={[{cardType: 'medium', title: 'Produtos', description: 'Lorem ipsum dolor sit amet, consectetur', btnText: 'Confira'}]} />
      <Brands />
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default App
