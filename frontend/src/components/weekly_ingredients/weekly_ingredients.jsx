import React from 'react';
import WeeklyIngredientsItemContainer from './weekly_ingredients_item_container'
import WeeklyIngredientsCatagory from './weekly_ingredients_catagory';
import { getIngredientById } from '../../util/ingredient_api_util';

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

class WeeklyIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      catagories: {},
    }

    this.ingredients = {};
    this.results = 0;
    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    let { getCart, userId, cart, fetchFridge} = this.props;
    fetchFridge(userId)
      .then(() => {
        if (!cart.dates) {
          getCart(userId)
            .then(() => this.getRecipes())
        } else {
          this.getRecipes();
      }});
  }

  generateDates() {
    let currentDate = new Date();
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());

    let dateStrings = [currentDate.toDateString().slice(0, 15)];
    while (dateStrings.length < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      dateStrings.push(currentDate.toDateString().slice(0, 15));
    }

    return dateStrings;
  }
  
  getRecipes() {
    let dates = this.generateDates();
    let { cart, recipes, addCartDate, getRecipeDB } = this.props;
    let recipeId;

    for (let i = 0; i < dates.length; i++) {
      // if (!cart.dates[dates[i]]) {
      //   this.results++;
      //   addCartDate(cart.id, { date: dates[i] })
      //     .then(() => {
      //       this.results--;
            // if (this.results === 0) {
            //   let ing = {};
            //   let ids = Object.keys(this.ingredients);

            //   for(let i = 0; i < ids.length; i++) {
            //     let ingredient = this.ingredients[ids[i]];
            //     let aisle = ingredient.aisle.split(";")[0];

            //     if(!ing[aisle]) {
            //       ing[aisle] = {};
            //     } 

            //     ing[aisle][ids[i]] = ingredient;
            //     // this.setState({ ingredients: ing });
            //   }
            //   this.setState({ catagories: ing });
            //   this.setState({ dates });
            // };
          // });
      // } else {
        for (let j = 0; j < TIMES.length; j++) {
          if(!cart.dates[dates[i]]) continue;
          recipeId = cart.dates[dates[i]][TIMES[j]];
          if (recipeId && recipes[recipeId]) {
            this.modifyIngredients(recipes[recipeId]);
          } else if (recipeId && !recipes[recipeId]) {
            this.results++;
            getRecipeDB(recipeId)
              .then(({ recipe } ) => {
                this.modifyIngredients(recipe);
                this.results--;
              });
          } else if (!recipeId) {
        }
      }
    // }
    }
  }

  modifyIngredients(recipe) {
    let ing = {};
    // for(let i = 0; i < recipe.ingredients.length; i++) {
    //   ing[recipe.ingredients[i].id] = recipe.ingredients[i];
    // }
    // let count = 0;
    // let temp = {};
    // for(let i = 0; i < recipe.ingredients.length; i++) {
    //   count++;
    //   getIngredientById(recipe.ingredients[i].id).then(res => {
    //     count--;
    //     temp[res.data.id] = res.data;
    //     if(count === 0) {
    //       let ids = Object.keys(temp);
    //       for(let j = 0; j < ids.length; j++) {
    //         let aisle = temp[ids[j]].aisle.split(";")[0];
    //         if(!ing[aisle]) {
    //           ing[aisle] = {};
    //         } 
    //         ing[aisle][recipe.ingredients[j].id] = recipe.ingredients[j];
    //       }
    //       ing = Object.assign(ing, this.state.ingredients);
    //       this.setState({ ingredients: ing });
    //     }
    //   });
    // }

    for(let i = 0; i < recipe.ingredients.length; i++) {
      this.results++;
      getIngredientById(recipe.ingredients[i].id).then(res => {

        let aisle = res.data.aisle.split(";")[0];
        recipe.ingredients[i].aisle = aisle;
        this.ingredients[recipe.ingredients[i].id] = recipe.ingredients[i];
        this.results--;
        console.log(this.results)
        if (this.results === 0) {
          let ing = {};
          let ids = Object.keys(this.ingredients);

          for(let i = 0; i < ids.length; i++) {
            let ingredient = this.ingredients[ids[i]];
            let aisle = ingredient.aisle.split(";")[0];

            if(!ing[aisle]) {
              ing[aisle] = {};
            } 

            ing[aisle][ids[i]] = ingredient;
            // this.setState({ ingredients: ing });
          }
          this.setState({ catagories: ing });
          // this.setState({ dates });
        };
      });
    }
  }

  emptyCart() {
    if(this.props.cart.dates) {
      let days = Object.keys(this.props.cart.dates);
      for(let i = 0; i < days.length; i++) {
        for(let j = 0; j < TIMES.length; j++) {
          if(this.props.cart.dates[days[i]][TIMES[j]]) {
            return false;
          }
        }
      }
      return true;
    }
    return true;
  }

  
  render() {
    // let ing = [];
    let catagories;
    let ids = Object.keys(this.state.catagories);
    if(Object.keys(this.state.catagories).length === 0 && !this.emptyCart()) {
      catagories = <div className="weekly-loading">Loading...</div>
    } else {
      catagories = [];
      for(let i = 0; i < ids.length; i++) {
        catagories.push(<WeeklyIngredientsCatagory 
          key={ids[i]}
          catagory={ids[i]}
          ingredients={this.state.catagories[ids[i]]}
          />);
  
        // let id = ids[i];
        // let have = this.props.ingredients[id] ? "have" : "dont";
        // if(have === "have") {
        //   ing.unshift(<WeeklyIngredientsItemContainer 
        //     ingredient={this.state.ingredients[id]}
        //     key={this.state.ingredients[id].id}
        //     have={have}/>);
        // }
        // else {
        //   ing.push(<WeeklyIngredientsItemContainer 
        //     ingredient={this.state.ingredients[id]}
        //     key={this.state.ingredients[id].id}
        //     have={have}/>);
        // }
      }
    }

    return(
      <div className="weekly-ingredients-container">
        <div className="title">
          Weekly Shopping List
        </div>
        <ul className="catagory-list">
          { catagories }
        </ul>
      </div>
    );
  }
}

export default WeeklyIngredients;