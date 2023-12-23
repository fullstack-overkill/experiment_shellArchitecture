import { Router } from '../router';

export type TRouter = Window & typeof globalThis & { router: Router };