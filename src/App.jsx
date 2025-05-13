import CartContent from "./components/cart-content/CartContent";
import CartProducts from "./components/cart-products/CartProducts";
import Filters from "./components/filters/Filters";
import { PRODUCTS } from "./constants/products";

const App = () => {
  return (
    <>
    <header className='headerContainer'>
      <h1>Desserts</h1>
    </header>

    <main>

      <Filters />

      <section class="cardsCartContainer">

        <section class="dessertsGrid" >
          {PRODUCTS.map(product => (
            <CartProducts key={product.id} product={product} />
          ))}
        </section>

        <section class="cartContainer">
          <CartContent />
        </section>
      </section>
    </main>
    </>
  );
};

export default App;
