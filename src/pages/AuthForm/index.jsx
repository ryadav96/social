import LoginForm from "../../components/LoginForm";

function AuthForm() {
  return (
    <div
      className={`flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border mt-[45px]`}
    >
      <LoginForm />
      <p
        className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-sm font-normal text-[#7f8084] mt-3`}
      >
        <span className={`[font-family:Inter] text-sm font-medium`}>
          Not registered yet?{" "}
        </span>
        <span
          className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca]`}
        >
          Register →
        </span>
      </p>
    </div>
  );
}

export default AuthForm;
