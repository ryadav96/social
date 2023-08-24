import CreatePost from "../CreatePost";

function CreatePostButton() {
  return (
    <div className="bg-[#27292d] flex flex-col justify-between items-stretch grow-0 shrink-0 basis-auto box-border px-[22px] py-[26px] rounded-lg border-2 border-[#35373b] border-solid">
      <CreatePost />
      <button
        className="w-[111px] h-[43px] box-border rounded bg-[#4a96ff] font-[Inter] text-base font-medium text-white cursor-pointer block mt-4 border-none self-end"
      >
        Post
      </button>
    </div>
  );
}

export default CreatePostButton;
