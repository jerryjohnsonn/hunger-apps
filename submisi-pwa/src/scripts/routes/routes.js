import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
  '/': ListRestaurant,
  '/list': ListRestaurant,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': DetailRestaurant,
};

export default routes;