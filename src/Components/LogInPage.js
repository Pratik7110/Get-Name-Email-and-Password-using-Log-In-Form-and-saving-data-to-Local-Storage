import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/LogInPage.css'

function LogInPage(props) {
    const [lemail,setLemail] = useState('');
    const [lpassword,setLpassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = e => {
        e.preventDefault();
        const checkEmail = localStorage.getItem('Email');
        const checkPassword = localStorage.getItem('Password');

        if(lemail !== checkEmail && lpassword !== checkPassword){
            alert('Log in Failed');
        }
        else if(lemail !== checkEmail){
            alert('Email does not match')
        }
        else if(lpassword !== checkPassword){
            alert('Password does not match')
        }
        else{
            alert('Log in Successfull');
            navigate('/Home');
        }
    }  
    return (
        <React.Fragment>
            <div className='main'>
                <form onSubmit={handleLoginSubmit}>
                    <div className='formmain'>
                <div>
                <h2>Log In Page</h2>
                </div>
                    <div className='semimain'>
                        <p>Email:</p>
                        <input 
                        type='text'
                        name='Lname'
                        onChange={(e)=>setLemail(e.target.value)}
                        value={lemail}
                        />
                    </div>
                    <div className='semimain'>
                        <p>Password:</p>
                        <input 
                        type='password'
                        name='Lpassword'
                        onChange={(e)=>setLpassword(e.target.value)}
                        value={lpassword}
                        />
                    </div>
                    <div className='semimain button'>
                        <input 
                        type='submit'
                        />
                        <br/>
                        <input
                        type='button'
                        onClick={()=>navigate('/ForgotPassword')} value='Forgot Password?' />
                    </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default LogInPage;