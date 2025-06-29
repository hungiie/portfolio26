"use client"

import ProjectThumbnail from "@/components/project-thumbnail";
import Button from "@/components/button";
import Footer from "@/components/footer";
import OtherProjectThumbnail from "@/components/other-project-thumbnail";

export default function Home() {
  return (
    <div className="px-22 grid grid-cols-[1fr_1.2fr]">
      <div className="h-screen">
        <div className="fixed top-60">
          <p className="text-5xl text-[var(--colour-bodytext)] font-semibold tracking-tight mb-9">Hi, I'm Hung.</p>
          <p className="text-sm text-[var(--colour-bodytext)]">A product designer who sometimes wanders in GitHub.</p>
          <p className="text-sm text-[var(--colour-bodytext)] -mt-1">Currently a UX designer at <span className="inline-block"><Button link="https://research.samsung.com/srca" variant="blue-hyperlink" text="Samsung Canada" textSize="text-sm"/></span>.</p>
        </div>
        <div className="fixed bottom-15">
          <Footer />
        </div>
      </div>
      <div className="mt-30 pb-30">
        <ProjectThumbnail link="#" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="8 months" tag3="B2B UX" imageSrc="/knox.jpeg" colourCode="var(--colour-samsung)" />
        <ProjectThumbnail link="#" name="Influenso" description="A solution guiding new influencers navigate brand partnerships & communications, and make use of cross-platform analytics." tag1="UX design" tag2="2 months" tag3="B2B2C UX" imageSrc="/influenso.png" colourCode="var(--colour-influenso)" />
        <ProjectThumbnail link="#" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX Design" tag2="1.5 month" tag3="B2C UX" imageSrc="/cardio.png" colourCode="var(--colour-cardio)" />

        <p className="text-2xl mt-30 mb-10 text-[var(--colour-bodytext)]">Some other projects</p>
        <div className="grid grid-cols-2 gap-x-7">
          <OtherProjectThumbnail link="#" name="React Native app built with Firebase authentication & database." description="Note-taking app for senior citizens, provides assistance in everyday tasks, integrating native features and API such as Apple Maps, Text-to-speech, voice note." tag="UX engineer" imageSrc="/memorymate.png" />
          <OtherProjectThumbnail link="#" name="Uber Eats’ speculative feature: Nutrition Report." description="Assists and informs users about their food’s nutrition details, makes sure their dietary needs are met." tag="UX design" imageSrc="/ubereats.png" />
          <OtherProjectThumbnail link="#" name="Enhancing Spotify's onboarding experience for new users." description="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" tag="HCI study" imageSrc="/spotify.png" />
          <OtherProjectThumbnail link="#" name="Fraser Health’s internship." description="My work as a visual design & videographer intern at Fraser Health Authority from October 2023 to May 2024." tag="Visual design" imageSrc="/fh.png" />
        </div>
      </div>
    </div>
  );
}
