import { Router } from '../config/deps.ts'
import {
  createProduct,
  deleteProduct,
  findProduct,
  updateProduct,
  findAllProducts,
} from '../controllers/products.controller.ts';

const router = new Router().prefix('/products')

router.get('/', findAllProducts)
router.get('/:id', findProduct)
router.delete('/:productId', deleteProduct)
router.patch('/', updateProduct)
router.post('/', createProduct);


export default router.routes();