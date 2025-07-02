"use client"

import Me from "@/components/me"
import Footer from "@/components/footer"
import Button from "@/components/button"
import Image from "next/image"
// import ExpandableImage from "@/components/expandable-image"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCodeBranch, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


export default function About(){
    return (
        <div className="mt-15 px-9 md:mt-30 md:px-22">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
                <div className="order-2 md:order-1">
                    <p className="text-lg md:text-2xl text-[var(--colour-bodytext)] mb-5 md:mb-9">Hi, I&lsquo;m Hung. 👋</p>
                    {/* <p className="text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight leading-none mb-9">I’m a product designer <FontAwesomeIcon icon={faPenToSquare} size="xs" style={{color: "var(--colour-yellow)",}} /> who sometimes wanders in GitHub <FontAwesomeIcon icon={faCodeBranch} size="sm" style={{color: "#0B8EFF",}} /></p> */}
                    {/* <p className="text-4xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight leading-[120%] md:leading-[110%] mb-9">Pushing <span className="text-[var(--colour-yellow)]">pixels</span> by day, pulling <span className="text-[var(--main-blue)]">requests</span> by night.</p> */}
                    {/* <p className="text-4xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight leading-[120%] md:leading-[110%] mb-9">Pushing pixels by day, pulling requests by night.</p> */}
                    <p className="text-4xl md:text-7xl text-[var(--colour-bodytext)] font-semibold tracking-tight lleading-[120%] md:leading-[110%] mb-9">I&lsquo;m a product designer who sometimes wanders in GitHub.</p>
                    <p className="text-sm text-[var(--colour-bodytext)]">Currently a UX designer at <span className="inline-block"><Button link="https://research.samsung.com/srca" target="_blank" variant="blue-hyperlink" text="Samsung Canada" textSize="text-sm"/></span>.</p>
                </div>
                <div className="flex items-center justify-center h-full order-1 mb-30 md:order-2">
                    <Me />
                </div>
            </div>

            <div className="mt-12 w-full md:w-2/5">
                <p className="text-sm text-[var(--colour-bodytext)]">I&lsquo;m passionate about how social media shapes our digital habits - and how modern interfaces evolve to match our shrinking attention spans.</p>
                <p className="text-sm text-[var(--colour-bodytext)] mt-3">Much like how social media can turn attention into influence, interfaces can turn curiosity into loyalty.</p>
                <p className="text-sm text-[var(--colour-bodytext)]">As a UX designer, I value digital experiences that capture interest quickly - and sustain it through clarity and accessibility.</p>
            </div>

            <div className="mt-6">
                <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><Button link="mailto:tranndhungg@gmail.com" target="_blank" variant="blue-hyperlink" text="email" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] -mt-3">Send me a message on <span className="inline-block"><Button link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="blue-hyperlink" text="LinkedIn" textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] -mt-3">Check out my <span className="inline-block"><Button link="https://drive.google.com/file/d/1F2UXNXNltAkH-Y0qinUaZDLaMNDMd6Mh/view" target="_blank" variant="blue-hyperlink" text="Resume" textSize="text-sm"/></span></p>
            </div>

            <div className="mt-20 w-full">
                <p className="text-2xl text-[var(--colour-bodytext)] mb-12">When I&lsquo;m not doing UX...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/spinning.jpeg" alt="spinning tour" className="object-cover" fill />
                        </div>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/vsa.jpeg" alt="vsa sfu" className="object-cover" fill />
                        </div>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/matcha.jpeg" alt="matcha" className="object-cover" fill />
                        </div>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/mad.jpg" alt="madison beer" className="object-cover" fill />
                        </div>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/vsaflag.jpeg" alt="vsa sfu" className="object-cover" fill />
                        </div>
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                            <Image src="/finsa.jpeg" alt="finsa sfu" className="object-cover" fill />
                        </div>
                        {/* <ExpandableImage src="/spinning.jpeg" alt="spinning tour" className="relative w-full aspect-square rounded-xl overflow-hidden"/>
                        <ExpandableImage src="/vsa.jpeg" alt="vsa sfu" className="relative w-full aspect-square rounded-xl overflow-hidden"/>
                        <ExpandableImage src="/matcha.jpeg" alt="matcha" className="relative w-full aspect-square rounded-xl overflow-hidden"/>
                        <ExpandableImage src="/mad.jpg" alt="madison beer" className="relative w-full aspect-square rounded-xl overflow-hidden"/>
                        <ExpandableImage src="/vsaflag.jpeg" alt="vsa sfu" className="relative w-full aspect-square rounded-xl overflow-hidden"/>
                        <ExpandableImage src="/finsa.jpeg" alt="sfu finsa" className="relative w-full aspect-square rounded-xl overflow-hidden"/> */}

                    </div>
                    <div className="flex items-end">
                        <p className="text-xl text-[var(--colour-bodytext)] w-full md:w-4/5">... You can find me joining local communities, at concerts, or at a school event!</p>
                    </div>
                </div>
            </div>



            <div className="mt-32">
                <Footer />
            </div>
        </div>
    )
}