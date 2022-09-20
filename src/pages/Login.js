import React from 'react';
import './login.css'


export default function Login() {
    return (
        <> 
        <div className='contain'>
            <body>        
                <form className='view'>
                <h1>Login:</h1>
                    <label className="label">
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Senha:
                        <input type="password" name="senha"/>
                    </label>
                    <input className="input-submit" type="submit" value="Submit" />
                </form>
            </body>
        </div>
        </>
    );
}