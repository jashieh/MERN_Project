import React from 'react';
import RecipeIndexItemContainer from './recipe_index_item_container';
import '../stylesheets/recipe_index/recipe_index.scss';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }

    this.updateRecipes = this.updateRecipes.bind(this);
  }

  // Loads all of the recipes upon mounting
  componentDidMount() {
    let type = "RECIPES_BY_INGREDIENTS";
    switch(type) {
      case "RECIPES_BY_INGREDIENTS":
        this.props.getRecipesByIngredients(["dog"], 24); break;
      case "RANDOM_RECIPE":
        this.props.getRandomRecipe(); break;
      case "RANDOM_RECIPES":
      default: 
        this.props.getRandomRecipes(24); break;
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.recipes !== this.props.recipes)
      this.setState(this.state);
  }

  updateRecipes() {
    this.setState({ loading: true });
    this.props.getRecipes(this.props.recipe_filters)
      .then(
        () => this.setState({ loading: false }),
        () => this.setState({ loading: false })
      )
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="recipe-index">
        {recipes.slice(0, 8).map((recipe, idx) => {
          return <RecipeIndexItemContainer key={idx}
                    recipe={recipe} 
                    rotateToBack={() => this.props.rotateRecipe(idx)}/>
        })}
      </div>
    )
  }
}

export default RecipeIndex;