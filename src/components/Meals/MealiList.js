import { useEffect, useState} from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './MealList.module.css'


const MealList =()=>{
  const [dummyMeals, setDummyMeals] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState('')

  const fetchDummyMeals = async () =>{
    setError(null)
    setIsLoading(true)
    try{
      const response = await fetch('https://react-course-project-ffeb9-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
      if(!response.ok){
        throw new Error('Some problemka')
      }

      const data = await response.json()
      const loadedMeals=[]
      for( const key in data){
        loadedMeals.push({
          id:key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setDummyMeals(loadedMeals)

    }catch(e){
      setError(e.message)
    }

    if(error){
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchDummyMeals()
  },[])

    const mealList = dummyMeals.map((meal)=>
    <MealItem 
      name={meal.name} 
      description = {meal.description}
      price={meal.price}
      key={meal.id}
      id={meal.id}/>
    )


    
    if(isLoading){
      return(
        <section className={styles.loading}>
          <p>IDJOT ZAGRUZKA....</p>
        </section>
      )
    }

    return(
        <section className={styles.meals}>
          <Card>
            <ul>
                {mealList}
            </ul>
          </Card>
        </section>
    )
}

export default MealList