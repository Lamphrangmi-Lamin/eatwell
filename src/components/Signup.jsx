import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { useForm } from "react-hook-form";

// importing components
import FormInput from "./FormInput";

function Signup() {
    const provider = new GoogleAuthProvider();
    // useForm hook
    const {register, reset, watch, handleSubmit, formState: {errors}} = useForm();
    const passwordInput = watch('password');

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // get access token
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // get user-info
            const user = result.user;
            // console.log("Token:",token);
            // console.log("User photo URL:", user.photoURL);
            alert("Sign in successful!")
        } catch(error) {
            const errorCode = error.code;
            console.log("Error code:", errorCode);
            const errorMessage = error.message;
            console.log("Error message:", errorMessage);
            // get email of the user's account used
            const email = error.customData.email;
            console.log("Email used:", email)
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("User's credential:", credential);
        }
    }
    
    const onSubmit = async (formData) => {
        const {email, password} = formData;
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created succesfully!");
            // reset formState data and form fields
            reset();
        } catch(error) {
            if(error.code ===  "auth/invalid-email") {
                alert("Please enter a valid email");
            } else if(error.code ===  "auth/email-already-in-use") {
                alert("This email is already in use. Please log in or use a different email.");
            }
        }
    }

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
                    validate: (value) => value === passwordInput || "Password do not match",
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
                    block"
                    onClick={signInWithGoogle}
                    type="button">Google</button>
                </div>
                <p>Already have an account? <span className="text-blue-300"><a href="#">Log In</a></span></p>
            </form>
        </div>
    )
}

export default Signup;