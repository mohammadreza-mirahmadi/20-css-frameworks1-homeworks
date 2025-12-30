import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Header() {
  return (
    <header className="mt-4">
      <nav className="flex justify-between items-center">
        <div className="block lg:hidden">
          <Select>
            <SelectTrigger className="border-none">
              <SelectValue />
              <MenuIcon />
            </SelectTrigger>
            <SelectContent className="mt-8 px-2">
              <SelectItem value="action" className="hover:scale-105">
                About
              </SelectItem>
              <SelectItem value="blog" className="hover:scale-105">
                Blog
              </SelectItem>
              <SelectItem value="contact" className="hover:scale-105">
                Contact
              </SelectItem>
              <div className="h-[0.5px] w-[95%] mx-auto bg-gray-300 "></div>
              <SelectItem value="action" className="hover:scale-105">
                Action
              </SelectItem>
              <SelectItem value="another-action" className="hover:scale-105">
                Another action
              </SelectItem>
              <SelectItem value="dropdown-submenu" className="hover:scale-105">
                Dropdown submenu
              </SelectItem>
              <SelectItem value="404-page" className="hover:scale-105">
                404 page
              </SelectItem>
              <div className="my-4">
                <Button variant="outline" className="mr-3">
                  Login
                </Button>
                <Button>Login</Button>
              </div>
            </SelectContent>
          </Select>
        </div>

        <p className="font-bold text-sm">
          Tailwind <span className="font-normal">css</span>
        </p>

        <ul className="hidden lg:flex gap-2 items-center">
          <li>
            <Select>
              <SelectTrigger className="border-none">
                <SelectValue placeholder="Features" />
              </SelectTrigger>
              <SelectContent className="mt-8">
                <SelectItem value="action" className="hover:scale-105">
                  Action
                </SelectItem>
                <SelectItem value="another-action" className="hover:scale-105">
                  Another action
                </SelectItem>
                <SelectItem
                  value="dropdown-submenu"
                  className="hover:scale-105"
                >
                  Dropdown submenu
                </SelectItem>
                <SelectItem value="404-page" className="hover:scale-105">
                  404 page
                </SelectItem>
              </SelectContent>
            </Select>
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
