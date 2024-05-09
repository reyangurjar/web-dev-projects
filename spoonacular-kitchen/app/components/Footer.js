import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-8 lg:px-10">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link className="hover:underline" href="#">
            Contact
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link className="hover:text-gray-400 text-white" href="#">
            {/* <FacebookIcon className="h-6 w-6" /> */}

          </Link>
          <Link className="hover:text-gray-400" href="#">
            {/* <TwitterIcon className="h-6 w-6" /> */}
           
          </Link>
          <Link className="hover:text-gray-400" target="_blank" href="https://github.com/reyangurjar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
