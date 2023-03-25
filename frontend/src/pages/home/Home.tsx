import Banner from "../../Layouts/banner/Banner"
import Navbar from "../../Layouts/Navbar/Navbar"
import { HomeWrapper } from "./Home.styles"

const Home:React.FC = () => {
  return (
    <HomeWrapper>
            <Navbar/>
            <Banner/>
    </HomeWrapper>
  )
}

export default Home