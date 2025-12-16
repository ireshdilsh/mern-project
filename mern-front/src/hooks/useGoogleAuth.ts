import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export function useGoogleAuth() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { data } = await axios.get(
                    "https://www.googleapis.com/oauth2/v1/userinfo",
                    {
                        params: { alt: "json" },
                        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                    }
                );
                
                localStorage.setItem("auth:user", JSON.stringify({ ...data, accessToken: tokenResponse.access_token }));
                navigate("/dashboard");
            } catch {
                setError("Could not sign in with Google. Please try again.");
            } finally {
                setIsLoading(false);
            }
        },
        onError: () => {
            setIsLoading(false);
            setError("Google sign-in was cancelled or failed.");
        },
        scope: "openid profile email",
    });

    const signInWithGoogle = () => {
        setError(null);
        setIsLoading(true);
        login();
    };

    return { signInWithGoogle, isLoading, error };
}
