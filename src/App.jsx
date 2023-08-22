import Temperature from './Temperature'
import './App.css'
import {useState,useEffect} from 'react';


function App() {

  const [rangeValue,setRangeValue] = useState(0)
  const [temperatureColor,setTemperatureColor] = useState('ice')

  const onChangeSlider = e =>{
    setRangeValue(parseInt(e.target.value,10))
    console.log(rangeValue)
  }

  useEffect(()=>{
    if(rangeValue == 0){
      setTemperatureColor('ice');
    }
    if(rangeValue == 10){
      setTemperatureColor('cold10');
    }
    else if(rangeValue == 20){
      setTemperatureColor('cold20');
    }
    else if(rangeValue == 30){
      setTemperatureColor('warm30');
    }
    else if(rangeValue == 40){
      setTemperatureColor('hot40');
    }
    else if(rangeValue == 50){
      setTemperatureColor('hot50');
    }
    else if(rangeValue == 60){
      setTemperatureColor('hot60');
    }
    else if(rangeValue == 70){
      setTemperatureColor('hot70');
    }
    else if(rangeValue == 80){
      setTemperatureColor('hot80');
    }
    else if(rangeValue == 90){
      setTemperatureColor('hot90');
    }
    else if(rangeValue== 100){
      setTemperatureColor('boiling100')
    }
     //remove previous temperature classes from the body
     const temperatureClasses = ['ice','cold10','cold20','warm30','hot40','hot50','hot60','hot70','hot80','hot90','boiling100'];
     document.body.classList.remove(...temperatureClasses);

     //Add the current temperature class to the body
     document.body.classList.add(temperatureColor);

     // Clean up by removing the temperature class when component unmounts
    return () => {
      document.body.classList.remove(temperatureColor);
    }
      
  },[rangeValue,temperatureColor])


  return <>
    
    <div className='App'>
      <Temperature 
        min = {0}
        max ={100}
        step = {10}
        value = {rangeValue}
        onChangeValue = {onChangeSlider} />
      </div>
     
  </>

}

export default App
