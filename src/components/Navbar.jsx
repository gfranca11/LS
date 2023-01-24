import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Nav.css"

const Navbar = () => {
  const [search , setSearch] = useState("")
  const navigate =useNavigate()
  const Hande = (e) =>{
    e.preventDefault()
if(!search) return
navigate(`/search?q=${search}`)
setSearch("")
  }

    return(
      <div id="nav">
        <h2>
          <Link to="/">   Top Movies</Link>
        </h2>
     
      <form onSubmit={Hande}>
      <input
          type="text"
          placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
          </form> 
       

        
      </div>

     
 )}

      export default Navbar