import AboutPage from "../components/AboutPage"
import ProjectPage from "../components/projectPage"
import SkillsPage from "../components/SkillsPage"
import { pageType } from "../types/types"

function MainPanel(props: {
  currPage: string
  setCurrPage: (page: string) => void
}) {

  return (
    <>
      <div className="bg-black text-white h-screen w-full">
        {(props.currPage === pageType.pageTypeAbout) && <AboutPage />}
        {(props.currPage === pageType.pageTypeProjects) && <ProjectPage />}
        {(props.currPage === pageType.pageTypeSkills) && <SkillsPage />}
      </div >
    </>
  )
}

export default MainPanel
