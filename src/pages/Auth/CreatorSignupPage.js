import React from 'react';
import CreatorSignup from '../../components/Auth/CreatorSignup';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';
const CreatorSignupPage = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
      })
      

    const handleSignup = async (firstName ,  lastName , userName , email, password) => {
        const filledFormData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: userName,
            password: password
        };
        setFormData(filledFormData);
        console.log(formData, "here in page");
        try {
            const response = await axios.post('http://127.0.0.1:8000/admin/auth/users/', filledFormData, {
              headers: {
                'Content-Type': 'application/json',
              }
            });
            alert('Activation link sent to your email');
            // history.push('/creator-login');
          } catch (error) {
            alert('Error in signup' ,error);
            console.error(error);
          }
        // signup(email, password);
    };

    return (
        <div>
            <h3>Creator Signup</h3>
            <CreatorSignup onSignup={handleSignup} />
        </div>
    );
};

export default CreatorSignupPage;
