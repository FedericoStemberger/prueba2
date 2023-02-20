import {Typography } from '@mui/material'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Typography variant="h2" component="h1">
        <ItemListContainer greeting="Bienvenido a mi App"/>
      </Typography>;
      
    </div>
  )
}

export default App
