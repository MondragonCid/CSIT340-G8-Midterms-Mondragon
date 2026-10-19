import { useState } from "react";
import SideBar from "./components/Sidebar";
import Docs from "./components/Docs";
import Guide from "./components/Guide";
import Feedback from "./components/Feedback";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead((prev) => prev + 1);
  }

  function handleBookmark() {
    setBookmarks((prev) => prev + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <SideBar />
      <Guide
        read={read}
        bookmarks={bookmarks}
        onRead={handleRead}
        onBookmark={handleBookmark}
        onReset={handleReset}
      />
      <Docs />
      <Feedback />
      
    </div>
  );
}

export default App;