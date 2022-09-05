import React from 'react';
import { Link } from "react-router-dom";
import './Usuario.css';

export default function Usuario(){
   return (
       <div class="Usuario">
           <h1 id="top1" >Usuário</h1>
           <Link to="/">retornar a página inicial</Link>
       </div>

   );
}
