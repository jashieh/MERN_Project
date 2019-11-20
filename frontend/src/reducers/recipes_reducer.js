import {
  RECEIVE_RECIPES,
  ROTATE_RECIPE,
} from '../actions/recipe_actions';

const RECIPES = [
  {
    id: 1,
    image:
      "https://foodal.com/wp-content/uploads/2018/06/The-Tastiest-Recipe-for-Ketchup-Made-from-Scratch.jpg",
    title: "Organic Ketchup"
  },
  {
    id: 2,
    image:
      "https://previews.123rf.com/images/denismart/denismart1810/denismart181000290/111249756-london-uk-september-13-2018-heinz-ketchup-with-fresh-raw-tomatoes-in-box-on-wood-background-.jpg",
    title: "Heinz Ketchup"
  },
  {
    id: 3,
    image: "https://www.murrayscheese.com/site/images/items/5595.0.jpg?resizeid=9&resizeh=300&resizew=300",
    title: "Sir Kensington's Plain Ketchup"
  },
  {
    id: 4,
    image: "https://cdnimg.webstaurantstore.com/images/products/large/430115/1639668.jpg",
    title: "Hunt's \"Ketchup\""
  },
  {
    id: 5,
    image: "https://boulderlocavore.com/wp-content/uploads/2018/08/homemade-ketchup-title-image.jpg",
    title: "Homemade Ketchup from BoulderLacavore"
  },
  {
    id: 6,
    image: "http://cdn.shopify.com/s/files/1/1657/0407/products/New_Fody_Ketchup_888021_grande.jpg?v=1562774223",
    title: "Fody Ketchup??"
  },
  {
    id: 7,
    image: "https://sifu.unileversolutions.com/image/en-PK/original/2/knorr-tomato-ketchup-4x4kg-50159138.png",
    title: "Ghetto Ketchup"
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkk6AV5Nhwu-4aLnApQjr45M55F39wex88Wh-JDtdLv-D3pA43&s",
    title: "Ugly Sauce"
  },
  {
    id: 9,
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABrZtf.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=2580&y=1346",
    title: "Ketchup Fruit"
  }
];

const RecipesReducer = (state = RECIPES, action) => {
  Object.freeze(state);
  let nextState = [];
  let temp;

  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case ROTATE_RECIPE:
      for (let i = 0; i < state.length; i++) 
        nextState.push(Object.assign({}, state[i]));
      temp = nextState.splice(action.recipe_idx, 1);
      nextState.push(temp[0]);
      return nextState;
    default:
      return state;
  }
};

export default RecipesReducer;