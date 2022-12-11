// Konsta UI components
import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
} from "konsta/react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Layout from "../components/Layout";
export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container main">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <div>
          <Navbar title="My App" />

          <Block>
            <p>
              Here is your Next.js & Konsta UI app. Lets see what we have here.
            </p>
          </Block>
          <BlockTitle>Navigation</BlockTitle>
          <List>
            <ListItem href="/about/" title="About" />
            <ListItem href="/form/" title="Form" />
          </List>

          <Block className="flex space-x-4">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </Block>
        </div>
      )}
    </div>
  );
}
