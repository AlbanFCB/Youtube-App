import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.js";
import Feed from "./components/Feed.js";
import VideoDetail from "./components/VideoDetail.js";
import ChannelDetail from "./components/ChannelDetail.js";
import SearchFeed from "./components/SearchFeed.js";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
