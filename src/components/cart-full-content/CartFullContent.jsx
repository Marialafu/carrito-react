const CartFullContent = () => {

    return (
    <section class="fullCartContainer">
            <div className="cartProductContainer">
              <div className="textFullCartContainer">
                <div className="titleS">Nombre product</div>

                <div className="subtitleFullCartContainer">
                  <span className="subtitle featuredText">Cantidad producto</span>
                  <span className="categoryText">Precio por ud</span>
                  <span className="subtitle">Precio total</span>
                </div>

                <div className="circle brownCircle eliminateButtonFullCartContainer"></div>
              </div>

            </div>
            <div class="totalOrderContainer">
              <span class="categoryText darkText">Order Total</span>
              <span class="titleM">Total Ordered Price</span>
            </div>
            <div class="carbonLabelContainer">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
              <span class="categoryText darkText">This is a <span class="subtitle">carbon-neutral</span> delivery</span>
            </div>
            <button class="button buttonSelected confirmOrderButtonContainer">Confirm Order</button>
          </section>)

}

export default CartFullContent