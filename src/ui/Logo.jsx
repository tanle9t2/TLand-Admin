import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <img
        className="w-[188px] h-[130px] object-contain"
        src="/public/logo.png"
      />
    </div>
  );
}

export default Logo;
