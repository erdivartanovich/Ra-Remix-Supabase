import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {
  Admin,
  I18nProvider,
  Resource,
  Login,
  EditGuesser,
  ListGuesser,
} from "react-admin";
import authProvider from "~/lib/supabase/auth/authProvider";
import localeIndo from "./i18n/locale/id";
import { SpuEdit, SpuList } from "./spu";

const dataProvider = postgrestRestProvider("/api/resources");
const translation: Record<string, any> = {
  id: localeIndo,
};

const i18nProvider: I18nProvider = polyglotI18nProvider(
  (locale) => translation[locale],
  "id"
);

const MyLoginPage = () => (
  <Login backgroundImage="https://source.unsplash.com/random/1600x900/daily" />
);

const App = () => (
  <Admin
    basename="/admin"
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
    requireAuth
    title={"POSTGREST-RLS"}
  >
    {(permissions) => {
      console.log(permissions.acl.test_posts.read);
      return (
        <>
          <Resource name="spus" list={SpuList} edit={SpuEdit} />
          <Resource name="skus" list={ListGuesser} edit={EditGuesser} />
          {permissions.acl.test_posts.read && (
            <Resource name="test_posts" list={ListGuesser} edit={EditGuesser} />
          )}
        </>
      );
    }}
  </Admin>
);

export default App;
