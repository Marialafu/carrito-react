import styles from './cardButton.module.css'

const CardButton = ({}) => {
    let productAdded = false

    const generalButtonClass = `${styles.button} ${styles.cardButton}`
    const addEliminateButtonClass = `${generalButtonClass} ${styles.buttonSelected} ${styles.addEliminateToCartButton}`

    return (
    <>
    {!productAdded &&
    <button className={`${generalButtonClass} ${styles.addToCartButton}`}>
        
    <img src="/assets/images/icon-add-to-cart.svg" alt="" />
    <span className={styles.pointerEvents}>Add to Cart</span>

    </button>}


    {productAdded &&
    
    <button className={addEliminateButtonClass}>

    <img src="/assets/images/icon-decrement-quantity.svg" alt="" className={styles.circle} />
    <span>1</span>
    <img src="/assets/images/icon-increment-quantity.svg" alt="" className={styles.circle} />

    </button>}
    </>
    )

}

export default CardButton