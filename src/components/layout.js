import React, {component} from "react";
import Header from "./header";
import Footer from  "./footer";
import Banner from "./banner";
import Service from "./service";
import Projects from "./projects";
import Testimonial from "./testimonials"
function Layout(){
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Service />
            <Projects />
            <Testimonial />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;