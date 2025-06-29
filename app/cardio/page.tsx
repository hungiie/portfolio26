"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";

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
                linkText2="See prototype" />
                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}