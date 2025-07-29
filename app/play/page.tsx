"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import PlayProject from "@/components/play-project"
// import ExpandableImage from "@/components/expandable-image"
// import PlayImage from "@/components/play-image"


export default function Play(){
    return (
        <div className="mt-35 px-9 md:mt-40 md:px-22">
            <div className="grid grid-cols-1">
                <div className="order-2 md:order-1">
                    <p className="text-4xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight lleading-[120%] md:leading-[110%] mb-9">I like to play.<br></br>These are the damage.</p>
                </div>
            </div>

            <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-20 mb-8">Illustrations</p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 1.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 2.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 3.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 4.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 5.png" alt="illustration" className="object-cover" fill />
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image src="/play/preview illustration 6.png" alt="illustration" className="object-cover" fill />
                    </div>

                    {/* <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 1.png" src="/play/illustration 1.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 2.png" src="/play/illustration 2.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 3.png" src="/play/illustration 3.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 4.png" src="/play/illustration 4.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 5.png" src="/play/illustration 5.png" alt="illustration" className="aspect-square"/>
                    </div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <PlayImage srcPreview="/play/preview illustration 6.png" src="/play/illustration 6.png" alt="illustration" className="aspect-square"/>
                    </div> */}
                </div>
                <div className="flex items-end">
                    <p className="text-xl text-[var(--colour-bodytext)] w-full md:w-4/5">2020 - now</p>
                </div>
            </div>

            <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-35 mb-8">Acrylic painting</p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                <div className="relative w-full h-[200px] md:h-[450px] rounded-xl overflow-hidden">
                    <Image src="/play/acrylic.PNG" alt="acrylic painting" className="object-cover" fill />
                    {/* <PlayImage srcPreview="/play/acrylic.PNG" src="/play/acrylic.PNG" alt="acrylic painting" className="object-cover"/> */}
                </div>
                <div className="flex items-end">
                    <p className="text-xl text-[var(--colour-bodytext)] w-full md:w-4/5">2021</p>
                </div>
            </div>

            <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-35 mb-8">UX engineer</p>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-9">
                <div>
                    <PlayProject link="" name="Pawfect Match (2025)" description="Website connecting animal shelters with potential adopters. With pet’s data stored in SQL database, dynamic filtering & searching is supported, for a better adopting experience." tag1="SQL database" tag2="PHP for back end" imageSrc="/play/pawfect match.png" />
                    <PlayProject link="" name="Memory Mate (2024)" description="Note-taking app for senior citizens, provides assistance in everyday tasks, integrating native features and API such as Apple Maps, Text-to-speech, voice note." tag1="React Native" tag2="Firebase for back end" imageSrc="/play/memory mate.png" />
                    <PlayProject link="" name="A day as a barista (2023)" description="Designed and developed a restaurant game with Java, incorporating wide range of interactions such as tapping, dragging, with dynamic responses to user’s input." tag1="Java" tag2="Object-oriented programming" imageSrc="/play/barista.png" />
                    <PlayProject link="" name="Grocery Impact (2022)" description="Designed and developed a tile-based game with Java, incorporating diverse interactions & character designs & soundtracks to ensure an immersive experience." tag1="Java" tag2="Object-oriented programming" imageSrc="/play/grocery impact.png" />
                </div>
            </div>



            <div className="mt-32">
                <Footer />
            </div>
        </div>
    )
}