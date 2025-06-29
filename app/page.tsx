"use client"

import ProjectThumbnail from "@/components/project-thumbnail";
import Button from "@/components/button";
import Footer from "@/components/footer";
import OtherProjectThumbnail from "@/components/other-project-thumbnail";

export default function Home() {
  return (
    <div className="px-25 grid grid-cols-2">
      <div className="h-screen">
        <div className="fixed top-60">
          <p className="text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight mb-9">Hi, I'm Hung.</p>
          <p className="text-sm text-[var(--colour-bodytext)]">A product designer who sometimes wanders in GitHub.</p>
          <p className="text-sm text-[var(--colour-bodytext)]">Currently a UX designer at <span className="inline-block"><Button link="#" variant="blue-hyperlink" text="Samsung Canada" textSize="text-sm"/></span>.</p>
        </div>
        <div className="fixed bottom-17">
          <Footer />
        </div>
      </div>
      <div className="mt-30 pb-30">
        <ProjectThumbnail link="#" name="Samsung Knox Manage" description="Samsung Knox Suite - a proprietary security and management framework pre-installed on most Samsung mobile devices." tag="UX design internship" imageSrc="/knox.jpeg" colourCode="var(--colour-samsung)" />
        <ProjectThumbnail link="#" name="Influenso" description="Influenso - A solution guiding new influencers navigating brand partnerships and cross-platform analytics." tag="B2B2C UX" imageSrc="/influenso.png" colourCode="var(--colour-influenso)" />
        <ProjectThumbnail link="#" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag="UX Design" imageSrc="/cardio.png" colourCode="var(--colour-cardio)" />

        <p className="text-2xl mt-30 mb-10 text-[var(--colour-bodytext)]">Some other projects</p>
        <div className="grid grid-cols-2 gap-x-7">
          <OtherProjectThumbnail link="#" name="React Native app built with Firebase authentication & database." description="Note-taking app for senior citizens, provides assistance in everyday tasks, integrating native features and API such as Apple Maps, Text-to-speech, voice note." tag="UX engineer" imageSrc="/memorymate.png" />
          <OtherProjectThumbnail link="#" name="Uber Eats’ speculative feature: Nutrition Report." description="Assists and informs users about their food’s nutrition details, makes sure their dietary needs are met." tag="UX design" imageSrc="/ubereats.png" />
        </div>
      </div>
    </div>
  );
}
