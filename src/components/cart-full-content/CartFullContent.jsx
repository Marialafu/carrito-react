const CartFullContent = () => {
  return (
    <section className='fullCartContainer'>
      <div className='cartProductContainer'>
        <div className='textFullCartContainer'>
          <div className='titleS'>Nombre product</div>

          <div className='subtitleFullCartContainer'>
            <span className='subtitle featuredText'>Cantidad producto</span>
            <span className='categoryText'>Precio por ud</span>
            <span className='subtitle'>Precio total</span>
          </div>

          <div className='circle brownCircle eliminateButtonFullCartContainer'></div>
        </div>
      </div>
      <div className='totalOrderContainer'>
        <span className='categoryText darkText'>Order Total</span>
        <span className='titleM'>Total Ordered Price</span>
      </div>
      <div className='carbonLabelContainer'>
        <img src='/assets/images/icon-carbon-neutral.svg' alt='' />
        <span className='categoryText darkText'>
          This is a <span className='subtitle'>carbon-neutral</span> delivery
        </span>
      </div>
      <button className='button buttonSelected confirmOrderButtonContainer'>
        Confirm Order
      </button>
    </section>
  );
};

export default CartFullContent;
