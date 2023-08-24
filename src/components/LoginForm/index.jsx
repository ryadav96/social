import AuthIcon from "./icons/authicon";

function LoginForm() {
  return (
    <div
      className={`flex justify-start items-center flex-col gap-[14.5px] grow-0 shrink-0 basis-auto box-border`}
    >
      <div
        className={`self-stretch grow-0 shrink-0 basis-auto box-border h-[72px] max-w-[418px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
        >
          Email or Username
        </label>
        <input
          placeholder="Enter your email or username"
          type="text"
          className={`rounded h-[46px] w-full box-border [font-family:Inter] text-base font-normal pl-[13.5px] border-[1.5px] border-[#35373b] border-solid text-[#7f8084]`}
        />
      </div>

      <div
        className={`flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto box-border`}
      >
        <div
          className={`grow shrink-0 basis-auto box-border h-[72px] max-w-[418px] flex-row items-center [justify-content:start] border-[none]`}
        >
          <label
            className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
          >
            Password
          </label>
          <div
            className={`rounded h-[46px] max-w-[418px] box-border flex flex-row items-center [justify-content:start] border-[1.5px] border-[#35373b] border-solid`}
          >
            <input
              placeholder="Enter your password"
              type="text"
              className={`bg-transparent w-full [font-family:Inter] text-base font-normal box-border [outline:none] [background:none] ml-[13.5px] border-[none] text-[#7f8084]`}
            />
            <AuthIcon className="w-5 h-5 text-[#7f8084] flex mr-[11.5px] mt-[13.5px] mb-[12.5px]" />
          </div>
        </div>

        <p
          className={`ml-[-105px] grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-xs font-medium text-[#c5c7ca]`}
        >
          Forgot password?
        </p>
      </div>
      <button
        className={`w-[415px] h-[43px] grow-0 shrink-0 basis-auto box-border rounded bg-[#4a96ff] [font-family:Inter] text-base font-medium text-[white] cursor-pointer block mt-1 border-[none]`}
      >
        Login now
      </button>
    </div>
  );
}

export default LoginForm;
