import React from 'react';
import { withRouter } from 'react-router-dom';

import NavbarContainer from '../nav/navbar_container';
import Apron from '../stylesheets/assets/apron.png';
import Background1 from '../stylesheets/assets/background1.jpg';
import Background2 from '../stylesheets/assets/main.jpeg';
import ChooseMeal from '../stylesheets/assets/choose.gif';
import PieChart from '../stylesheets/assets/pie_chart.gif';
import LineChart from '../stylesheets/assets/line_chart.gif';
import GroceryGif from '../stylesheets/assets/grocery.gif';
import CookingPic from '../stylesheets/assets/cooking.jpg';
import MealPlan from '../stylesheets/assets/meal_plan.jpg';
import Freshly from '../stylesheets/assets/easy.jpeg';
import IceCream from '../stylesheets/assets/note.jpg';

import KitchenCounter from '../stylesheets/assets/four-two.jpeg';
import MainIndexItemContainer from './main_index_item_container';
import MainDevelopers from './main_developers';

import { 
  recipe1,
  recipe2, 
  recipe3, 
  recipe4, 
  recipe5, 
  recipe6 
} from './main_index_seeds';                      


class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.inThrottle = false;
        this.throttleScroll = this.throttleScroll.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.throttleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.throttleScroll);
    }

    throttleScroll() {
        const args = arguments;
        const context = this;

        if (!this.inThrottle && !this.props.modal) {
            this.handleScroll.apply(context, args);
            this.inThrottle = true;
            setTimeout(() => this.inThrottle = false, 1200);
        }
    }

    handleScroll(e) {
        let buttons = document.getElementsByName("radio-set");
        let checked;

        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].checked) {
                checked = buttons[i];
            }
        }

        if(e.deltaY > 0 && checked.nextElementSibling &&
            checked.nextElementSibling.nextElementSibling) {
            checked.nextElementSibling.nextElementSibling.checked = true;
        } else if(e.deltaY < 0 && checked.previousSibling &&
            checked.previousSibling.previousSibling) {
            checked.previousSibling.previousSibling.checked = true;    
        }
    }

    render() {
        return (
          <div>
            <div className="container">
              <div className="codrops-top">
                <NavbarContainer />
                <div className="clr"></div>
              </div>
              {/* aasdasd */}
              {/* aasdasd */}
              {/*  */}
              {/* <div className="st-container">
                <input
                  type="radio"
                  name="radio-set"
                  defaultChecked={true}
                  id="st-control-1"
                />
                <a href="#st-panel-1" className="splash-footer-tab">
                  délicieux?
                </a>
                <input type="radio" name="radio-set" id="st-control-2" />
                <a href="#st-panel-2" className="splash-footer-tab">
                  The experience
                </a>
                <input type="radio" name="radio-set" id="st-control-3" />
                <a href="#st-panel-3" className="splash-footer-tab">
                  How it works
                </a>
                <input type="radio" name="radio-set" id="st-control-4" />
                <a href="#st-panel-4" className="splash-footer-tab">
                  Preview
                </a>
                <input type="radio" name="radio-set" id="st-control-5" defaultChecked/>
                <a href="#st-panel-5" className="splash-footer-tab">
                  Developers
                </a> */}

                {/* <div className="st-scroll">
                  <section className="st-panel st-color" id="st-panel-1">
                    <div className="img-container">
                      <img src={IceCream} alt="" className="splash-img" />
                    </div> */}
                    
                    <div className="st-container">

                        <input type="radio" name="radio-set" defaultChecked={true} id="st-control-1" />
                        <a href="#st-panel-1" className="splash-footer-tab">délicieux?</a>
                        <input type="radio" name="radio-set" id="st-control-2" />
                        <a href="#st-panel-2" className="splash-footer-tab">The experience</a>
                        <input type="radio" name="radio-set" id="st-control-3" />
                        <a href="#st-panel-3" className="splash-footer-tab">How it works</a>
                        <input type="radio" name="radio-set" id="st-control-4" />
                        <a href="#st-panel-4" className="splash-footer-tab">Preview</a>
                        <input type="radio" name="radio-set" id="st-control-5" />
                        <a href="#st-panel-5" className="splash-footer-tab">Developers</a>

                        <div className="st-scroll">

                            <section className="st-panel st-color" id="st-panel-1">
                                <div className="img-container-first">
                                    <img src={IceCream} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="splash-loading-container">
                                    {/* <img className="apron" src={Apron} alt="" />; */}
                                    <h2 className="splash-main-title"
                                        onClick={()=>this.props.history.push('/login')}>
                                        délicieux
                                    </h2>
                                    {/* <div className="very-top">
                                        <div className="top-top">
                                            <div className="meter">
                                                <span id="span-first" ><span className="progress"></span></span>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </section>

                            <section className="st-panel st-color" id="st-panel-2">
                                {/* <div className="st-deco">
                                </div> */}
                                
                                <div className="second-main-contain"> 
                                    <div className="img-container-second">
                                        <img src={Freshly} alt=""
                                            className="splash-img-second" />
                                    </div>
                                    <div className="splash-middle">
                                        <div className="splash-middle-contain">
                                            <h1 className="the-exp">Meal planning made easy</h1>
                                            <div className="the-exp-middle">
                                                <div className="the-exp-left">
                                                    <div className="the-exp-sub-head">
                                                        délicieux is your smart cooking sidekick
                                                    </div>
                                                    <div className="the-exp-body">
                                                        Find the perfect recipe to make from the ingredients available in your fridge.
                                                        Reach your diet goals faster with detailed nutritional information and progress visualization.
                                                    </div>
                                                </div>
                                                {/* <div className="the-experience-right">
                                                    <img src={MealPlan} alt="" className="the-experience-img"/>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="st-panel st-color" id="st-panel-3">
                                {/* <div className="img-container">
                                    <img src={Background2} alt=""
                                    className="img-container"/>
                                </div> */}
                                {/* <div className="st-deco">
                                </div> */}
                                <div className="splash-middle-container-3">
                                    <h1 className="how-it-works">How it works</h1>
                                    <div className="splash-gif-container">
                                      <div className="splash-gif-top">

                                        <div className="splash-gif-item">
                                            <img src={GroceryGif} alt="" className="splash-gif-2"/>
                                            <div className="splash-gif-label">
                                                Track Your Ingredients                                            </div>
                                            <div className="splash-gif-body">
                                                Never let your groceries go to waste by keeping a dynamic digital inventory.
                                            </div>
                                        </div>
                                        
                                        <div className="splash-gif-item">
                                            <img src={ChooseMeal} alt="" className="splash-gif-3"/>
                                            <div className="splash-gif-label">
                                                Choose Your Meals
                                            </div>
                                            <div className="splash-gif-body">
                                                Get recipe suggestions based on the ingredients you have and your fitness goals.
                                            </div>
                                        </div>

                                      </div>
                                      <div className="splash-gif-bottom">

                                        <div className="splash-gif-item">
                                            <img src={PieChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                Macros Made Easy
                                            </div>
                                            <div className="splash-gif-body">
                                                Stay informed with detailed nutritional information on all recipes.
                                            </div>
                                        </div>

                                        <div className="splash-gif-item">
                                            <img src={LineChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                Monitor Your Progress
                                            </div>
                                            <div className="splash-gif-body">
                                                Reach your goals easier by visualizing your improvement.
                                            </div>
                                        </div>

                                      </div>
                                    </div>
                                </div>
                            </section>

                            <section className="st-panel st-color" id="st-panel-4">
                                <div className="img-container">
                                  <img src={KitchenCounter} className="splash-image"/>
                                </div>

                                <div className="main-index">
                                
                                  <div className="main-index-rows">

                                    <div className="main-row-left">
                                      <div className="main-index-row">
                                        <MainIndexItemContainer recipe={recipe1}/>
                                        <MainIndexItemContainer recipe={recipe2}/>
                                        <MainIndexItemContainer recipe={recipe3}/>
                                      </div>
                                      <div className="main-index-row">
                                        <MainIndexItemContainer recipe={recipe4}/>
                                        <MainIndexItemContainer recipe={recipe5}/>
                                        <MainIndexItemContainer recipe={recipe6}/>
                                      </div>
                                    </div>
                                    <div className="main-index-header">
                                      Browse From a <br/> Diverse Menu!
                                      
                                    </div>
                                  </div>
                                </div>
                            </section>

                            <section className="st-panel" id="st-panel-5">
                              
                              <MainDevelopers/>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default MainPage;