import React from "react";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import styles from "@/styles/create-account/index.module.css";
import Image from "next/image";
import classNames from "classnames";
import { User } from "../../types/user";
import { UseAuth } from "../../context/auth";
import { useRouter } from "next/router";
import { db } from "../../firebase/client";
import { doc } from "firebase/firestore";

const CreateAccount = () => {
  // contextを使用(useContext)
  const { isLoading, isLoggedIn } = UseAuth();
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const submit = (data: User) => {
    
  };

  if(isLoading){
    return null
  }

  if(isLoggedIn){
    router.push("/")
    return null
  }

  return (
    <>
      <div className={styles.wrap}>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          <div className={styles.contents}>
            <h1>アカウント作成</h1>
            <div className={styles.child}>
              <div className={styles.name}>
                <label htmlFor="nickname">ニックネーム</label>
                <input
                  {...register("nickname", {
                    required: "必須入力です",
                    maxLength: {
                      value: 50,
                      message: "最大50文字です",
                    },
                  })}
                  autoComplete="name"
                  id="nickname"
                  name="nickname"
                  type="text"
                  className={classNames(
                    "",
                    errors.nickname ? styles.bbRed : ""
                  )}
                />
                {errors.nickname && (
                  <p className={styles.err}>{errors.nickname?.message}</p>
                )}
              </div>
              <div className={styles.age}>
                <label htmlFor="age">email</label>
                <input
                  {...register("email", {
                    required: "必須入力です",
                    maxLength: {
                      value: 50,
                      message: "最大50文字です",
                    },
                  })}
                  id="email"
                  name="mail"
                  type="text"
                  className={classNames("", errors.email ? styles.bbRed : "")}
                />
                {errors.email && (
                  <p className={styles.err}>{errors.email?.message}</p>
                )}
              </div>
              <div className={styles.pass}>
                <label htmlFor="profile">パスワード</label>
                <input
                  {...register("password", {
                    required: "必須入力です",
                    maxLength: {
                      value: 50,
                      message: "最大50文字です",
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  className={classNames(
                    "",
                    errors.password ? styles.bbRed : ""
                  )}
                />
                {errors.password && (
                  <p className={styles.err}>{errors.password?.message}</p>
                )}
              </div>
              <Button>アカウント作成</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
