import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Link, Navbar, Page, Popup } from "konsta/react";
import React, { useState } from "react";

import LoginForm from "./LoginForm";
import { AiOutlineClose } from "react-icons/Ai";
import SignUpForm from "./SignUpForm";

const LoginOrSignUp = () => {
  const supabase = useSupabaseClient();
  const [popupOpenedSignin, setPopupOpenedSignin] = useState(false);
  const [popupOpenedSignup, setPopupOpenedSignup] = useState(false);
  return (
    <div className="h-80">
      <div className="flex justify-center items-center flex-col">
        <div
          className="btn btn-primary"
          onClick={() => setPopupOpenedSignin(true)}
        >
          Login
        </div>
        <div className="divider text-base-content/60 m-0">or</div>
        <div
          className="btn btn-secondary"
          onClick={() => setPopupOpenedSignup(true)}
        >
          Signup
        </div>
      </div>
      <Popup
        opened={popupOpenedSignin}
        onBackdropClick={() => setPopupOpenedSignin(false)}
      >
        <Page>
          <Navbar
            title="Sign in to your account"
            right={
              <Link navbar onClick={() => setPopupOpenedSignin(false)}>
                <AiOutlineClose size={25} />
              </Link>
            }
          />
          <LoginForm />
        </Page>
      </Popup>
      <Popup
        opened={popupOpenedSignup}
        onBackdropClick={() => setPopupOpenedSignup(false)}
      >
        <Page>
          <Navbar
            title="Signup"
            right={
              <Link navbar onClick={() => setPopupOpenedSignup(false)}>
                <AiOutlineClose size={25} />
              </Link>
            }
          />
          <SignUpForm />
        </Page>
      </Popup>
    </div>
  );
};

export default LoginOrSignUp;
