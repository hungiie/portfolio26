"use client"

import Footer from "@/components/footer";
import ProjectHero from "@/components/projecthero";

export default function SamsungKnox () {
    return(
        <div>
            <div className="px-9 md:px-22 w-full">
                <ProjectHero 
                name="Samsung Knox Manage" 
                colourCode="var(--colour-samsung)" 
                description={
                    <>
                    Helping{" "}
                    <span className="text-[var(--colour-samsung)]">IT admins</span>{" "}
                    manage enterprise-level Samsung mobile devices with ease.
                </>}
                linkText1="Jump to solution" 
                linkText2="" />
                <p className="mt-20 mb-30 text-lg text-[var(--colour-bodytext-3)]">Coming soon.</p>
                <Footer />
            </div>
        </div>
    )
}