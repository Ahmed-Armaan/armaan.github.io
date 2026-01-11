import { useState } from "react"
import SideBar from "./subPages/sideBar"
import MainPanel from "./subPages/mainPanel"
import { pageType } from "./types/types"

function App() {
  const [currPage, setCurrPage] = useState(pageType.pageTypeAbout)
  return (
    <>
      <div className="flex flex-row">
        <SideBar currPage={currPage} setCurrPage={setCurrPage} />
        <MainPanel currPage={currPage} setCurrPage={setCurrPage} />
      </div>
    </>
  )
}

export default App
