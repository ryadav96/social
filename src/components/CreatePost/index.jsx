import MoodQuestion from "../MoodQuestion";

function CreatePost() {
  return (
    <div className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border`}>
      <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-lg font-medium text-[#c5c7ca]`}>Create post</p>
      <MoodQuestion />
    </div>
  );
}

export default CreatePost;
