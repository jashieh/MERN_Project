import React from 'react';
import '../stylesheets/recipes_index/recipe_show.scss'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { VictoryPie } from 'victory';
export default class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nutrition: [
        {
          nutrients: [
            {
              "title": "Calories",
              "amount": 584.46,
              "unit": "cal",
              "percentOfDailyNeeds": 29.22
            },
            {
              "title": "Carbohydrates",
              "amount": 83.71,
              "unit": "g",
              "percentOfDailyNeeds": 27.9
            },
            {
              "title": "Sugar",
              "amount": 5.36,
              "unit": "g",
              "percentOfDailyNeeds": 5.95
            },
            {
              "title": "Cholesterol",
              "amount": 31.02,
              "unit": "mg",
              "percentOfDailyNeeds": 10.34
            },
            {
              "title": "Sodium",
              "amount": 451.42,
              "unit": "mg",
              "percentOfDailyNeeds": 19.63
            },
            {
              "title": "Alcohol",
              "amount": 1.55,
              "unit": "g",
              "percentOfDailyNeeds": 8.58
            },
            {
              "title": "Protein",
              "amount": 18.98,
              "unit": "g",
              "percentOfDailyNeeds": 37.97
            },
            {
              "title": "Selenium",
              "amount": 57.72,
              "unit": "µg",
              "percentOfDailyNeeds": 82.45
            },
            {
              "title": "Vitamin C",
              "amount": 56.62,
              "unit": "mg",
              "percentOfDailyNeeds": 68.64
            },
            {
              "title": "Manganese",
              "amount": 1.11,
              "unit": "mg",
              "percentOfDailyNeeds": 55.52
            },
            {
              "title": "Vitamin K",
              "amount": 58.27,
              "unit": "µg",
              "percentOfDailyNeeds": 55.49
            },
            {
              "title": "Phosphorus",
              "amount": 304.38,
              "unit": "mg",
              "percentOfDailyNeeds": 30.44
            },
            {
              "title": "Fiber",
              "amount": 6.73,
              "unit": "g",
              "percentOfDailyNeeds": 26.92
            },
            {
              "title": "Folate",
              "amount": 87.14,
              "unit": "µg",
              "percentOfDailyNeeds": 21.79
            },
            {
              "title": "Vitamin B6",
              "amount": 0.43,
              "unit": "mg",
              "percentOfDailyNeeds": 21.46
            },
            {
              "title": "Magnesium",
              "amount": 71.55,
              "unit": "mg",
              "percentOfDailyNeeds": 17.89
            },
            {
              "title": "Calcium",
              "amount": 178.12,
              "unit": "mg",
              "percentOfDailyNeeds": 17.81
            },
            {
              "title": "Potassium",
              "amount": 597.53,
              "unit": "mg",
              "percentOfDailyNeeds": 17.07
            },
            {
              "title": "Iron",
              "amount": 3.07,
              "unit": "mg",
              "percentOfDailyNeeds": 17.04
            },
            {
              "title": "Copper",
              "amount": 0.33,
              "unit": "mg",
              "percentOfDailyNeeds": 16.43
            },
            {
              "title": "Zinc",
              "amount": 2.12,
              "unit": "mg",
              "percentOfDailyNeeds": 14.15
            },
            {
              "title": "Vitamin B5",
              "amount": 1.17,
              "unit": "mg",
              "percentOfDailyNeeds": 11.69
            },
            {
              "title": "Vitamin B2",
              "amount": 0.2,
              "unit": "mg",
              "percentOfDailyNeeds": 11.5
            },
            {
              "title": "Vitamin A",
              "amount": 537.51,
              "unit": "IU",
              "percentOfDailyNeeds": 10.75
            },
            {
              "title": "Vitamin B3",
              "amount": 2.14,
              "unit": "mg",
              "percentOfDailyNeeds": 10.71
            },
            {
              "title": "Vitamin B1",
              "amount": 0.16,
              "unit": "mg",
              "percentOfDailyNeeds": 10.46
            },
            {
              "title": "Vitamin E",
              "amount": 1.53,
              "unit": "mg",
              "percentOfDailyNeeds": 10.2
            },
            {
              "title": "Vitamin B12",
              "amount": 0.14,
              "unit": "µg",
              "percentOfDailyNeeds": 2.28
            },
            {
              "title": "Vitamin D",
              "amount": 0.2,
              "unit": "µg",
              "percentOfDailyNeeds": 1.31
            }
          ],
          "ingredients": [],
          "caloricBreakdown": {
            "percentProtein": 12.89,
            "percentFat": 30.29,
            "percentCarbs": 56.82
          },
          "weightPerServing": {
            "amount": 269,
            "unit": "g"
          }
        }
      ],
      "cuisines": [],
      "cookingMinute": 10,
      "diets": [],
      "_id": "5dd46d9f661ec599e6804620",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryPopular": false,
      "ketogenic": false,
      "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
      "spoonacularScore": 83,
      "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      "servings": 2,
      "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
      "ingredients": [
        {
          "_id": "5dd47356526ea09bbca4b2c6",
          "id": 1001,
          "image": "butter-sliced.jpg",
          "name": "butter",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c5",
          "id": 10011135,
          "image": "cauliflower.jpg",
          "name": "cauliflower florets",
          "amount": 2,
          "unit": "cups"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c4",
          "id": 1041009,
          "image": "cheddar-cheese.png",
          "name": "cheese",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c3",
          "id": 1034053,
          "image": "olive-oil.jpg",
          "name": "extra virgin olive oil",
          "amount": 1,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c2",
          "id": 11215,
          "image": "garlic.jpg",
          "name": "garlic",
          "amount": 5,
          "unit": "cloves"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c1",
          "id": 20420,
          "image": "fusilli.jpg",
          "name": "pasta",
          "amount": 6,
          "unit": "ounces"
        },
        {
          "_id": "5dd47356526ea09bbca4b2c0",
          "id": 1032009,
          "image": "red-pepper-flakes.jpg",
          "name": "red pepper flakes",
          "amount": 2,
          "unit": "pinches"
        },
        {
          "_id": "5dd47356526ea09bbca4b2bf",
          "id": 1102047,
          "image": "salt-and-pepper.jpg",
          "name": "salt and pepper",
          "amount": 2,
          "unit": "servings"
        },
        {
          "_id": "5dd47356526ea09bbca4b2be",
          "id": 11291,
          "image": "spring-onions.jpg",
          "name": "scallions",
          "amount": 3,
          "unit": ""
        },
        {
          "_id": "5dd47356526ea09bbca4b2bd",
          "id": 14106,
          "image": "white-wine.jpg",
          "name": "white wine",
          "amount": 2,
          "unit": "tbsp"
        },
        {
          "_id": "5dd47356526ea09bbca4b2bc",
          "id": 99025,
          "image": "breadcrumbs.jpg",
          "name": "whole wheat bread crumbs",
          "amount": 0.25,
          "unit": "cup"
        }
      ]
    };
  }

  render() {
    return(
      <div className="cont-cont">
        <div className="recipe-show-cont">
          <div>
            <div className="recipe-show-photo-cont">
              <img className="recipe-show-photo" src={this.state.image} />
            </div>
            <h4>{this.state.title}</h4>
            <div className="rs-main-cont">
              <ul className="recipe-show-ing-list">
                {this.state.ingredients.map((ingredient, idx) => (
                  <li classNamkey={idx}>
                    <div>
                      {ingredient.name}
                    </div>
                  </li>
                ))}

              </ul>
              <div className="piechart-cont">
                <VictoryPie
                  animate={{
                    duration: 2000
                  }}
                  colorScale={["#3a9691", "skyblue", "lightblue"]}
                  data = {[
                  {  y: 56.8, label: "Carb" },
                  {  y: 12.9, label: "Protein" },
                  { y: 30.3, label: "Fat" }
                  ]}
                  innerRadius= {200}
                  labelRadius= {120}
                  padAngle={3}
                  style={{ labels: { fill: "black", fontSize: 20, fontWeight: "bold" } }}
                />
              </div>
            </div>
           
          </div>
        </div>
      </div>

     
    )
  }

}