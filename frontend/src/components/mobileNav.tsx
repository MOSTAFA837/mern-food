/* eslint-disable no-constant-condition */
import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./mobileNavLinks";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-rose-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {true ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-rose-500" />
              mostafa@gmail.com
            </span>
          ) : (
            <span> Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {true ? (
            <MobileNavLinks />
          ) : (
            <Button className="flex-1 font-bold bg-rose-500">Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
