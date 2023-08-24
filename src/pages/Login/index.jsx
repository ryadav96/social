import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const navigate = useNavigate();
  return (
    <div
      className={`flex justify-center items-center w-full h-[100vh] flex-col grow-0 shrink-0 basis-auto box-border`}
    >
      <div className="w-[463px] box-border px-[24.5px] py-[42px] rounded-lg border-2 border-solid">
        <LoginForm />
        <p
          className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-sm font-normal text-[#7f8084] mt-3`}
        >
          <span className={`[font-family:Inter] text-sm font-medium`}>
            Not registered yet?{" "}
          </span>
          <span
            className={`[font-family:Inter] text-sm font-medium text-[#c5c7ca] hover:cursor-pointer hover:text-[#4a96ff] `}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register →
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
