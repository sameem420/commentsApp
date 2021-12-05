import CommentDetails from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
import faker from "faker";

function App() {
  return (
    <div className="ui container comments" style={{ marginTop: "10px" }}>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 04:45 PM"
          content="Nice Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="John"
          timeAgo="Today at 11:45 PM"
          content="it's a nice subject!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Tyler"
          timeAgo="Today at 02:23 AM"
          content="Nice writing!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
