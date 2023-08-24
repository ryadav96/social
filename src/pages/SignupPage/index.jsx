import RegistrationForm from "../../components/RegistrationForm";

function SignupPage() {
  

  return (
    <div
      className={`bg-[#27292d] flex justify-center items-center w-[100vw] flex-col h-[100vh] `}
    >
      <div className="w-[463px] box-border px-[24.5px] py-[42px] rounded-lg border-2 border-solid">
        <div
          className={`flex justify-start items-center flex-col grow-0 shrink-0 basis-auto box-border`}
        >
          <p
            className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-sm font-medium tracking-[0.03em] text-[#6b6c70]`}
          >
            SIGN UP
          </p>
          <p
            className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-lg font-semibold text-[white] mt-2`}
          >
            Create an account to continue
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default SignupPage;
