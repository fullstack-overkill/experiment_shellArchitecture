import { Router } from './router';
import type { TRouter } from './types';

export default (): Router => {
    const router = new Router();

    if (window) {
      const GLOBAL_WINDOW = window as TRouter;

      GLOBAL_WINDOW.router = router;
    }

    return router;
  };