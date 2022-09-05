import React from 'react';
import { Link } from "react-router-dom";

export default function Sobre(){
   return (
       <div>
           <h1>Sobre o site</h1>
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}
