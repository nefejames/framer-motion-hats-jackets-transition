import { motion } from "framer-motion"
import products from "./products"; 

const Product = ({ product }) => (
  <motion.div exit={{opacity: 0}}>
    <div className='fullscreen'>
      <div className='product'>
        <div className='img'>
          <motion.img
            initial={{x: -50, opacity: 0}} 
            animate={{x: 0, opacity: 1, transition: {delay: .6}}} 
            key={product.image} 
            src={product.image} />
        </div>
        <div className='product-details'>
          <div className='inner'>
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <div className='qty-price'>
              <span className='price'>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

Product.getInitialProps = ({ query }) => {
  let product = products.find(product => product.id == query.id);

  return {
    product
  };
};

export default Product;
