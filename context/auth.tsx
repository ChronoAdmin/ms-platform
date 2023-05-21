// FirebaseからAuthの状態を監視するための関数をインポート
import { onAuthStateChanged } from "firebase/auth";
// 必要なReactのフックとTypeをインポート
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// Firebaseの認証オブジェクトをインポート
import { auth } from "../firebase/client";

// Contextは、（ログイン状態とロード状態を持つ）
type ContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
};

// Contextを作成。デフォルト値としてログイン状態はfalse、ロード状態はtrueを設定
const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  isLoading: true,
});

// Authの情報を提供するプロバイダーコンポーネント
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ロード状態の管理用のstate（初期値：true）
  const [isLoading, setIsLoading] = useState(true);
  // ログイン状態の管理用のstate（初期値：false）
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // コンポーネントがマウントされた時にFirebaseの認証状態を監視する
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // ユーザーが存在すればログイン状態とする（!!userはuserオブジェクトが存在すればtrueになる）
      setIsLoggedIn(!!user);
      // 読み込みが完了したのでロード状態をfalseにする
      setIsLoading(false);
    });
  }, []);

  // プロバイダーコンポーネントを返す。valueにはログイン状態とロード状態をセット
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Contextを使用するためのカスタムフック
export const UseAuth = () => useContext(AuthContext);
