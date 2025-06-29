"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";

export default function Influenso () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Influenso" 
                colourCode="var(--colour-influenso)" 
                description={
                    <>
                    Guiding{" "}
                    <span className="text-[var(--colour-influenso)]">new influencers</span>{" "}
                    navigating brand partnerships and cross-platform analytics.
                </>}
                linkText1="Jump to solution" 
                linkText2="See prototype" />
                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}