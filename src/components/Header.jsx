import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <header className="mt-4">
      <nav className="flex justify-between items-center">
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MenuIcon /> <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Another action</DropdownMenuItem>
                <DropdownMenuItem>Dropdown submenu</DropdownMenuItem>
                <DropdownMenuItem>404 page</DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuGroup>
              <Button variant="outline" className="mr-3">
                Login
              </Button>
              <Button>Login</Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="font-bold text-sm">
          Tailwind <span className="font-normal">css</span>
        </p>

        <ul className="hidden lg:flex gap-2 items-center">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Features</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Action</DropdownMenuItem>
                  <DropdownMenuItem>Another action</DropdownMenuItem>
                  <DropdownMenuItem>Dropdown submenu</DropdownMenuItem>
                  <DropdownMenuItem>404 page</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <a href="#" className="px-2.5 py-1 hover:scale-50">
              About
            </a>
          </li>
          <li>
            <a href="#" className="px-2.5 py-1 hover:scale-50">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="px-2.5 py-1 hover:scale-50">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden lg:block">
          <Button variant="outline" className="mr-3">
            Login
          </Button>
          <Button>Login</Button>
        </div>
      </nav>

      <section className="w-full flex flex-col-reverse lg:flex-row lg:justify-between mt-8 text-left">
        <div className="w-ful lg:w-[50%] flex flex-col justify-center align-middle">
          <h1 className="scroll-m-20 text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-balance w-xs md:w-lg">
            Scalable Apps with frameworks
          </h1>
          <p className="leading-5 not-first:mt-6 my-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptate et neque earum iste hic consequatur nulla deserunt
            architecto numquam!
          </p>
          <div>
            <Button className="mb-3 md:mb-0 md:mr-3 block w-full md:w-auto md:inline">
              Download for Free
            </Button>
            <Button
              variant="outline"
              className="block w-full md:w-auto md:inline"
            >
              Github Repo
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
          <img
            src="images/hero-source.svg"
            alt="Banner"
            className="w-[90%] lg:w-[75%]"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
