import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css'

function Home(props) {
    const [name,setName] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const a = localStorage.getItem('Name');
        setName(a)
    },[name])
    
    const removeData = () => {
        localStorage.clear();
        alert('All the Data has been removed');
        navigate('/');
    }

    return (
        <React.Fragment>

            <div className='homediv'>
                <h1>Home</h1>
                <p>Welcome,{name}</p>
                <button onClick={()=>navigate('/ChangePassword')}>Change Password</button>
                <button onClick={removeData}>Remove Data</button>
            </div>

        </React.Fragment>
    );
}

export default Home;