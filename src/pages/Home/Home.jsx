import Building from "../../components/building-section/building-section"
import Bussines from "../../components/bussines-section /bussines-section"
import Easy from "../../components/easy-section/easy"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Ready from "../../components/ready-section/ready-section"
import Simple from "../../components/simple-section/simple-section"
import Work from "../../components/work-section/work-section"


function Home() {
    return (
        <>
            <Header />
            <Building />
            <Work />
            <Easy />
            <Simple />
            <Bussines />
            <Ready />
            <Footer />

        </>
    )
}

export default Home