import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePassword(props) {
    const [oldpassword, setOldPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const localPassword = localStorage.getItem('Password');
        console.log(localPassword);

        if (localPassword !== oldpassword) {
            alert('Old Password does not match');
        }
        else if (newpassword !== confirmpassword) {
            alert('Confirm Password does not match');
        }
        else if (localPassword === newpassword) {
            alert('Please Enter New Password')
        }
        else {
            alert('Password has been Updated Successfully');
            localStorage.setItem('Password', newpassword);
            navigate('/LogInPage');
        }


    }
    return (
        <React.Fragment>
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <div className='formmain'>
                    <div>
                        <h1>Change Password</h1>
                    </div>
                    <div className='semimain'> 
                        <p>Old Password:</p>
                        <input
                            type='password'
                            name='oldpassword'
                            onChange={(e) => setOldPassword(e.target.value)}
                            value={oldpassword}
                        />
                    </div>
                    <div className='semimain'>
                        <p>New Password:</p>
                        <input
                            type='password'
                            name='newpassword'
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newpassword}
                        />
                    </div>
                    <div className='semimain'>
                        <p>Confirm New Password:</p>
                        <input
                            type='password'
                            name='confirmpassword'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmpassword}
                        />
                    </div>
                    <div className='semimain button'>
                        <input
                            type='submit'
                        />
                        <br/>
                        <input
                        type='button'
                        value='Home'
                        onClick={()=>navigate('/Home')}
                        />
                    </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default ChangePassword;