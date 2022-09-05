import React from 'react';
import { Link } from "react-router-dom";

export default function Home(){
   return (
       <div>
           <h1>ESSA É A HOME PAGE</h1>

           <p> bom dia fml </p>
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}
