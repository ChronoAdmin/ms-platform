// lib/auth.ts
import { GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/client";

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      alert(`${result.user.displayName}さん、こんにちは`);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const login = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    alert(`ログイン成功：${result.user.email}`);
    return null; // No error
  } catch (e) {
    console.log(e);
    return "メールアドレスかパスワードが一致しません"; // Return error message
  }
};

export const logout = () => {
  return signOut(auth).then(() => {
    alert("サインアウト");
  });
};
