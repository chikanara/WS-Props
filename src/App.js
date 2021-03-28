
import './App.css';
import ProductList from './components/producrList/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer.js/Footer';
const products = [
  {
    imgSrc: "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
    name: 'AirPods',
    price: `6,99 $`,
  },
  {
    imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
    name: 'Smart watch',
    price: `8,64 $`,
  },
  {
    imgSrc: "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
    name: 'Iphone 11 ',
    price: `150 $`,
  },
];
function App() {
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Shopping Cart</h1>
       <ProductList produits={products}/>
       <Footer >
         © Copyright 2021 best group ever
         <i className="fab fa-facebook"></i>Facebook
       </Footer>

    </div>
  );
}

export default App;
