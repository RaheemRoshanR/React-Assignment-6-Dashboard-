import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Posts from "../screens/post";
import SinglePost from "../screens/singlepost";
import Comments from "../screens/dashboardscreens/comments";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashoboard";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
