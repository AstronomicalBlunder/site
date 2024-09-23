import InlineLink from "@/components/InlineLink";

export default function Page() {
    return (
      <section className="w-[75vw] lg:w-[50vw] flex flex-col ml-[10vw] mt-40 items-start justify-center text-xs md:text-sm lg:text-base"
    id="Resources">
      <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
        Resources
      </h1>
      <p>Some general resources compiled/created by me for learning/doing/teaching/ mathematics.</p> 
      <br></br>
      <ul className="space-y-5 list-disc">
      <li>
        Some <InlineLink text='LaTeX Templates' url='https://github.com/AstronomicalBlunder/LaTeX-Templates'/> I made for notes, problem sets, etc.
    </li>
    <li>
    <InlineLink text='How to Write Proofs' url='/pdfs/Math/ProofWriting.pdf'/>, compiled by me and some fellow counselors at PROMYS 2022.
    </li>
    <li>
    <InlineLink text='How to Give a Math Talk' url='/pdfs/Math/How to Give A Math Talk.pdf'/>, by me and the wonderful Andrew Lee. While created for mini-talks, the advice generalizes. Also see: John McCarthy's <InlineLink text='How to Give a Good Colloquium' url='https://www.ams.org/profession/leaders/workshops/gcoll.pdf'/> (though I disagree with #12 and the sandwiched clause of #4).
    </li>
      </ul>
    </section>
    )
  }
  