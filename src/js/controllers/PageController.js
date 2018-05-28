import config from '../config';

/**
 * Generic page controller that determines which page to load.
 * This top-level controller allows for lazy loading page-specific
 * javascript to improve page loading speed.
 */
const PageController = {
  render() {
    // Lazy load the correct page controller depending on the current route
    switch(this.currentRoute()) {
      case '/':
        import(/*webpackChunkName: "home" */ './IndexController')
          .then(IndexController => {
            IndexController.default.render();
          });

        break;
      case '/restaurant':
        import(/*webpackChunkName: "restaurant" */ './RestaurantController')
          .then(RestaurantController => {
            RestaurantController.default.render();
          });

        break;
    }
  },

  /**
   * Determines the current route based on the URI
   */
  currentRoute() {
    return window.location.pathname.replace(/\.[^/.]+$/, '');
  }
};

export default PageController;