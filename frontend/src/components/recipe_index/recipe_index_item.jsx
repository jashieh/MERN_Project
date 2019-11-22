import React from 'react';
import '../stylesheets/recipe_index/recipe_index_item.scss';

const MAX = 21;
const MIN = 0;

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
  }

  addToCart() {
    let times = ["BREAKFAST", "LUNCH", "DINNER"];
    let { cart, currentDate, recipe } = this.props;
    let date = cart.dates[currentDate];
    for (let i = 0; i < times.length; i++) {
      if (!date[times[i]]) {
        this.props.addCartMeal(cart.id, { date: currentDate, time: times[i], recipeId: recipe.id })
        break;
      }
    }
  }

  onDragStart(e) {
    let { recipe } = this.props;
    e.dataTransfer.setData("recipeId", recipe.id);
  }


  // TODO: WHEN REMOVING ITEM, ALSO REMOVE IT COMPLETELY FROM THE CART
  render() {
    const { recipe, rotateToBack } = this.props;

    return (
      <div className="recipe-index-item" draggable onDragStart={this.onDragStart}>
        <div className="recipe-index-item-remove" onClick={rotateToBack}>X</div>
        <div className="recipe-index-item-name">{recipe.title}</div>
        <img className="recipe-index-item-image" src={recipe.image} draggable="false"/>
        <div className="recipe-index-item-add" onClick={this.addToCart}>Add to Cart</div>
      </div>
    )
  }
}

export default RecipeIndexItem;