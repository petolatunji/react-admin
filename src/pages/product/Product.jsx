import SingleProduct from '../../components/singleProduct/SingleProduct'
import { singleProduct } from '../../data'

const Product = () => {
  return (
    <div>
      <SingleProduct {...singleProduct} />
    </div>
  )
}

export default Product
