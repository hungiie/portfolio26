import Nav from "@/components/nav";
import ProjectThumbnail from "@/components/project-thumbnail";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 p-25 grid grid-cols-2">
      <div className="h-screen">
        <div className="fixed">
          <p>Hi</p>
        </div>
      </div>
      <div className="">
        <ProjectThumbnail link="#" name="Samsung Knox Manage" description="Samsung Knox Suite - a proprietary security and management framework pre-installed on most Samsung mobile devices." tag="UX design internship" imageSrc="./knox.jpeg" colourCode="#2C32AC" />
        <ProjectThumbnail link="#" name="Influenso" description="Influenso - A solution guiding new influencers navigating brand partnerships and cross-platform analytics." tag="B2B2C UX" imageSrc="./influenso.png" colourCode="#2C32AC" />
        <ProjectThumbnail link="#" name="card.io" description="Designing a Spotify feature that guides users in creating personalized cardio playlists, helping them feel confident and in control." tag="UX Design" imageSrc="./cardio.png" colourCode="#2C32AC" />
      </div>
    </div>
  );
}
