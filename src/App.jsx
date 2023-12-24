
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Nav/Header";
import Feed from "./components/Feed/Feed.jsx";
import SearchResult from "./components/SearchResult/SearchResult.jsx";
import VideoDetails from "./components/Videos/VideoDetails.jsx";
import { AppContext } from "./context/contextApi.jsx";
import "./index.css";
const App = () => {
  
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header /> 
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
