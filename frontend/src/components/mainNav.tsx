/* eslint-disable no-constant-condition */
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import UsernameMenu from "./usernameMenu";

const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
      {true ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-rose-500">
            Order Status
          </Link>

          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-rose-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
