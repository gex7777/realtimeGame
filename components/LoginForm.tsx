import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import React from "react";

const LoginForm = () => {
  const supabase = useSupabaseClient();

  return (
    <div className="m-3">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          className: {
            anchor: "link link-primary",
            button: "btn btn-primary",
            loader: "loading",
            input:
              "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          },
          variables: {
            default: {
              colors: {
                brand: "#007aff",
                brandAccent: "#3a99ff",
              },
            },
          },
        }}
        providers={["google", "facebook", "twitter"]}
      />
    </div>
  );
};

export default LoginForm;
