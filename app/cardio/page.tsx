"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";
import Overview from "@/components/overview";

export default function Cardio () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="card.io" 
                colourCode="var(--colour-cardio)" 
                description={
                    <>
                    A perfect cardio session starts with the{" "}
                    <span className="text-[var(--colour-cardio)]">perfect playlist</span>
                    .
                </>}
                linkText1="Jump to solution" 
                linkText2="See prototype" 
                />

                <Overview 
                subject1="Project type:" value1="UX design" 
                subject2="Duration:" value2="1.5 month" 
                subject3="Tool used:" value3="Figma" 
                description1="card.io is a Spotify feature that caters towards the fitness community and aims to improve the cardio running experience with personalized music selection and playlists."
                description2="I worked on this project individually as my own exploration of the UI design field in my undergraduate degree."
                />

                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}