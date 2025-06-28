"use client"

import ProjectThumbnail from "@/components/project-thumbnail";
import Button from "@/components/button";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="px-25 grid grid-cols-2">
      <div className="h-screen">
        <div className="fixed top-60">
          <p className="text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight mb-9">Hi, I'm Hung.</p>
          <p className="text-sm text-[var(--colour-bodytext)]">A product designer who sometimes wanders in GitHub.</p>
          <p className="text-sm text-[var(--colour-bodytext)]">Previous UX designer at <span className="inline-block"><Button link="#" variant="blue-hyperlink" text="Samsung Canada" textSize="text-sm"/></span>.</p>
        </div>
        <div className="fixed bottom-20">
          <Footer />
        </div>
      </div>
      <div className="mt-30">
        <ProjectThumbnail link="#" name="Samsung Knox Manage" description="Samsung Knox Suite - a proprietary security and management framework pre-installed on most Samsung mobile devices." tag="UX design internship" imageSrc="./knox.jpeg" colourCode="#2C32AC" />
        <ProjectThumbnail link="#" name="Influenso" description="Influenso - A solution guiding new influencers navigating brand partnerships and cross-platform analytics." tag="B2B2C UX" imageSrc="./influenso.png" colourCode="#2C32AC" />
        <ProjectThumbnail link="#" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag="UX Design" imageSrc="./cardio.png" colourCode="#2C32AC" />
      </div>
    </div>
  );
}
