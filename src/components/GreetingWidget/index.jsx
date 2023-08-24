import CommunityDashboard from "../CommunityDashboard";

function GreetingWidget() {
  return (
    <div
      className={`bg-[#131319] flex justify-start w-[100vw] h-full items-center flex-col box-border pt-[69px] px-[368px]`}
    >
      <div className="max-w-[700px]">
      <div className={`self-stretch grow-0 shrink-0 basis-auto box-border`}>
        <p
          className={`box-border [font-family:Inter] text-[28px] font-medium text-[#c5c7ca]`}
        >
          Hello Jane
        </p>
        <p
          className={`max-w-[525px] box-border [font-family:Inter] text-base font-normal leading-[123.94366455078125%] text-[#7f8084] mt-3`}
        >
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <CommunityDashboard />
      </div>
    </div>
  );
}

export default GreetingWidget;
