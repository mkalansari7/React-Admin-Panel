import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostCreate, UserList } from "../users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      create={PostCreate}
    />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
