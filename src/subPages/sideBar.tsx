import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { FaSquareXTwitter } from "react-icons/fa6"
import { pageType } from "../types/types"

function SideBar(props: {
  currPage: string
  setCurrPage: (page: string) => void
}) {
  const pages = [pageType.pageTypeAbout, pageType.pageTypeProjects, pageType.pageTypeSkills]

  return (
    <div className="h-screen w-64 bg-white border-r px-6 py-8 flex flex-col">
      {/* Name */}
      <h1 className="text-2xl font-extrabold tracking-tight">
        Armaan
      </h1>
      <div className="whitespace-nowrap text-sm text-neutral-500">
        Backend & Systems Engineer
      </div>

      {/* Navigation (centered) */}
      <ul className="flex-1 flex flex-col justify-center space-y-3">
        {pages.map((page) => {
          const isActive = props.currPage === page

          return (
            <li
              key={page}
              onClick={() => props.setCurrPage(page)}
              className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-md transition-all
            ${isActive
                  ? "font-bold text-black bg-gray-100"
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
                }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition-opacity ${isActive ? "bg-black opacity-100" : "opacity-0"
                  }`}
              />
              {page}
            </li>
          )
        })}
      </ul>

      {/* Social Links */}
      <div className="flex gap-4 text-gray-600">
        <a
          href="https://github.com/Ahmed-Armaan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform hover:scale-110"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="mailto:ahmedarmaan2022@gmail.com"
          className="hover:text-black transition-transform hover:scale-110"
        >
          <MdOutlineEmail size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/armaan-ahmed-328b68255/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform hover:scale-110"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://x.com/hi_Armaan_here"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform hover:scale-110"
        >
          <FaSquareXTwitter size={22} />
        </a>
      </div>
    </div>
  )
}

export default SideBar
