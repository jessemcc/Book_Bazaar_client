import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import SingleBookPage from "./pages/SingleBookPage/SingleBookPage";
import AuthorsPage from "./pages/AuthorsPage/AuthorsPage";
import SingleAuthorPage from "./pages/SingleAuthorPage/SingleAuthorPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.scss";

function App() {
  return (
    <Router>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookid" element={<SingleBookPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/authors/:authorid" element={<SingleAuthorPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
