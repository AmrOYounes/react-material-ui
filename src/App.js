import React, { Fragment } from 'react';
import './App.css';
import {Header,Footer} from './component/loyouts';
import Exercises from './component/Exercises'
import {muscles,exercises} from './store';
 class App extends React.Component{
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
       this.state.exercises.reduce((acc,exercise)=> { 
      const {muscles} =exercise;
      acc[muscles] = acc[muscles] ? [...acc[muscles],exercise] :[exercise]
      return acc;
    },{})
    )

  }
   render(){
     console.log(this.getExercisesByMuscles());
     
   const exercises = this.getExercisesByMuscles();
     
     return (
       <Fragment>
         <Header/>
         <Exercises
         exercises={exercises}
         />
          <Footer
          muscles={muscles}
          />
       </Fragment>
     )
   }
 }

export default App;
