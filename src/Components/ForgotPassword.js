import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword(props) {
    const [forgotemail,setForgotEmail] = useState('');
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const a = localStorage.getItem('Email');
        
        if(forgotemail !== a){
            alert('Email Does not Match');
        }
        else{
            const p = localStorage.getItem('Password');
            alert(`Your Password is ${p}`);
            navigate('/LogInPage');
        }
    }
    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Forgot Password Page</h2>
                    </div>
                    <div>
                        <p>Enter Your Email</p>
                        <input 
                        type='email'
                        name='forgotemail'
                        onChange={e=>setForgotEmail(e.target.value)}
                        value={forgotemail}
                        />
                    </div>
                    <div>
                        <input
                        type='submit'
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default ForgotPassword;