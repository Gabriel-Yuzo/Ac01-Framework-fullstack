import React, { useDebugValue } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";

export default function Sobre(){
   const location = useLocation()
   const history = useHistory() 
   return (
       <><div>
           <h1>Sobre o site</h1>
           <h1>Path: {location.pathname}</h1>

           <Link to="/">retornar a página inicial</Link>
       </div><h2> {history.action}</h2></>
   );
}
