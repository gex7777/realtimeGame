import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { List, ListButton, Popup } from "konsta/react";
import React, { useEffect, useState } from "react";
import { Database } from "../utils/database.types";
import EditProfile from "./EditProfile";
import ProfileDisplay from "./ProfileDisplay";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

interface Iprops {
  user: any;
}
const Profile = ({ user }: Iprops) => {
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabaseClient<Database>();
  const [popupOpened, setPopupOpened] = useState(false);

  useEffect(() => {
    getProfile();
  }, [user]);

  async function getProfile() {
    try {
      setLoading(true);
      setAvatarUrl("placeholderprofilepic.jpg");
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      console.log("im fired");

      if (data) {
        setUsername(data.username);

        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  console.log(avatar_url);

  return (
    <>
      <div className="flex flex-col">
        <ProfileDisplay username={username} avatar_url={avatar_url} />

        <div>
          <List inset strong>
            <ListButton onClick={() => setPopupOpened(true)}>
              Edit Profile
            </ListButton>
          </List>
        </div>
      </div>
      <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
        <EditProfile
          setPopupOpened={(v) => {
            setPopupOpened(v);
            getProfile();
          }}
        />
      </Popup>

      <div className="btn" onClick={() => supabase.auth.signOut()}>
        {" "}
        Logout
      </div>
    </>
  );
};

export default Profile;
