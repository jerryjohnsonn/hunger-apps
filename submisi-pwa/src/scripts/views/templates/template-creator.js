import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="card">
  <div class="card-image">
    <img src= "${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
    <div class="image-location">
      <h5 tabindex="0">Kota : ${restaurant.city}</h5>
    </div>
  </div>
  <div class="card-text">
    <h3 tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <h4 tabindex="0">Rating: ⭐️${restaurant.rating}</h4>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container-detail">
    <div class="container-detail-left">
      <h2 class="container-detail-name">${restaurant.name}</h2>
      <img src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="information-container">
        <h3>Restaurant Information</h3>
        </br>
        <h4>Rating : ⭐️${restaurant.rating}</h4>
        <h4>City : ${restaurant.city}</h4>
        <h4 class="container-detail-address">Alamat : ${restaurant.address}</h4>
        <h4 class="container-detail-category">Category:
        ${restaurant.categories.map((category) => `
           ${category.name}
        `).join(', ')}
        </h4>
        <br>
        <h4 class="container-detail-description">Description: </h4>
        <p>
          ${restaurant.description}
        </p>
        <br>
        <h4 class="container-detail-food">Food:</h4>
        ${restaurant.menus.foods.map((food) => `
          ${food.name}
        `)}
        <br>
        <br>
        <h4 class="container-detail-drink">Drink:</h4>
        ${restaurant.menus.drinks.map((drink) => `
          ${drink.name}
        `)}
      </div>
    </div>
      <div class="container-detail-right">
        <h2>Some reviews</h2>
        <div class="reviews">
          ${restaurant.customerReviews.map((review) => `
            <div class="review-box">
              <b>${review.name}</b>
              <p>${review.date}</p>
              <p>${review.review}</p>
            </div>
          `).join('')}
        </div>
      </div>
  </div>
`;

export {
  createRestaurantTemplate, 
  createRestaurantDetailTemplate 
};