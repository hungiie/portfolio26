"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";
import Overview from "@/components/overview";

export default function Jackalope () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Jackalope" 
                colourCode="var(--colour-jackalope)" 
                description={
                    <>
                    <span className="text-[var(--colour-jackalope)]">Finding communities</span>{" "}
                    as a newcomer shouldn’t be this hard.
                </>}
                linkText1="Jump to solution" 
                linkText2="See prototype" 
                />

                <Overview 
                subject1="Project type:" value1="UX design" 
                subject2="Duration:" value2="3 months" 
                subject3="Tool used:" value3="Figma & ProtoPie" 
                description1="Jackalope helps international students in Canada settling in by connecting them with events and communities that align with their interests, while minimizing the impact of cultural shock."
                description2="This is an academic project of IAT 334 - Interface Design, that I completed with 2 colleagues: Jay Ho and Dominika Styk."
                />
                
                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}