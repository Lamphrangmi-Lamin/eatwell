import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import Signup from "./Signup";

function UserDashboard() {
    const { user, loading } = useAuth();

    // if loading --> true
    if (loading) {
        return <div>Loading...</div>
    }

    // if user doesn't exist
    if (!user) {
        return (
            <Signup />
        )
    }
    console.log("USER DATA IS:", user);
    
    return (
        <div className="flex justify-center">
            <div className="text-center">
                <img src={user.photoURL} alt="user avatar" className="mx-auto rounded-full border-4 border-[#FFBA08] hover:border-[#F48C06] mb-4" />
                <h2>Welcome, {user.displayName || user.email}!</h2>
                <p>You're already signed in.</p>

                <Link to="/favourites"className="block mt-8 text-[#4361ee] font-medium hover:underline">
                → View Your Favourite Recipes
                </Link>
                
                <button onClick={() => auth.signOut()}
                    className="bg-[#D00000] font-bold py-2 px-3 rounded-md hover:bg-[#9D0208] mt-4"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default UserDashboard;