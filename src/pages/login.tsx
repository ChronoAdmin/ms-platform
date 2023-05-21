// pages/login.tsx
import { useState } from "react";
import Button from "../../components/button";
import { googleLogin, login, logout } from "../../lib/auth";
import { UseAuth } from "../../context/auth";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { isLoading, isLoggedIn } = UseAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const errorMessage = await login(email, password);
    if (errorMessage) {
      setErrorMessage(errorMessage); // Display error message
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
    }
  };

  if(isLoading){
    return null;
  }

  if(isLoggedIn){
    router.push("/");
    return null;
  }
  
  return (
    <>
      <h1>Login Page</h1>
      <form action="">
        <label htmlFor="">email</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <label htmlFor="">password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <Button type="button" onClick={handleLogin}>
          LogIn
        </Button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <Button type="button" onClick={googleLogin}>
        GoogleでLogIn
      </Button>
      <Button type="button" onClick={logout}>
        LogOut
      </Button>
    </>
  );
};

export default LoginPage;
