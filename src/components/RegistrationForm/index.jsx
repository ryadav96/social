import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  return (
    <div
      className={`flex justify-start items-stretch flex-col gap-[14.5px] grow-0 shrink-0 basis-auto box-border mt-[45px]`}
    >
      <div
        className={`grow-0 shrink-0 basis-auto box-border h-[72px] max-w-[418px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
        >
          Email
        </label>
        <input
          placeholder="Enter your email"
          type="text"
          className={`bg-transparent rounded h-[46px] w-full box-border [font-family:Inter] text-base font-normal pl-[13.5px] border-[1.5px] border-[#35373b] border-solid text-[#7f8084]`}
        />
      </div>

      <div
        className={`grow-0 shrink-0 basis-auto box-border h-[72px] max-w-[418px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
        >
          Username
        </label>
        <input
          placeholder="Choose a preferred username"
          type="text"
          className={` bg-transparent rounded h-[46px] w-full box-border [font-family:Inter] text-base font-normal pl-[13.5px] border-[1.5px] border-[#35373b] border-solid text-[#7f8084]`}
        />
      </div>
      <div
        className={`grow-0 shrink-0 basis-auto box-border h-[72px] max-w-[418px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={`bg-transparent [font-family:Inter] text-sm font-medium text-[#c5c7ca] block mb-[8.5px]`}
        >
          Password
        </label>
        <div
          className={`rounded h-[46px] max-w-[418px] box-border flex flex-row items-center [justify-content:start] border-[1.5px] border-[#35373b] border-solid`}
        >
          <input
            placeholder="Choose a strong password"
            type="text"
            className={`bg-transparent w-full [font-family:Inter] text-base font-normal box-border [outline:none] [background:none] ml-[13.5px] border-[none] text-[#7f8084]`}
          />
        </div>
      </div>

      <div className={`grow-0 shrink-0 basis-auto box-border mt-1`}>
        <button
          className={`w-[415px] h-[43px] box-border rounded bg-[#4a96ff] [font-family:Inter] text-base font-medium text-[white] cursor-pointer block border-[none]`}
          onClick={() => {
            navigate("/timeline");
          }}
        >
          Continue
        </button>

        <p
          className={`box-border [font-family:Inter] text-sm font-normal text-[#7f8084] mt-3`}
        >
          <span className={`[font-family:Inter] text-sm font-medium`}>
            Already have an account?{" "}
          </span>
          <span
            className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca]`}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login →
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
