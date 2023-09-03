import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

export default function useAuth() {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signIn = async (email: string, password: string) => {
    setAuthState({
      loading: true,
      error: null,
      data: null,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        { email: email, password: password }
      );
      setAuthState({
        loading: false,
        error: null,
        data: response.data,
      });
    } catch (error: any) {
      setAuthState({
        loading: false,
        error: error.response.data,
        data: null,
      });
    }
  };

  return { signIn };
}
