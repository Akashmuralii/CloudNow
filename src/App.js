import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Component/UserList";
import AddUser from "./Component/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={UserList} />
          {/* <Route path="/addUser" Component={AddUser} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
