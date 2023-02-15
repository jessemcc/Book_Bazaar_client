import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import SingleBookPage from "./pages/SingleBookPage/SingleBookPage";
import AuthorsPage from "./pages/AuthorsPage/AuthorsPage";
import SingleAuthorPage from "./pages/SingleAuthorPage/SingleAuthorPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PageHeader from "./components/PageHeader/PageHeader";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadBook from "./pages/UploadBook/UploadBook";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount";
import DeleteBookPage from "./pages/DeleteBookPage/DeleteBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";
import "./App.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <PageHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookid" element={<SingleBookPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route
          path="/authors/:authorid"
          element={<SingleAuthorPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/profile/:authorid" element={<ProfilePage />} />
        <Route path="/upload/:authorid" element={<UploadBook />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route
          path="/profile/:authorid/delete"
          element={<DeleteAccount setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/profile/:authorid/delete/:bookid"
          element={<DeleteBookPage />}
        />
        <Route path="/profile/:authorid/edit" element={<EditProfilePage />} />
        <Route
          path="/profile/:authorid/edit/:bookid"
          element={<EditBookPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
