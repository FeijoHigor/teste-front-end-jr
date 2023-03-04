import './App.scss'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import RelatedProducts from './components/RelatedProducts/RelatedProducts'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <RelatedProducts options />
    </div>
  )
}

export default App
