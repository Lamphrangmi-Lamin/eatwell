import {confirmPasswordReset, createUserWithEmailAndPassword } from "firebase/auth";
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
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Name'
                type='text'
                name='name'
                placeholder='Enter name'
                value={formData.name}
                onChange={handleChange}
                // error={error.name}
                required />
                {/* {console.log(errors.name)} */}
                <FormInput
                label='Email'
                type='email'
                name='email'
                placeholder='Enter email'
                value={formData.email}
                onChange={handleChange}
                // error={error.name}
                required />
                {/* {console.log(errors.name)} */}
                <FormInput
                label='Password'
                type='password'
                name='password'
                placeholder='Enter password'
                value={formData.password}
                onChange={handleChange}
                // error={error.name}
                />
                {/* {console.log(errors.name)} */}
                <FormInput
                label='Confirm password'
                type='password'
                name='confirmPassword'
                placeholder='confirm password'
                value={formData.confirmPassword}
                onChange={handleChange}
                // error={error.name}
                />
                {/* {console.log(errors.name)} */}

                <div className="flex justify-between items-center">
                    <button className="
                    bg-[#D00000]
                    font-bold
                    py-2
                    px-3
                    rounded-md
                    hover:bg-[#9D0208]
                    block"
                    type="submit">Sign Up</button>

                    <span className="text-center">OR</span>
                    
                    <button className="
                    bg-[#FFBA08]
                    text-black
                    font-bold
                    py-2
                    px-3
                    rounded-md
                    hover:bg-[#F48C06]
                    block">Google</button>
                </div>
                <p>Already have an account? <span className="text-blue-300"><a href="#">Log In</a></span></p>
            </form>
        </div>
    )
}

export default Signup;