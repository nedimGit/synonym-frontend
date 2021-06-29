import Synonyms from '../app/synonyms/components/synonym';

const appRoutePrefix = '/app';
export const routes = {
  defaultRoutes: {
    synonym: {
      path: appRoutePrefix + '/synonyms',
      fullPath: '/snynonyms',
      component: Synonyms,
    },
    about: {
      path: 'about',
      fullPath: appRoutePrefix + '/about',
      component: Synonyms,
    },
  },
};

export default {
  routes,
};
