// stylesheet
import './Meals.css';

// Images
import test from '../Images/test.jpg';

const Meals = ({data}) => {

  return (
    <div className='meal'>
        {data.map(data =>(
                    <div className="meal-card">
                    <img src={data.recipe.image} alt="" />
                    <div className="meal-text">
                        <h3>{data.recipe.label}</h3>
                        <p>Calories: <b>{Math.floor(data.recipe.calories)} cal</b></p>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Meals