import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { handleRedirectResult } from "../config/firebase";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check for redirect result when component mounts
        const checkRedirectResult = async () => {
            try {
                const user = await handleRedirectResult();
                if (user) {
                    setUser(user);
                }
            } catch (error) {
                console.error("Redirect result error:", error);
            } finally {
                setLoading(false);
            }
        }
        // call checkRedirectResult
        checkRedirectResult();

        // set up auth state listener
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    return {user, loading};
}