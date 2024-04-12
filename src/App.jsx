import "./App.css";
import { Box } from "@mui/material";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
  SearchBar,
} from "./components";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Feed />,
//   },
//   {
//     path: "/video/:id",
//     element: <VideoDetail />,
//   },
//   {
//     path: "/channel/:id",
//     element: <ChannelDetail />,
//   },
//   {
//     path: "/search/:searchTerm",
//     element: <SearchFeed />,
//   },
// ]);

function App() {
  return (
    // <>
    //   <Box sx={{ backgroundColor: "#000", color: 'white' }}>
    //     <Navbar />
    //     <RouterProvider router={router} />
    //   </Box>
    // </>

    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
