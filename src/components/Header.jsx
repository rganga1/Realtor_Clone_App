import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  // console.log("location", location);
  // console.log("Path",`${
  //   pathMathRoute("/") ? "text-black border-b-red-500":""
  // }`)
  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <header className="flex items-center justify-between max-w-6xl px-3 mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  ${
                pathMathRoute("/")
                  ? "text-black border-b-[3px] border-b-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  ${
                pathMathRoute("/offers")
                  ? "text-black border-b-[3px] border-b-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  ${
                pathMathRoute("/sign-in")
                  ? "text-black border-b-[3px] border-b-red-500"
                  : "text-gray-400"
              }`}
              onClick={() => navigate("/sign-in")}>
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
