import Header from './components/Header/Header'
import { Counter } from './components/counter'


function App() {
  
  return(
    <div id='ParentContainer'>
      <Header />
      <Counter label='Great'/>
      <Counter label='Audio'/>
      <Counter label='Great'/>
    </div>
  )
}


export default App
