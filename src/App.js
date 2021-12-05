import CommentDetails from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const URL = "https://randomuser.me/api/?inc=picture&results=3";
    const getAvatar = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      const userData = await [...data.results];
      setImages(userData);
    };
    getAvatar();
  }, []);

  return images.length > 0 ? (
    <div className="ui container comments" style={{ marginTop: "10px" }}>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 04:45 PM"
          content="Nice Post!"
          avatar={images[0]?.picture.thumbnail}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="John"
          timeAgo="Today at 11:45 PM"
          content="it's a nice subject!"
          avatar={images[1]?.picture.thumbnail}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Tyler"
          timeAgo="Today at 02:23 AM"
          content="Nice writing!"
          avatar={images[2]?.picture.thumbnail}
        />
      </ApprovalCard>
    </div>
  ) : (
    <div className="ui container center aligned">
      <img src="https://i.imgur.com/0hewHKs.gif" alt="Loading" width="400px" />
    </div>
  );
}

export default App;
