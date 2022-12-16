import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Link, Navbar, Page, Popup } from "konsta/react";
import React, { useState } from "react";

const Login = () => {
  const supabase = useSupabaseClient();
  const [popupOpened, setPopupOpened] = useState(false);
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
        <div className="btn btn-primary" onClick={() => setPopupOpened(true)}>
          Login
        </div>
        <div className="divider text-base-content/60 m-0">or</div>
        <div className="btn btn-secondary">Signup</div>
      </div>
      <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
        <Page>
          <Navbar
            title="Popup"
            right={
              <Link navbar onClick={() => setPopupOpened(false)}>
                Close
              </Link>
            }
          />
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </Page>
      </Popup>
    </div>
  );
};

export default Login;
