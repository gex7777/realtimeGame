import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../utils/database.types";
import Image from "next/image";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string;
  url: Profiles["avatar_url"];
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = useSupabaseClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) {
      downloadImage(url);
    }
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uid}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
      setAvatarUrl("placeholderprofilepic.jpg");
      !!url && downloadImage(url);
    } catch (error) {
      alert("Error uploading avatar!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };
  console.log(avatarUrl);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="avatar h-44 w-48 my-3">
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar Tailwind CSS Component" />
        ) : (
          <img
            src="https://tdgiyxystsukyxwwlobp.supabase.co/storage/v1/object/sign/avatars/placeholderprofilepic.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3BsYWNlaG9sZGVycHJvZmlsZXBpYy5qcGciLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE4MTk3NjIsImV4cCI6MTk4NzE3OTc2Mn0.pRoZxcGPB4iNJ4WRMFx5Uoc22RRfA7_pEqwvSdC6WTc&t=2022-12-23T18%3A22%3A42.401Z"
            alt="Avatar Tailwind CSS Component"
          />
        )}
      </div>

      <div>
        <label className="btn btn-primary " htmlFor="single">
          {uploading ? "Uploading ..." : "Browse Photo"}
        </label>
        <input
          className="hidden absolute "
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
