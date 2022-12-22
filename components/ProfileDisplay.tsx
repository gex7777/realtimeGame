import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import { Database } from "../utils/database.types";

interface Iprops {
  avatar_url: string | null;
  username: string | null;
}
const ProfileDisplay = ({ avatar_url, username }: Iprops) => {
  const supabase = useSupabaseClient<Database>();
  useEffect(() => {
    if (avatar_url) {
      downloadImage(avatar_url);
    }
  }, [avatar_url]);
  const [url, setUrl] = useState("");
  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }
  return (
    <div className="flex flex-col items-center space-x-2">
      <div className="online avatar">
        <div className="mask mask-hexagon bg-base-content h-16 w-16 bg-opacity-10 p-px">
          {url ? (
            <img
              src={url}
              alt="Avatar Tailwind CSS Component"
              className="mask mask-hexagon"
            />
          ) : (
            <img
              src="https://tdgiyxystsukyxwwlobp.supabase.co/storage/v1/object/sign/avatars/placeholderprofilepic.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3BsYWNlaG9sZGVycHJvZmlsZXBpYy5qcGciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE4MTk3NjIsImV4cCI6MTk4NzE3OTc2Mn0.pRoZxcGPB4iNJ4WRMFx5Uoc22RRfA7_pEqwvSdC6WTc&t=2022-12-23T18%3A22%3A42.401Z"
              alt="Avatar Tailwind CSS Component"
              className="mask mask-hexagon"
            />
          )}
        </div>
      </div>
      <div className="text-lg font-extrabold">{username}</div>{" "}
    </div>
  );
};

export default ProfileDisplay;
