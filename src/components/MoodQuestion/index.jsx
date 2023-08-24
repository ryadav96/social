function MoodQuestion() {
  return (
    <div className={`bg-[#191920] flex justify-start items-center flex-row h-[78px] grow-0 shrink-0 basis-auto box-border mt-4 px-4 rounded-lg`}>
      <div className={`bg-[#27292d] flex justify-center items-stretch flex-col h-12 grow-0 shrink-0 basis-auto box-border px-[15px] rounded-[50%]`}>
        <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-lg font-medium text-[black]`}>💬</p>
      </div>
      <p className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-base font-normal text-[#7f8084] ml-4`}>How are you feeling today?</p>
    </div>
  );
}

export default MoodQuestion;
