import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className={`flex justify-start items-center flex-col gap-[14.5px]`}>
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
          value={"test@test.com"}
          className={`rounded h-[46px] w-full box-border [font-family:Inter] bg-[#35373B] border-[1.5px] border-[#656970] border-solid p-2 text-[#7f8084]`}
        />
      </div>

      <div
        className={`flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto box-border`}
      >
        <div
          className={` box-border h-[72px] w-full flex-row items-center [justify-content:start] border-[none]`}
        >
          <label
            className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
          >
            Password
          </label>
          <div
            className={`rounded h-[46px] w-full box-border flex flex-row items-center [justify-content:start] border-[1.5px] border-[#35373b] border-solid`}
          >
            <input
              placeholder="Enter password"
              type="password"
              value={"123443433"}
              className={`rounded h-[46px] w-full box-border [font-family:Inter] bg-[#35373B] border-[1.5px] border-[#656970] border-solid p-2 text-[#7f8084]`}
            />
          </div>
        </div>

        <p
          className={`ml-[-105px] grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-xs font-medium text-[#c5c7ca]`}
        >
          Forgot password?
        </p>
      </div>
      <button
        className={`w-full h-[43px] grow-0 shrink-0 basis-auto box-border rounded bg-[#4a96ff] [font-family:Inter] text-base font-medium text-[white] cursor-pointer block mt-1 border-[none]`}
        onClick={() => {
          navigate("/timeline");
        }}
      >
        Login now
      </button>
    </div>
  );
}

export default LoginForm;
