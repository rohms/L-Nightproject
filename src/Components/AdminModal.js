import React, { useState, useContext } from 'react';
import "./Styles/Popup.css";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const AdminModal = (props) => {
    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");     

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            email: email,
            password: password
        });
        history.push("/");
     };
        return (
            <div className="popup">
                    <div className="astrocontainer">
                    <i class="fas fa-user-astronaut"></i>
                    </div>
                            <form onSubmit={handleSubmit}>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} minLength="5" maxLength="20" placeholder="Email" />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" minLength="6" maxLength="30" placeholder="Password" />
                            <button type="submit" className="button">Login</button>
                            </form>                      
            </div>
        )
};    

export default AdminModal;