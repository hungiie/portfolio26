"use client"

import ProjectThumbnail from "@/components/project-thumbnail";
import Button from "@/components/button";
import Footer from "@/components/footer";
import OtherProjectThumbnail from "@/components/other-project-thumbnail";
// import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-9 md:px-22 grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">
      {/* <motion.div 
        className="md:h-screen"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
        <div className="md:h-screen">
          <div className="mt-35 md:fixed md:mt-0 md:top-60 2xl:top-75">
            <p className="text-5xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight mb-9">Hi, I&lsquo;m Hung.</p>
            {/* <p className="text-sm text-[var(--colour-bodytext)]">Pushing pixels by day, pulling requests by night.</p> */}
            <p className="text-sm text-[var(--colour-bodytext)]">I&lsquo;m a product designer who sometimes wanders in GitHub.</p>

            <p className="text-sm text-[var(--colour-bodytext)] -mt-1">Currently a UX designer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung Canada" textSize="text-sm"/></span>.</p>
          </div>
          <div className="hidden md:block mt-10 -mb-25 md:mb-0 md:mt-0 md:fixed bottom-0">
            <Footer />
          </div>
        </div>
      {/* </motion.div> */}

      {/* <motion.div
        className="mt-30 pb-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      > */}
        <div className="mt-30 pb-15 md:pb-30">
          {/* <p className="text-lg md:text-2xl text-[var(--colour-bodytext)] mb-5 md:mb-9">Some of my works...</p> */}
          <ProjectThumbnail link="/samsungknox" name="Samsung Knox Manage" description="Samsung Knox Suite is a proprietary security and management framework pre-installed on most Samsung mobile devices." tag1="UX design internship" tag2="8 months" tag3="B2B UX" imageSrc="/knox.png" colourCode="var(--colour-samsung)" />
          <ProjectThumbnail link="/influenso" name="Influenso" description="A solution guiding new influencers navigate brand partnerships & communications, and make use of cross-platform analytics." tag1="UX design" tag2="2 months" tag3="B2B2C UX" imageSrc="/influenso.png" colourCode="var(--colour-influenso)" />
          <ProjectThumbnail link="/cardio" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag1="UX Design" tag2="1.5 month" tag3="B2C UX" imageSrc="/cardio.png" colourCode="var(--colour-cardio)" />
          <ProjectThumbnail link="/jackalope" name="Jackalope" description="Social event and community finder app, helping international students settle into a new country, with AI-powered suggestions and built-in feedback mechanisms." tag1="UX Design" tag2="3 months" tag3="B2C UX" imageSrc="/jackalope.png" colourCode="var(--colour-jackalope)" />

          <p className="text-2xl mt-30 mb-10 text-[var(--colour-bodytext)]">Some other projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
            <OtherProjectThumbnail link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="React Native app built with Firebase authentication & database." description="Note-taking app for senior citizens, provides assistance in everyday tasks, integrating native features and API such as Apple Maps, Text-to-speech, voice note." tag="UX engineer" imageSrc="/memorymate.png" />
            <OtherProjectThumbnail link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=313%3A2973&node-id=313-3004&viewport=479%2C387%2C0.03&t=NHb88K4xz1HL2JVg-1&scaling=scale-down&content-scaling=fixed" name="Uber Eats’ speculative feature: Nutrition Report." description="Assists and informs users about their food’s nutrition details, makes sure their dietary needs are met." tag="UX design" imageSrc="/ubereats.png" />
            <OtherProjectThumbnail link="https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" name="Enhancing Spotify's onboarding experience for new users." description="How can the interaction of selecting and dragging multiple songs while pressing CTRL (or CMD key on Mac), can be made more accessible and recognizable for new users during their onboarding experience?" tag="HCI study" imageSrc="/spotify.png" />
            <OtherProjectThumbnail link="" name="Fraser Health’s internship." description="My work as a visual design & videographer intern at Fraser Health Authority from October 2023 to May 2024." tag="Visual design" imageSrc="/fh.png" />
          </div>
        </div>
      {/* </motion.div> */}
      <div className="block md:hidden">
        <Footer/>
      </div>
    </div>
  );
}
