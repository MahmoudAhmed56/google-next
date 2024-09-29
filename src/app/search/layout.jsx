import SearchHeader from "@/components/SearchHeader"
import "../../app/globals.css"
const layout = ({children}) => {
  return (
    <div>
      <SearchHeader/>
      {children}
    </div>
  )
}

export default layout