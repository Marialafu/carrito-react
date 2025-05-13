import styles from './cardImg.module.css'

const CardImg = ({imgDesktop, imgTablet, imgMobile}) => {

    return (
    <picture>

    <source media="(min-width: 1400px)" srcset={imgDesktop} />
    <source media="(min-width: 768px)" srcset={imgTablet}  />
    <source media="(min-width: 360px)" srcset={imgMobile}  />

    <img src={imgMobile}  alt="" className={styles.dessertPicture}/>

    </picture>
    )

}

export default CardImg