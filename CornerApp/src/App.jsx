// import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Header storeName="Component Corner" />
      <Hero
        title="Welcome to Component Corner"
        subtitle="Find the best components for your next project."
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics"
      />
      <main>
        
        <ProductCard 
          name="Item 1"
          image="https://placehold.co/100x100/FF6B6B/ffffff?text=Item_1"
          price={10.00}
          info="This it Item 1"
        />
        <ProductCard 
          name="Item 2"
          image="https://placehold.co/100x100/FF6B6B/ffffff?text=Item_2"
          price={20.00}
          info="This it Item 2"
        />
        <ProductCard 
          name="Item 3"
          image="https://placehold.co/100x100/FF6B6B/ffffff?text=Item_3"
          price={30.00}
          info="This it Item 3"
        />
       
        </main>

      <Footer
        storeName="Component Corner"
        address="123 Main Street, Pittsburgh, PA"
        email="info@componentcorner.com"
        phone="(123) 456-7890"
      />
    </div>
  )
}

export default App
