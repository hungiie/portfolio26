"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";

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
                linkText2="See prototype" />
                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}