import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsDisplay from "./components/NewsDisplay"


const App = () => {

  const [category,setCategory]=useState("science");
  return (
    <div>
     
      <Navbar setCategory={setCategory} />
      <NewsDisplay category={category}/>
    </div>
  )
}

export default App
