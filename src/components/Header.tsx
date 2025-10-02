import { Link } from "react-router";
import { Boxes, Grip } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  return (
    <header className="bg-neutral-800 text-white ">
      <div className="flex justify-between items-center">
        <div className="bg-primary px-5 py-3">
          <Link to="/">
            <Boxes className="h-8 w-8" />
          </Link>
        </div>
        <nav className="flex items-center gap-4 mr-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="avatar">AG</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 shadow-none border border-black">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">User</h4>
                  <p className="text-muted-foreground text-sm">Admin User</p>
                </div>
                <Button variant="black" size="sm" className="w-full">
                  Sign Out
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Grip className="h-6 w-6" />
            </PopoverTrigger>
            <PopoverContent className="w-80 shadow-none border border-black">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">App Settings</h4>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </div>
    </header>
  );
}

export default Header;
