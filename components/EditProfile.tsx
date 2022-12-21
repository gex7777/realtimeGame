import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Block, Link, Navbar, Page } from "konsta/react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Database } from "../utils/database.types";
import Avatar from "./Avatar";
import { AiOutlineClose } from "react-icons/Ai";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
interface Iprops {
  setPopupOpened: (b: boolean) => void;
}
interface IFormInput {
  name: string;
}
const EditProfile = ({ setPopupOpened }: Iprops) => {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = ({ name }) =>
    updateProfile({ username: name, avatar_url });
  useEffect(() => {
    getProfile();
  }, [user]);
  console.log(avatar_url);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setValue("name", data.username ?? "");

        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    avatar_url,
  }: {
    username?: Profiles["username"];

    avatar_url?: Profiles["avatar_url"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,

        avatar_url,
        updated_at: new Date().toISOString(),
      };
      console.log(updates);
      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Page>
      <Navbar
        title="Edit profile"
        right={
          <Link navbar onClick={() => setPopupOpened(false)}>
            <AiOutlineClose size={25} />
          </Link>
        }
      />
      <div className="flex m-3  flex-col items-center">
        {!!user && (
          <Avatar
            uid={user.id}
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ avatar_url: url });
              getProfile();
            }}
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 ">
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium text-gray-900 ${
                errors.name ? "text-red-700 dark:text-red-500" : ""
              } dark:text-white`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              aria-invalid={errors.name ? "true" : "false"}
              className={`${
                errors.name
                  ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                  : ""
              } shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
              placeholder="my name"
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name?.type === "required" ? (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> name cannot be empty
              </p>
            ) : null}
          </div>

          <button type="submit" disabled className="btn ">
            Change
          </button>
        </form>
      </div>
    </Page>
  );
};

export default EditProfile;
