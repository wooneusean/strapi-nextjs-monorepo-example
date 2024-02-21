/**
 * animal controller
 */

import { factories } from '@strapi/strapi';
import TAnimal from 'shared/types/TAnimal';

export default factories.createCoreController(
  'api::animal.animal',
  ({ strapi }) => ({
    async greet(ctx) {
      const data = ctx.request.body as TAnimal;
      return `Hi ${data.name}`;
    },
  })
);
