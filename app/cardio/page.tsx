"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";
import Overview from "@/components/overview";
import Button from "@/components/button";

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
                linkText2="See prototype" 
                />

                <Overview 
                subject1="Project type:" value1="UX design" 
                subject2="Duration:" value2="1.5 month" 
                subject3="Tool used:" value3="Figma" 
                description1="card.io is a Spotify feature that caters towards the fitness community and aims to improve the cardio running experience with personalized music selection and playlists."
                description2="I worked on this project individually as my own exploration of the UI design field in my undergraduate degree."
                />
                
                <div className="mb-40">
                    <div className="mt-20 flex items-baseline">
                        <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8">First look</p>
                        <Button variant="blue-hyperlink" link="#" text="See prototype" textSize="text-sm" target="_blank"></Button>
                    </div>
                    {/* video goes here */}
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">The ongoing trend</p>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-x-24">
                    <div>
                        <p className="text-sm text-[var(--colour-bodytext)]">Many people struggle to stay motivated throughout their cardio sessions, and often cutting their workouts short. However, with the right music, runners can feel more energized and motivated - making it easier to push through.</p>
                        <p className="text-sm text-[var(--colour-bodytext)]">This need had sparked the trend of cardio playlists.</p>
                        <p className="text-sm text-[var(--colour-cardio)] mt-7 mb-7">Fitness influencers makes cardio playlists, where songs are organized to match different speed ranges (phases) of a typical cardio session.</p>
                        <Button variant="blue-hyperlink" text="Learn more about the effects music has on running." textSize="text-sm" link="#" target="_blank"/>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        <video autoPlay muted loop className="rounded-lg w-full fill"> <source src="/trend vid 1.mp4" type="video/mp4" /></video>
                        <video autoPlay muted loop className="rounded-lg w-full fill"> <source src="/trend vid 2.mp4" type="video/mp4" /></video>
                        <video autoPlay muted loop className="rounded-lg w-full fill"> <source src="/trend vid 3.mp4" type="video/mp4" /></video>
                    </div>
                </div>

                <div className="w-2/5 mt-20">
                    <div className="mb-13">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Trend observation 1</p>
                        <p className="text-lg text-[var(--colour-bodytext)] mb-2">Template for a “typical” cardio session?</p>
                        <p className="text-sm text-[var(--colour-bodytext)] mb-2">Influencers follow a conventional template of a cardio session with 3 phases: Warm-up, Endurance and Cool-down.</p>
                    </div>
                    <div className="mb-13">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Trend observation 2</p>
                        <p className="text-lg text-[var(--colour-bodytext)] mb-2">Requests for artist or album specific playlists.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] mb-2">Viewers usually ask influencers to make cardio playlists specific for their favourite artist or album.</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Trend observation 3</p>
                        <p className="text-lg text-[var(--colour-bodytext)] mb-2">Strategically organized songs that can't be shuffled.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] mb-2">The playlists are structured to match the current speed range. The faster the treadmill (MPH), the faster the song (BPM).</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Research findings (summarized)</p>
                <p className="text-sm text-[var(--colour-bodytext)] w-1/2 mb-8">I conducted <span className="text-[var(--colour-cardio)]">5 interviews</span> with 5 users that identify themselves as fitness enthusiasts, and have participated in the trend on TikTok with their favourite fitness influencers. After the interviews, I categorized my data into <span className="text-[var(--colour-cardio)]">3 themes</span>, and <span className="text-[var(--colour-cardio)]">1 driving insight</span>.</p>
                <Button variant="blue-hyperlink" link="#" text="Read complete research data here." textSize="text-sm" target="_blank"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mt-8">
                    <div>
                        <div className="mb-10">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Theme 1</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Unique bodily physiques require customizations...</p>
                            <p className="text-sm text-[var(--colour-bodytext)] mb-2">Users need customization based on their physical traits: height, weight, etc.</p>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Theme 2</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">Personal preferences in songs require customizations...</p>
                            <p className="text-sm text-[var(--colour-bodytext)] mb-2">Viewers often ask influencers for cardio playlists based on favorite artists or albums, but still want customization - since they may not like every song.</p>
                        </div>
                        <div className="mb-10">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-2">Theme 3</p>
                            <p className="text-lg text-[var(--colour-bodytext)] mb-2">...Yet, users lack confidence in customizing.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] mb-2">Users find it hard to customize the playlist on their own, without the help of influencers, or test the effectiveness of their playlists.</p>
                        </div>
                    </div>
                    <div className="px-13 py-10 rounded-2xl bg-[#f0f0f0] h-fit">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Driving insight</p>
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">Influencer-made playlist is considered a good starting point, but <span className="text-[var(--colour-cardio)]">personal customization</span> is what makes a “good” cardio playlist.</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Driving pain point & “How Might We”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div className="py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Driving pain point</p>
                        <p className="text-lg text-[var(--colour-bodytext)] mb-2">Runner feels frustrated because she doesn’t have confidence in customizing & testing the playlist's effectiveness on her own.</p>
                    </div>
                    <div className="px-13 py-10 rounded-2xl bg-[#f0f0f0]">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">How Might We</p>
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">How can I make sure our runner feels informed and confident in <span className="text-[var(--colour-cardio)]">customizing</span> & <span className="text-[var(--colour-cardio)]">testing</span> her own cardio playlists?</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">card.io's solutions</p>

                <div className="mb-50"></div>
                <Footer />
            </div>
        </div>
    )
}