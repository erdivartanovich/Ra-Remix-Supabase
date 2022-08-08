import { Admin, Resource, ListGuesser, I18nProvider } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import authProvider from "./auth/supabase";
import polyglotI18nProvider from "ra-i18n-polyglot";
import localeIndo from "./i18n/locale/id";

const dataProvider = postgrestRestProvider("/api/resources");
const translation: Record<string, any> = {
  id: localeIndo,
};

const i18nProvider: I18nProvider = polyglotI18nProvider(
  (locale) => translation[locale],
  "id"
);

const App = () => (
  <Admin
    basename="/admin"
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    requireAuth
  >
    <Resource name="test_posts" list={ListGuesser} />
  </Admin>
);

export default App;
