import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import SEO from "../Components/SEO";

export default function Portfolio() {
    return (
        <div className="bg-gray-300">
            <SEO
                title="Yassine Benhamzah - Portfolio"
                description="Welcome to my personal portfolio. Check out my projects and skills."
                keywords="portfolio, web developer, react, frontend"
            />
            <Hero />
            {/* <Stats /> */}
        </div>
    );
}
