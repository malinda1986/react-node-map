import { Router } from 'express';
import { useExpressServer } from 'routing-controllers';
import { LocationController } from '../controllers/LocationController';

/**
 * Register location route and attached location controller
 */
export default (app: Router) => {
  useExpressServer(app, {
    routePrefix: '/trucks',
    controllers: [LocationController],
  });
};
