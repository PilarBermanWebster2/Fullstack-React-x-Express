import { BrowserRouter, Routes, Route } from "react-router-dom"; // Mengimpor komponen yang diperlukan dari react-router-dom
import UserList from "./components/UserList"; // Mengimpor komponen UserList
import AddUser from "./components/AddUser"; // Mengimpor komponen AddUser
import EditUser from "./components/EditUser"; // Mengimpor komponen EditUser

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<UserList />}></Route> {/* Rute untuk daftar pengguna */}
        <Route path="/add" element={<AddUser />}></Route> {/* Rute untuk menambah pengguna */}
        <Route path="/edit/:id" element={<EditUser />}></Route> {/* Rute untuk mengedit pengguna berdasarkan ID */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
