import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useForm } from "react-hook-form";

// importing components
import FormInput from "./FormInput";

function Signup() {
    // useForm hook
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();

    const onSubmit = async (formData) => {
        const {email, password} = formData;
        if(!isValid) return //Ensure form validity before submitting
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created succesfully!");
            console.log("Credential: ", userCredential.user);
        } catch(error) {
            if(error.code ===  "auth/email-already-in-use") {
                alert("This email is already in use. Please log in or use a different email.");
            }
            // console.error("Error creating account: ", error.message)
        }
    }
    // console.log(errors);

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                label='Email'
                type='email'
                name='email'
                placeholder='Enter email'
                register={register}
                errors={errors}
                validation={{
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format"
                    }
                }}
                 />
                <FormInput
                label='Password'
                type='password'
                name='password'
                placeholder='Enter password'
                pattern={
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                }
                register={register}
                errors={errors}
                validation={{
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                    }
                }}
                />
                <FormInput
                label='Confirm password'
                type='password'
                name='confirmPassword'
                placeholder='confirm password'
                register={register}
                errors={errors}
                validation={{
                    required: "Please confirm your password",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                    }
                }}
                />

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