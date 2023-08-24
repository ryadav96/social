import CreatePostForm from "../CreatePostForm";
import PostCard from "../PostCard";

function CommunityDashboard() {
  const sampleContentArray = [
    {
      userName: "John Doe",
      contentType: "😄",
      postContent:
        "Had an incredibly productive day at work today! Spent hours coding and solving complex frontend challenges. I managed to squash a few bugs that had been bothering me for a while. Feeling accomplished and ready to tackle more tasks tomorrow. 💪👩‍💻",
      postComments: "10 Comments",
    },
    {
      userName: "Jane Smith",
      contentType: "😢",
      postContent:
        "Feeling a bit overwhelmed with tasks right now. The workload seems never-ending, and it's hard to keep up. Despite the challenges, I'm reminding myself to take things one step at a time. Your support and encouragement mean a lot. Let's navigate through this together. 😔",
      postComments: "12 Comments",
    },
    {
      userName: "Alex Johnson",
      contentType: "🎉",
      postContent:
        "Celebrating my promotion at work! After years of dedicated effort, I finally reached a major milestone in my career. From writing my first lines of code to leading frontend projects, this journey has been incredible. Thank you all for your constant inspiration and motivation. Here's to new heights! 🥳🎈",
      postComments: "8 Comments",
    },
    {
      userName: "Emily Brown",
      contentType: "😋",
      postContent:
        "Trying out a new recipe today. Cooking up a storm in the kitchen! The scent of fresh herbs and sizzling ingredients fills the air as I experiment with flavors. Food has always been a source of joy for me, and I'm excited to share this culinary adventure with all of you. Bon appétit! 🍳👩‍🍳",
      postComments: "15 Comments",
    },
    {
      userName: "Michael Williams",
      contentType: "🚴‍♂️",
      postContent:
        "Took my Royal Enfield out for a long ride today. Clearing my mind and enjoying the open road! The wind against my face, the sound of the engine, and the changing landscapes are truly therapeutic. It's moments like these that remind me of the beauty of life's simple pleasures. Where's your favorite road to ride? 🏍️🌄",
      postComments: "7 Comments",
    },
  ];

  // You can now copy and use the 'sampleContentArray' as needed.

  return (
    <div
      className={`flex justify-start items-stretch flex-col gap-3 grow-0 shrink-0 basis-auto box-border mt-[38px]`}
    >
      <CreatePostForm />
      {sampleContentArray.map((post) => (
        <PostCard
          key={post.userName}
          userName={post.userName}
          contentType={post.contentType}
          postContent={post.postContent}
          postComments={post.postComments}
        />
      ))}
    </div>
  );
}

export default CommunityDashboard;
