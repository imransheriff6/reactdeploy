import React,{useState,useEffect} from 'react'
import './App.css';
import './style/first.scss'
import Hoc1 from './components/hoc1'
import Hoc2 from './components/hoc2'
import RenderContainer from './components/renderpropscon'
import Renderprops1 from './components/renderprops1'
import Renderprops2 from './components/renderprops2'
import FirstClass from './components/firstclass'
import ReduxTutorial1 from './components/reduxTut1'
import ReduxTutorial from './components/reduxTut'
import { Provider } from 'react-redux';
import store from './redux/store'; 
import NestComponent1 from './components/nestcomp1'
function App() {
  const [count,setCount] = useState(0);
  const [countOne,setCountOne] = useState(0);
  const handler = () =>{
    console.log("clicked")
  }
  useEffect(()=>{
    setCount((prev)=>prev+200)
    setCountOne((prev)=>prev+100)
    return ()=>{
      console.log("component unmounted")
    }
  },[])
  const clickingDiv = () =>{
    console.log("clicked")
  }
  return (
    <div className="App" id='header'>
      <p>{count}</p>
      <p>{countOne}</p>
      <button onClick={clickingDiv}>click</button>
      <Provider store={store}>
        <ReduxTutorial/>
        <ReduxTutorial1/>
      </Provider>
      <NestComponent1></NestComponent1>
      {/* <Hoc1/>
      <Hoc2/>
      <FirstClass  logEvent={handler}/>
    <RenderContainer render={(count,inc)=><Renderprops1 count={count} increment={inc}></Renderprops1>}/>
    <RenderContainer render={(count,inc)=><Renderprops2 count={count} increment={inc}></Renderprops2>}/> */}
    </div>
  );
}

export default App;
