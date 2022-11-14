import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content">
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('.content');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
  }
};

export default DetailRestaurant;