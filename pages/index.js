import Link from "next/link";
import { motion } from "framer-motion"
import products from "./products/products"

const easing = [0.6, -0.05, 0.01, 0.99]

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6
    }
  },
  exit: {opacity: 0},
} 

const cardVariants = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const imageVariants= {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .7,
      duration: .7
    }
  }
}

const Index = () => (
  <motion.div 
  variants={parentVariants}
    initial="initial"
    animate="animate"
    exit="exit">
    <div className='container center'>
      <div className='product-row'>
        {products.map(product => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}>
            <motion.div className='card' variants={cardVariants}>
              <motion.img variants={imageVariants} key={product.image} src={product.image} width={250} />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
);


export default Index;
