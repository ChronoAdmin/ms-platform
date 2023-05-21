import React, { useState } from "react";
import Button from "../../components/button";
import { UseAuth } from "../../context/auth";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/client";

const RegisterPage = () => {
  const { isLoading, isLoggedIn } = UseAuth();            // ユーザーがログイン状態かどうかの確認
  const router = useRouter();                             // リダイレクトさせるためのuseRouter
  const [email, setEmail] = useState("");                 // 入力されたemailの状態を管理するためのuseState
  const [password, setPassword] = useState("");           // 入力されたpasswordの状態を管理するためのuseState
  const [errorMessage, setErrorMessage] = useState("");   // エラーメッセージの状態を管理するためのuseState

  // handleEmailChange関数が呼ばれるたびに引数（e）の.target.valueに入っている値を更新して代入する（email）
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);                             
  };
  // handleEmailChange関数が呼ばれるたびに引数（e）の.target.valueに入っている値を更新して代入する（パスワード）
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // この関数が呼び出されたらreateUserWithEmailAndPassword関数でFireBaseのAuthに引数を登録する。
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);   // ここのauthは[firebase javascript sdk]で作成したauth
      router.push("/login");                                         // 登録成功後のリダイレクト先
    } catch (error) {
      setErrorMessage("すでに登録されているメールアドレスです。");          // エラーが発生した場合はエラーメッセージを設定
      setEmail("");                                                  // エラーが発生した場合はemailを空にする
      setPassword("");                                               // エラーが発生した場合はpasswordを空にする
    }
  };

  // もし
  if (isLoading) {
    return null;
  }


  return (
    <>
      <h1>Register Page</h1>
      <form action="">
        <label htmlFor="">email</label>
        <input type="mail" value={email} onChange={handleEmailChange} />
        <label htmlFor="">password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <Button type="button" onClick={handleRegister}>
          Register
        </Button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default RegisterPage;
