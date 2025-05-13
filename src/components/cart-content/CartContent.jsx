import CartEmptyContent from "../cart-empty-content/CartEmptyContent"
import CartFullContent from "../cart-full-content/CartFullContent"

const CartContent = () => {

    return (
        <>
        <h2 class="titleL">Your Cart (0)</h2>

        {/* poner un binario, si cart está empty se muestra este componente */}
        <CartEmptyContent />
        <CartFullContent />
        
    </>
    )
}

export default CartContent