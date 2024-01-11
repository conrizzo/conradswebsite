

// This loads in the images from the folder to occupy the imaceSrc property of the productInventory array.
// It loads in images by their order in the folder, so at the moment just using the ID as the index works.
const requireContext = require.context('@/images/store/products', false, /\.jpg$/);
const images = requireContext.keys().map(requireContext);

export const productInventory = [
    { 
      id: 1, 
      name: "Cup of good Coffee", 
      price: .99, 
      quantityAvailable: 20, 
      imageSrc: '@/images/cup_of_coffee.jpg', 
      altText: "coffee", 
      description: "This is some serious gourmet coffee, made by someone who cares that it tastes good!" 
    },
    { 
      id: 2, 
      name: "Bread", 
      price: 3.99, 
      quantityAvailable: 200, 
      imageSrc: 'coffeeImage', 
      altText: "bread", 
      description: "Freshly baked bread with that nice fresh bread smell!" 
    },
    { 
      id: 3, 
      name: "15kg of Bird Food", 
      price: 39.99, 
      quantityAvailable: 300, 
      imageSrc: 'diffusionBird', 
      altText: "Bird Food", 
      description: "Good bird food that makes birds happy!" 
    },
    { 
      id: 4, 
      name: "Artisan Cake", 
      price: 5.99, 
      quantityAvailable: 50, 
      imageSrc: 'cakeFood', 
      altText: "Artisan Cake",
      description: "Cake that goes well with coffee!" 
    },
    { 
      id: 5, 
      name: "Secret Purple Cake", 
      price: 9.99, 
      quantityAvailable: 50, 
      imageSrc: 'purpleCake', 
      altText: "Artisan Cake",
      description: "Cake that is so good you feel guilty buying it!" 
    }
    // Add more items as needed :)  
  ].map((link, index) => ({ ...link, imageSrc: images[index] }));