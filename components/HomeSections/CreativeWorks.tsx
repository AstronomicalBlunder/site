'use client';
import React from 'react'
import InlineLink from '../InlineLink'
import Button from '../Button'
import {motion} from 'framer-motion'

export default function CreativeWorks() {
  return (
    <section className="h-screen md:snap-center md:snap-always pt-40 scroll-mt-40"
    id="Creative Works">
      <div className="h-full w-[100vw] flex flex-col gap-5 md:gap-0 md:flex-row justify-evenly items-center text-xs lg:text-sm xl:text-base mb-64 lg:mb-0 ">
            <div className = "h-full w-[75vw] md:w-[25vw] flex flex-col justify-start items-center gap-5 lg:gap-10 px-2.5">
            <svg className="hidden md:block h-16 w-16 lg:h-24 lg:w-24" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150">
                    <motion.path id="Selection"
                        fill="none" stroke="white" stroke-width="2"
                        initial={{pathLength: 0, opacity: 0.8}}
                        whileInView={{pathLength: 1, opacity: 1, transition: {duration: 3}}}
                        d="M38.04,103.45c-8.39-6.2-14.29-5.57-17.6,1.53c-0.79,1.68-3.17,8.89-8.08,12.84C7.54,121.69,0,122.23,0,122.47 C11.8,123.57,60.26,123.96,38.04,103.45L38.04,103.45L38.04,103.45z M91.08,16.73L35.44,96.03l10.39,7.51l69.86-78.31 C131.05,7.8,114.72-16.96,91.08,16.73L91.08,16.73z"/>
                    </svg>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-300">Some Art</h1>
                <ul className="list-disc space-y-1">
                    <li>
                        <InlineLink text='Some Drawings' url='/Drawings'/> made with pencil on paper.
                    </li>
                    <li> <InlineLink text='Some digital art' url='/DigitalArt'/>, made with either Procreate or Concepts. </li>
                    <li> <InlineLink text='Some t-shirts' url='/T-Shirts'/> I designed/painted </li>
                </ul>
            </div>
            <div className = "h-full w-[75vw] md:w-[25vw] flex flex-col justify-start items-center gap-5 lg:gap-10 px-2.5">
            <svg className="hidden md:block h-16 w-16 lg:h-24 lg:w-24" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 450 450">
                    <motion.path id="Selection"
                        fill="none" stroke="white" stroke-width="5"
                        initial={{pathLength: 0, opacity: 0.8}}
                        whileInView={{pathLength: 1, opacity: 1, transition: {duration: 3}}}
                        d="M435.6804 62.5C360.821 65.2507 300.1111 81.4469 253.6997 106.4148 253.6997 106.4148 230.5117 145.19 230.5117 145.19 230.5117 145.19 226.6035 123.0854 226.6035 123.0855 218.3141 128.9096 210.6197 135.0626 203.5382 141.5029 203.5382 141.5029 191.9819 176.9577 191.9819 176.9577 191.9819 176.9577 188.0226 157.1648 188.0226 157.1649 156.0377 192.9713 140.4899 235.7413 141.6481 279.8371 178.8441 206.1367 245.8282 143.9295 308.4335 105.8247 308.4335 105.8247 316.0792 118.3904 316.0792 118.3904 256.821 154.4573 193.0284 213.7564 156.9914 282.2488 156.9914 282.2487 166.5562 282.2487 166.5562 282.2488 182.1197 272.791 197.3686 261.1159 212.512 248.0687 212.512 248.0686 188.6867 249.3236 188.6867 249.3237 188.6867 249.3236 231.3473 231.1525 231.3473 231.1525 268.2301 196.8174 304.8888 156.4236 344.1109 122.349 344.1109 122.349 324.8571 118.2653 324.8571 118.2653 324.8571 118.2653 369.3133 101.7182 369.3133 101.7182 390.4421 85.5999 412.4318 71.9412 435.678 62.5 435.678 62.5 435.6804 62.5 435.6804 62.5M91.5126 296.9508C91.5126 296.9508 91.5126 320.8768 91.5126 320.8769 91.5126 320.8768 197.3183 320.8768 197.3183 320.8769 197.3183 320.8768 197.3183 296.9508 197.3183 296.9508 197.3183 296.9508 91.5126 296.9508 91.5126 296.9508 91.5126 296.9508 91.5126 296.9508 91.5126 296.9508M107.5451 335.5805C107.5451 335.5804 81.8502 358.1531 81.8502 358.1532 81.8502 358.1531 64.3196 425.0081 64.3196 425.0082 64.3196 425.0081 75.7523 437.4999 75.7523 437.5 75.7523 437.4999 215.1951 437.4999 215.1951 437.5 215.1951 437.4999 226.6514 425.0089 226.6514 425.009 226.6514 425.0089 209.1208 358.1539 209.1208 358.154 209.1208 358.1539 184.8029 335.5812 184.8029 335.5813 184.8029 335.5812 107.5451 335.5812 107.5451 335.5813 107.5451 335.5812 107.5451 335.5804 107.5451 335.5805"/>
                    </svg>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-300">Selected Writings</h1>
                <ul className="list-disc space-y-1">
                    <li>
                        <InlineLink text='Unfolded' url='/pdfs/CreativeWriting/Unfolded.pdf'/>: a short sci-fi story, probably the work I'm proudest of. Mentored and edited by the absolutely wonderful Scott Hutchins.
                    </li>
                    <li>
                        <InlineLink text='Colourless' url='/pdfs/CreativeWriting/Colourless.pdf'/>: my entry in a flash fiction competition, back when I attended a British-curriculum high-school (hence the spelling).
                    </li>
                    <li>
                        <InlineLink text='Three Seconds' url='/pdfs/CreativeWriting/Three Seconds.pdf'/>: a short poem from the perspective of Mother Nature.
                    </li>
                    <li>
                        <InlineLink text='WhYuPenN' url='/pdfs/CreativeWriting/WhyCollegeJoke.pdf'/>: a joke essay I wrote out of frustration while in the depths of college applications. Sorry UPenn.
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
