import React from 'react'
import Title from './Title'
import Navigation from './components/Navigation'
import { Route ,Routes} from 'react-router-dom'
import Detail from './Detail'
import EachDetail from './EachDetail'
const App = () => {
  return (
    <div className='container  mx-auto '>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Title/>}/>
        <Route path='/proverbs/:id' element={<Detail/>}/>
        <Route path='/eachDetail' element={<EachDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
