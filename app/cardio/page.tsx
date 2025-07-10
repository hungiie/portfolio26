"use client"

import ProjectHero from "@/components/projecthero";
import Footer from "@/components/footer";
import Overview from "@/components/overview";
import Button from "@/components/button";
import ExpandableImage from "@/components/expandable-image";
import ExpandableVideo from "@/components/expandable-video";

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
                
                <div>
                    <div className="mt-30 flex items-baseline">
                        <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mr-8 mb-8">First look</p>
                        <Button variant="blue-hyperlink" link="#" text="See prototype" textSize="text-md" target="_blank"></Button>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-[var(--colour-grey)] px-3 md:px-10 py-3 md:py-7 rounded-2xl">
                        {/* <div className="text-center mt-1 mb-2">
                            <p className="text-sm text-[var(--colour-darkgrey)]">Click on each video to expand.</p>
                        </div> */}
                        <div className="grid grid-cols-4 mt-0 md:mt-3 mb-0 md:mb-3 gap-x-1 md:gap-x-4 w-full md:w-3/5">
                            <ExpandableVideo src="/cardio/sol 3.mp4" className="w-full" />
                            <ExpandableVideo src="/cardio/sol 1.mp4" className="w-full" />
                            <ExpandableVideo src="/cardio/sol 4.mp4" className="w-full" />
                            <ExpandableVideo src="/cardio/sol 5.mp4" className="w-full" />
                        </div>
                    </div>
                    <div className="text-center mt-7">
                        <p className="text-sm text-[var(--colour-bodytext)]">2 main flows with 4 main screens, 12 screens in total.</p>
                        <p className="text-sm text-[var(--colour-darkgrey)] mt-2">Click on each video to expand.</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-35 mb-8">The ongoing trend</p>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-x-24">
                    <div className="mb-7">
                        <p className="text-md text-[var(--colour-bodytext)]">Many people struggle to stay motivated throughout their cardio sessions, and often cutting their workouts short. However, with the right music, runners can feel more energized and motivated - making it easier to push through.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">This need had sparked the trend of cardio playlists.</p>
                        <p className="text-md text-[var(--colour-cardio)] mt-7 mb-7">Fitness influencers makes cardio playlists, where songs are organized to match different speed ranges (phases) of a typical cardio session.</p>
                        <Button variant="blue-hyperlink" text="Learn more about the effects music has on running." textSize="text-md" link="#" target="_blank"/>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        <ExpandableVideo src="/cardio/trend vid 1.mp4" className="w-full" />
                        <ExpandableVideo src="/cardio/trend vid 2.mp4" className="w-full" />
                        <ExpandableVideo src="/cardio/trend vid 3.mp4" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-20">
                    <div className="bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Trend observation 1</p>
                        <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-4">Template for a “typical” cardio session?</p>
                        <p className="text-md text-[var(--colour-bodytext)]">Influencers follow a conventional template of a cardio session with 3 phases: Warm-up, Endurance and Cool-down.</p>
                    </div>
                    <div className="bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Trend observation 2</p>
                        <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-4">Requests for artist or album specific playlists.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">Viewers usually ask influencers to make cardio playlists specific for their favourite artist or album.</p>
                    </div>
                    <div className="bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Trend observation 3</p>
                        <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-4">Strategically organized songs that can&lsquo;t be shuffled.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">The playlists are structured to match the current speed range. The faster the treadmill (MPH), the faster the song (BPM).</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Research findings (summarized)</p>
                <p className="text-md text-[var(--colour-bodytext)] w-full md:w-1/2 mb-8">I conducted <span className="text-[var(--colour-cardio)]">5 interviews</span> with 5 users that identify themselves as fitness enthusiasts, and have participated in the trend on TikTok with their favourite fitness influencers. After the interviews, I categorized my data into <span className="text-[var(--colour-cardio)]">3 themes</span>, and <span className="text-[var(--colour-cardio)]">1 driving insight</span>.</p>
                <Button variant="blue-hyperlink" link="#" text="Read complete research data here." textSize="text-md" target="_blank"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-8">
                    <div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Theme 1</p>
                            <p className="text-xl text-[var(--colour-bodytext)] mb-4 font-semibold">Unique bodily physiques require customizations...</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Users need customization based on their unique physical traits: height, weight, endurance limits, etc.</p>
                        </div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Theme 2</p>
                            <p className="text-xl text-[var(--colour-bodytext)] mb-4 font-semibold">Personal preferences in songs require customizations...</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Viewers often ask influencers for cardio playlists based on favorite artists or albums, but still want customization - since they may not enjoy every song by that artist/ in that album.</p>
                        </div>
                        <div className="mb-5 bg-[var(--colour-grey)] px-10 py-10 rounded-2xl">
                            <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Theme 3</p>
                            <p className="text-xl text-[var(--colour-bodytext)] mb-4 font-semibold">...Yet, users lack confidence in customizing.</p>
                            <p className="text-md text-[var(--colour-bodytext)]">Users find it hard to customize the playlist on their own, without the help of influencers, or test the effectiveness of their playlists.</p>
                        </div>
                    </div>
                    <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)] h-fit">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Driving insight</p>
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">Influencer-made playlist is considered a good starting point, but <span className="text-[var(--colour-cardio)]">personal customization</span> is what makes a “good” cardio playlist.</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Driving pain point & “How Might We”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <div className="py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">Driving pain point</p>
                        <p className="text-lg text-[var(--colour-bodytext)] mb-2">Runner feels frustrated because she doesn&lsquo;t have confidence in customizing & testing the playlist&lsquo;s effectiveness on her own.</p>
                    </div>
                    <div className="px-13 py-10 rounded-2xl bg-[var(--colour-grey)]">
                        <p className="text-sm text-[var(--colour-bodytext)] font-semibold mb-4">How Might We</p>
                        <p className="text-3xl font-semibold tracking-tight text-[var(--colour-bodytext)] mb-2">How can I make sure our runner feels informed and confident in <span className="text-[var(--colour-cardio)]">customizing</span> & <span className="text-[var(--colour-cardio)]">testing</span> her own cardio playlists?</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">card.io&lsquo;s solutions</p>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-15 px-0 md:px-35 2xl:px-90">
                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-8">Solution 1 & 2</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-2">Automatically create organized, colour-coded playlists based on users&lsquo; music preferences.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-8">Different phases are highlighted with different colours.</p>

                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold leading-5.5 mb-2">Makes customizing easier - Suggest songs with similar range of BPM.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">If Michelle wants to replace a Sabrina Carpenter song that she doesn&lsquo;t like, she will have plenty of different song suggestions as replacements.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableVideo src="/cardio/sol 1.mp4" className="w-1/2 md:w-4/5" />
                    </div>

                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Solution 3</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold mb-4 leading-5.5">Offers questionnaire that collects users&lsquo; physical attributes data to create a more personalized playlist.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">With this feature, Michelle wouldn’t encounter the problem about being short anymore.</p>

                        {/* <div className="inline-block mt-10">
                            <Button variant="blue-button" link="#" text="Learn more" textSize="text-sm" target="_blank" />
                        </div> */}
                    </div>
                    <div className="flex justify-center">
                        <ExpandableVideo src="/cardio/sol 3.mp4" className="w-1/2 md:w-4/5" />
                    </div>

                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Solution 4</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold mb-4 leading-5.5">Makes testing easier - Real-time report during running.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">Report includes session’s progress, current BPM, current treadmill settings (speed, incline). Michelle can test her playlist with informative interface that provides sufficient information for her to make her decisions.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableVideo src="/cardio/sol 4.mp4" className="w-1/2 md:w-4/5" />
                    </div>

                    <div className="h-full flex flex-col justify-center rounded-2xl bg-[var(--colour-grey)] md:px-13 px-6 py-6">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-4">Solution 5</p>
                        <p className="text-lg text-[var(--colour-bodytext)] font-semibold mb-4 leading-5.5">Offers more freedom in creating mixed playlists with different artists, albums, genres, etc.</p>
                        <p className="text-md text-[var(--colour-bodytext)]">With “Manual Mode”, Michelle can freely add any songs she likes to the cardio playlist while still having all the features above for support.</p>
                    </div>
                    <div className="flex justify-center">
                        <ExpandableVideo src="/cardio/sol 5.mp4" className="w-1/2 md:w-4/5" />
                    </div>

                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Conceptual sketches</p>
                <div className="grid grid-cols-3 w-full gap-x-2 md:gap-x-7 px-5 md:px-35 2xl:px-70 py-5 md:py-15 rounded-xl md:rounded-2xl bg-[var(--colour-grey)]">
                    <div className="relative w-full aspect-square">
                        <ExpandableImage src="/cardio/sketch-2.jpg" alt="card.io sketch" className="w-full h-full" />
                    </div>
                    <div className="relative w-full aspect-square object-cover">
                        <ExpandableImage src="/cardio/sketch-1.jpg" alt="card.io sketch" className="w-full h-full" />
                    </div>
                    <div className="relative w-full aspect-square">
                        <ExpandableImage src="/cardio/sketch-3.jpg" alt="card.io sketch" className="w-full h-full" />
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">First iteration & User testing</p>
                <div className="flex items-center justify-center flex-col py-10 bg-[var(--colour-grey)] rounded-2xl">
                    <ExpandableVideo src="/cardio/draft-1.mp4" className="w-3/5 md:w-1/6" />
                    <p className="text-sm text-[var(--colour-bodytext)] mt-4">First prototype of card.io.</p>
                </div>

                {/* <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Heuristic evaluation & User testing</p> */}
                <p className="text-xl text-[var(--colour-bodytext)] font-semibold mt-15">I conducted a Heuristic evaluation session with another UX designer to discover issues with this interface.</p>
                <div className="w-full md:w-3/5 mt-7 mb-9">
                    <p className="text-md text-[var(--colour-bodytext)]">Using slide bar as progress indicator gives a  <span className="text-[var(--colour-cardio)]">false impression of interactivity</span>.</p>
                    <p className="text-md text-[var(--colour-bodytext)] mt-1">The straight slide bar in card.io resembles the draggable bars on platforms like YouTube or Netflix. But in card.io, it functions solely as a progress indicator and isn’t interactive.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-10 h-fit px-5 md:px-45 2xl:px-75 py-5 md:py-10 rounded-2xl bg-[var(--colour-grey)]">
                    <div className="w-full h-auto relative">
                        <ExpandableImage src="/cardio/slidebar.png" alt="card.io" className="w-full aspect-5/2 mb-2"/>
                    </div>
                    <div className="w-full h-auto relative">
                        <ExpandableImage src="/cardio/youtube.png" alt="Blank Space" className="w-full aspect-5/2"/>
                    </div>
                    <p className="text-sm text-center text-[var(--colour-bodytext)] mt-4 col-span-2">Linear progress bar is perceived as interactable on multiple platforms.</p>
                </div>

                <div className="mt-20">
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold">Next up, I conducted in-person user testing with 2 users.</p>
                    <p className="text-md text-[var(--colour-bodytext)] mt-7">With a day-pass ticket of a gym nearby, I asked them to set up the playlist in their phone, and use the feature while running, or after running if needed.</p>
                    <p className="text-md text-[var(--colour-bodytext)] mt-1">Again, I organized the responses into <span className="text-[var(--colour-cardio)]">2 reoccurring themes</span>.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-13 gap-x-5">
                    <div className="mb-13 bg-[var(--colour-grey)] px-7 md:px-15 py-7 md:py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-5">Reoccurring theme 1</p>
                        <p className="text-xl text-[var(--colour-bodytext)] mb-5 font-semibold">Needs for glanceability.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">Users are constantly moving physically, resulting in struggles in receiving small texts information, or thin progress bar.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">MPH, BPM, Incline, etc. are displayed all at once, along with progress bar while having no clear hierarchy, causing cognitive overload.</p>
                    </div>
                    <div className="mb-13 bg-[var(--colour-grey)] px-7 md:px-15 py-7 md:py-10 rounded-2xl">
                        <p className="text-sm text-[var(--colour-cardio)] font-semibold mb-5">Reoccurring theme 2</p>
                        <p className="text-xl text-[var(--colour-bodytext)] mb-5 font-semibold">Struggles with small interaction areas (tapping interaction)</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">Small touch targets (e.g., the “next” button) are difficult to press accurately during running.</p>
                        <p className="text-md text-[var(--colour-bodytext)] mb-2">These tapping interactions require high precision (have to tap precisely on an area of the interface).</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-30 mb-8">Key UX improvements</p>
                <div className="w-full md:w-3/5">
                    <p className="text-md text-[var(--colour-bodytext)]">After identifying key issues with all data collected from Heuristic evaluation and User testing sessions, I went ahead and implemented <span className="text-[var(--colour-cardio)]">3 key UX improvements</span> to the final iteration.</p>
                </div>

                <div className="w-full md:w-3/5 mt-15">
                    <p className="text-sm font-semibold text-[var(--colour-cardio)] mb-2">Key UX improvement 1</p>
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">Process bar &#x2192; Circular design</p>
                </div>
                <div className="w-full py-10 px-7 md:px-90 2xl:px-130 bg-[var(--colour-grey)] rounded-2xl">
                    <div className="grid grid-cols-[6fr_1fr_6fr] gap-x-5 w-full">
                        <div className="relative flex items-center justify-center flex-col">
                            <ExpandableImage src="/cardio/before.png" alt="card.io" className="w-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-lg"> &#x2192;</p>
                        </div>
                        <div className="relative flex items-center justify-center flex-col">
                            <ExpandableImage src="/cardio/after.png" alt="card.io" className="w-full" />
                        </div>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-4 text-center"><span className="font-semibold text-[var(--colour-cardio)]">First iteration</span>: Linear progress indicator</p>
                        <p></p>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-4 text-center"><span className="font-semibold text-[var(--colour-cardio)]">Final iteration</span>: Circular progress indicator</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">More conventional non interactive progress indicator.</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Remove confusion with the progress bar for streaming services.</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Able to incorporate a thicker bezel, improving glanceability.</p>
                    </div>
                </div>


                <div className="w-full md:w-3/5 mt-25">
                    <p className="text-sm font-semibold text-[var(--colour-cardio)] mb-2">Key UX improvement 2</p>
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">Tapping &#x2192; Swiping</p>
                </div>
                <div className="flex justify-center w-full rounded-2xl bg-[var(--colour-grey)] px-0 md:px-60 2xl:px-80 py-15 overflow-hidden">
                    <ExpandableVideo src="/cardio/sol 4.mp4" className="w-1/5 scale-160 translate-y-0 md:translate-y-20 2xl:translate-y-40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Large interaction area, hard to miss.</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Low precision, high accuracy (compare to tapping which requires high precision).</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Easy to interact during intense physical activities.</p>
                    </div>
                </div>


                <div className="w-full md:w-3/5 mt-25">
                    <p className="text-sm font-semibold text-[var(--colour-cardio)] mb-2">Key UX improvement 3</p>
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">Chunking information into groups</p>
                </div>
                <div className="w-full py-10 px-7 md:px-90 2xl:px-130 bg-[var(--colour-grey)] rounded-2xl">
                    <div className="grid grid-cols-[6fr_1fr_6fr] gap-x-5 w-full">
                        <div className="relative flex items-center justify-center flex-col">
                            <ExpandableImage src="/cardio/before.png" alt="card.io" className="w-full" />
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-lg"> &#x2192;</p>
                        </div>
                        <div className="relative flex items-center justify-center flex-col">
                            <ExpandableImage src="/cardio/after.png" alt="card.io" className="w-full" />
                        </div>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-4 text-center"><span className="font-semibold text-[var(--colour-cardio)]">First iteration</span>: Information are left-aligned in a paragraph-like fashion</p>
                        <p></p>
                        <p className="text-sm text-[var(--colour-bodytext)] mt-4 text-center"><span className="font-semibold text-[var(--colour-cardio)]">Final iteration</span>: Information is categorized into groups, seperated by a swipe.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Instead of showing all information at once, sort them into 3 groups separated by a swipe.</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Reduce visual clutter, improve glanceability during intense running.</p>
                    </div>
                    <div className="w-full rounded-2xl bg-[var(--colour-grey)] px-7 md:px-13 py-8 flex items-center">
                        <p className="text-md font-semibold text-[var(--colour-bodytext)] mb-2">Resemblance to a modern treadmill interface.</p>
                    </div>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-20 mb-8">Looking back...</p>
                <div className="w-full md:w-4/5">
                    <p className="text-md text-[var(--colour-bodytext)]">Customize to follow WCAG standard more (using different Figma plugins: A11y Colour Contrast Checker, A11y Text, etc.).</p>
                    <p className="text-md text-[var(--colour-bodytext)]">See if there is a better way to give user support in customizing other than suggesting songs with similar BPM.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">I want to conduct more user testing to gather more data for the questionnaire.</p>
                </div>

                <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-20 mb-8">Takeaways</p>
                <div className="w-full md:w-4/5">
                    <p className="text-md text-[var(--colour-bodytext)]">Design with a clear goal in mind.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">Pay attention to every steps as it will all come together and it will all have to make sense in the end.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">Design for accessibility.</p>
                </div>






                <div className="mb-50"></div>

                <Footer />
            </div>
        </div>
    )
}