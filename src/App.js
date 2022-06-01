import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/User/AddUser';
import AddCategory from './pages/Category/AddCategory';
import UserList from './pages/User/List';
import CategoryList from './pages/Category/List';
import AddProduct from './pages/Product/AddProduct';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-new-user" element={<AddUser />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/create-new-category" element={<AddCategory />} />
      <Route path="/category-list" element={<CategoryList />} />
      <Route path="/create-new-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
