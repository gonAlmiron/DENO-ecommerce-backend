import { Router } from '../../deps.ts';
import ProductRouter from './products.router.ts';

const router = new Router().prefix('/api')

router.use(ProductRouter);

export default router.routes();