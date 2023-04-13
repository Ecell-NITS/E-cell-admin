import {dataProvider }from "./components/dataProvider"
import { Admin, Resource, ListGuesser } from "react-admin";
import EventList from './components/EventList'
import EventCreate from "./components/EventCreate"
import EventEdit from "./components/EventEdit";
import UserList from './components/MessageList'
import ApprovedList from "./components/ApprovedMessageList";
import UserEdit from "./components/MessageEdit"
import { authProvider } from "./components/authprovider"

const App = () => (
 <Admin authProvider={authProvider} dataProvider={dataProvider}>
   <Resource name="event" list={EventList} create={EventCreate} edit={EventEdit} />
   <Resource name="message" list={UserList}/>
   <Resource name="approvedmessages" list={ApprovedList}/>
 </Admin>
);

export default App;
