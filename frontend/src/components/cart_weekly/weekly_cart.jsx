import React from 'react';
import NavBarContainer from '../nav/navbar_container';  
import WeeklyCartDayContainer from "./weekly_cart_day_container";
import WeeklyMacro from './weekly_macro';
import '../stylesheets/weekly_cart/weekly_cart.scss';

const TIMES = ['BREAKFAST', 'LUNCH', 'DINNER'];

// TODO: ON MOUNT LOADS ALL INFORMATION
class WeeklyCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      calories: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      fiber: 0
    }

    this.generateDates = this.generateDates.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.modifyMacros = this.modifyMacros.bind(this);
    this.removeMacros = this.removeMacros.bind(this);

    this.addListeners = this.addListeners.bind(this);
    this.scrollCart = this.scrollCart.bind(this);
  } 

  // generate an array of weekdates and fetch recipe info
  componentDidMount() {
    let { getCart, user, cart, fetchFridge, fetchUser } = this.props;
    // this.setState({calories: 0, carbs: 0, protein: 0, fat: 0, fiber: 0}, ()=>{
    fetchFridge(user.id)
      .then(() => {
        if (!cart.dates) {
          getCart(user.id)
            .then(() => {
              this.getRecipes();
              this.addListeners();
            })
        } else {
            this.getRecipes();
            this.addListeners();
      }});
    fetchUser(user.id);
  }

  addListeners() {
    this.weeklyCart = document.getElementsByClassName("weekly-cart")[0];
    this.weeklyCartDays = document.getElementsByClassName("weekly-cart-days")[0];
    this.weeklyCart.addEventListener("wheel", (e) => {this.scrollCart(e)});
  }

  scrollCart(e) {
    // debugger;
    console.log(e);
    console.log(this.weeklyCartDays.scrollLeft);
    this.weeklyCartDays.scrollLeft -= e.deltaY + e.deltaX;
    console.log(this.weeklyCartDays.scrollLeft);
  }


  // Generates an array of dateStrings that represent the week's cart
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
  
  // fetches all necessary recipes for a given week
  getRecipes() {
    let dates = this.generateDates();
    let { cart, recipes, addCartDate, getRecipeDB } = this.props;
    let recipeId;

    let results = 0;
    for (let i = 0; i < dates.length; i++) {
      if (!cart.dates[dates[i]]) {
        results++;
        addCartDate(cart.id, { date: dates[i] })
          .then(() => {
            results--;
            if (results === 0) this.setState({ dates })
          });
      } else {
        for (let j = 0; j < TIMES.length; j++) {
          recipeId = cart.dates[dates[i]][TIMES[j]];
          if (recipeId && recipes[recipeId]) {
            this.modifyMacros(recipes[recipeId], "add");
          } else if (recipeId && !recipes[recipeId]) {
            results++;
            getRecipeDB(recipeId)
              .then(({ recipe } ) => {
                this.modifyMacros(recipe, "add");
                results--;
                if (results === 0) this.setState({ dates });
              });
          } else if (!recipeId) {
            if (results === 0) this.setState( { dates} );
        }
      }
    }
    }
  }

  modifyMacros(recipe, operation) {
    let recipeCalories = Object.values(recipe.nutrition).filter(nutrient => ["Calories"].includes(nutrient.title))[0].amount ;
    let recipeProtein = Object.values(recipe.nutrition).filter(nutrient => ["Protein"].includes(nutrient.title))[0].amount ;
    let recipeFat = Object.values(recipe.nutrition).filter(nutrient => ["Fat"].includes(nutrient.title))[0].amount ;
    let recipeCarbs = Object.values(recipe.nutrition).filter(nutrient => ["Carbohydrates"].includes(nutrient.title))[0].amount ;
    let recipeFiber = Object.values(recipe.nutrition).filter(nutrient => ["Fiber"].includes(nutrient.title))[0].amount ;
    if (operation === "add") {
      this.setState({
        calories: this.state.calories + recipeCalories,
        protein: this.state.protein + recipeProtein,
        fat: this.state.fat + recipeFat,
        carbs: this.state.carbs + recipeCarbs,
        fiber: this.state.fiber + recipeFiber
      }, ()=>{console.log(this.state.calories)});
    } else {
      this.setState({
        calories: this.state.calories - recipeCalories,
        protein: this.state.protein - recipeProtein,
        fat: this.state.fat - recipeFat,
        carbs: this.state.carbs - recipeCarbs,
        fiber: this.state.fiber - recipeFiber
      });
    }
   
  }
  removeMacros(recipeId) {
    this.props.getRecipeDB(recipeId)
      .then(({ recipe }) => {
        this.modifyMacros(recipe);
      })
  }
  
  render() {
    let { dates } = this.state;
    if (dates.length > 0){
      return (
        <div className="weekly-cart">
          <div className="top">
            <NavBarContainer />
          </div>
          <div className="weekly-cart-header">Weekly Summary</div>
          <div className="weekly-cart-days">
            {dates.map((date, idx) => {
              return <WeeklyCartDayContainer date={date} key={idx} removeMacros={this.removeMacros}/>;
            })}
          </div>
          <WeeklyMacro calories={this.state.calories} 
          carbs={this.state.carbs} 
          protein={this.state.protein} 
          fat={this.state.fat} 
          fiber={this.state.fiber}
          user = {this.props.currentUser} />
        </div>
      );
    } else {
      return (
        <div className="weekly-cart"></div>
      );
    }
  }
}

export default WeeklyCart;