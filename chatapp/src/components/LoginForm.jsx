import { useState } from "react";
import axios from "axios";

const projectID = "a37fad08-a702-42f8-88cf-d3cf7f61d18f";

const LoginForm = ()=>{

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const authObject = {'Project-ID':projectID,'User-Name':username, 'User-Secret':password};

        try{
            const response = await axios.get('https://api.chatengine.io/chats/', {
            headers: authObject
            });
            console.log(response);
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            
            window.location.reload();
            setError('');
        }catch(err){
            console.log(err);
            setError('Oops, incorrect credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}
                        className="input" placeholder="Username" required
                    />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                        className="input" placeholder="Password" required
                    />

                    <div style={{alignItems: "center", marginLeft: "15px"}} onClick={handleSubmit}>
                        <div className="button" onClick={handleSubmit}>
                            <span>Start Chatting</span>
                        </div>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>   
        </div>
    );
};

export default LoginForm;