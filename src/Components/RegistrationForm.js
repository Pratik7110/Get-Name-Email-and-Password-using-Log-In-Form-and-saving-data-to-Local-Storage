import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/RegistrationForm.css'

function RegistrationForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !password){
            alert('Please Enter All the details')
        }
        else{
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Password',password);
        alert('Registration Successfull');
        navigate('/LogInPage');
        }
    }
    return (
        <React.Fragment>
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <div className='formmain'>
                    <div>
                    <h2>Registration Form</h2>
                    </div>
                    <div className='semimain'>
                        <p>Name:</p>
                        <input 
                        type='text'
                        name='name'
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        />
                    </div>
                    <div className='semimain'>
                        <p>Email:</p>
                        <input 
                        type='email'
                        name='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />
                    </div>
                    <div className='semimain'>
                        <p>Password:</p>
                        <input 
                        type='password'
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        />
                    </div>
                    <div className='semimain button'>
                        <input
                        type='submit'
                        value='Register'
                        />
                    </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default RegistrationForm;