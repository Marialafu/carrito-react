import CardButton from "../card-button/CardButton"
import CardImg from "../card-img/CardImg"

const CartProducts = ({product}) => {

    return (
    <article className="dessertCard">
              <div className="topCard">
                <CardImg {...product} />
                <CardButton
                // pasar cantidad de producto suma y resta
                 />
              </div>

              <div className="bottomCard">
                <p className="text featuredText">
                  ${product.price}
                </p>
                <p className="text">{product.title}</p>
                <p className="categoryText">{product.name}</p>
              </div>

    </article>
    )

}
export default CartProducts