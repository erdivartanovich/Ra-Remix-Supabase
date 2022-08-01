// in app/components/App.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";

const dataProvider = postgrestRestProvider("/admin/api");

const App = () => (
  <Admin basename="/admin" dataProvider={dataProvider}>
    <Resource name="test_posts" list={ListGuesser} />
  </Admin>
);

export default App;
