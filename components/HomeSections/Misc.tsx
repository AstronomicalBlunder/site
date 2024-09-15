'use-client;'
import React from 'react'
import InlineLink from '../InlineLink'
import Button from '../Button'

export default function Misc() {
  return (
    <section className="h-screen w-[75vw] md:snap-center md:snap-always pt-20 scroll-mt-40"
    id="Misc">
      <ul className="text-xs md:text-sm lg:text-base space-y-8" >
        <li>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-300" > Computer Stuff </h1>
          <ul className="list-disc indent-1 space-y-2">
            <li> This Website [Link URL here later] </li>
            <li> I've maintained and designed the <InlineLink text='SUMO Website' url='https://sumo.stanford.edu'/> for the past couple of years </li>
            <li> If you're interested in learning to code I can't recommend a better starting resource than the
               <InlineLink text='CS106B Archive by Keith Schwarz' url='https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1214/'/>.
            </li>
          </ul>
        </li>
        <li>
         <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-300" > 
          Stanford Projects
          </h1>
          Here's a bunch work I've done in classes in my undergrad that I'm kinda proud of.<br></br>
          <ul className="list-disc indent-1 space-y-2">
            <li>
              <InlineLink text='"Understanding Wild"' url='/PPTs/PWR2-Pres.pptx'/>: a presentation (see <InlineLink text='PDF' url='/pdfs/PWR2-Pres.pdf'/> version, not recommended) on a research project on environmentalist depictions in Japanese vs Western video games. Nominated for the Lunsford Award for Oral Presentation of Research at Stanford.
            </li>
            <li>
              <InlineLink text='Conjunction and/or Disjunction in the Law' url='/pdfs/LinguisticsInLawSlides.pdf'/>: a joint presentation by me and my freshman-year roommate on the (mis)applications of linguistic norms in legal contexts.
            </li>
            <li>
              <InlineLink text='Auto-Immobile' url='/pdfs/PWR RBA.pdf'/>: basically a 20-page academic rant on America's heinous stroad problem and why it doesn't have to be that way. Another mini-academic rant on the same topic is  <InlineLink text='here' url='/pdfs/Bio 184 Essay.pdf'/>.
            </li>
          </ul>
        </li>
        <li>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-300" > 
            Some Dangerous Links
          </h1>
          Definitely STAY AWAY from these horrid, illicit tutorials on things you should NOT be doing.
          <ul className='list-disc'>
            <li>
              <InlineLink text='https://www.wikihow.com/Download-from-Pirate-Bay' url='https://www.wikihow.com/Download-from-Pirate-Bay'/>
            </li>
            <li>
              <InlineLink text='https://librarygenesis.net' url='https://librarygenesis.net'/>
            </li>
            <li>
              Method #4 on <InlineLink text='https://www.wikihow.com/Download-Music' url='https://www.wikihow.com/Download-Music'/>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
