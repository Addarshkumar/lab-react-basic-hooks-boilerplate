
import React, { useContext, useState } from 'react';
import Counter1 from './components/usestate/counter1'
import Counter2 from './components/usestate/Counter2'
import Counter3 from './components/usestate/counter3'
import Counter4 from './components/usestate/counter4'
import './App.css';
import Effect from './components/usestate/Effect';
import {AppContext} from './components/usestate/usecontext/parentcontext';
import ParentContext from './components/usestate/usecontext/parentcontext';
import Task from './components/usestate/task';


function App() {
  const [show, setshow] = useState(true);
  const { isdark , setdark } = useContext(AppContext);
  

  return (
    <>
      
        <button onClick={() => setdark(!isdark)}>
          {isdark ? 'light theme' : 'dark theme'}
        </button>
        <button onClick={() => setshow((prev) => !prev)}>Hide/Show</button>
        {show ? (
          <>
          <Counter1 />
          <Counter2 />
          <Counter3 />
          <Counter4 />
          </>
        ):(<>
        <Effect />
        <ParentContext />
        <Task />
        </>)}
    </>
    
  );
}

export default App;



