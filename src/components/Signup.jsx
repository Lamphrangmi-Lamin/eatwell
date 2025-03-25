import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import FormInput from "./FormInput";

function Signup() {
    // form state setup
    const [formData, setFormData] = useState({
        name: "Lam",
        email: "lam@gmail.com",
        password: "1234567",
        confirmPassword: "1234567"
    });

    // input handler
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createUserWithEmailAndPassword(auth, formData.email, formData.confirmPassword); 
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <FormInput
                label='name'
                type='text'
                name='name'
                placeholder='Enter name'
                value={formData.name}
                onChange={handleChange}
                // error={error.name}
                required />
                {/* {console.log(errors.name)} */}
                <FormInput
                label='email'
                type='email'
                name='email'
                placeholder='Enter email'
                value={formData.email}
                onChange={handleChange}
                // error={error.name}
                required />
                {/* {console.log(errors.name)} */}
                <FormInput
                label='password'
                type='password'
                name='password'
                placeholder='Enter password'
                value={formData.password}
                onChange={handleChange}
                // error={error.name}
                />
                {/* {console.log(errors.name)} */}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;