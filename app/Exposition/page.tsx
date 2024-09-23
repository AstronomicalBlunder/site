import InlineLink from "@/components/InlineLink";

export default function Page() {
    return (
      <section className="w-[75vw] lg:w-[50vw] flex flex-col ml-[10vw] mt-40 items-start justify-center text-xs md:text-sm lg:text-base"
    id="Math Exposition">
      <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
        Math Exposition
      </h1>
      <p>Surely everything below will have typos and errors. Please <InlineLink text='email me' url='mailto:aaryan11@stanford.edu'/> about any you find.</p>
      <br></br>
      <ul className="space-y-10">
        <li>
          <h2 className="text-sky-300 text-base md:text-lg lg:text-xl">
            PROMYS 2022 Mincourse Notes
          </h2>
          <p>Some notes for talks that I gave as a PROMYS counselor.</p> <br/>
          <ul className="list-disc space-y-2 ml-8">
            <li>
              <InlineLink text='AKS Algorithm' url='pdfs/Math/PROMYS_2022/AKSalg.pdf'/>; a proof of the validity of a polynomial-time prime-checking algorithm, along with a runtime analysis.
            </li>
            <li>
              <InlineLink text='Constructible Polygons' url='pdfs/Math/PROMYS_2022/ConstructiblePOlygon.pdf'/>; the 'T-Shirt Talk' on proving (one direction, at least) of the constructbility criterion for regular polygons. (I brough a giant compass and constructed a pentagon on the chalkboard for this talk it was a lot of fun.)
            </li>
            <li>
              <InlineLink text='Generating Functions' url='/pdfs/Math/PROMYS_2022/ConstructiblePOlygon.pdf'/>; given with the wonderful Hahn Lheem.
            </li>
            <li>
              <InlineLink text='Googology' url='/pdfs/Math/PROMYS_2022/Googology.pdf'/>; some fun vignettes of absurdly big finite numbers and how we construct them.
            </li>
            <li>
              <InlineLink text='The Polynomial Trick' url='/pdfs/Math/PROMYS_2022/PolysInComb.pdf'/>; some examples of Alon's "polynomial method" used to generate combinatorial bounds via polynomial vector space dimension arguments.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-sky-300 text-base md:text-lg lg:text-xl">
            Stanford Class Projects
          </h2>
          <br/>
          <ul className="list-disc space-y-2 ml-8">
            <li>
              <InlineLink text="Dinitz' theorem" url="/pdfs/Math/StanfordClasses/107-DinitzThm.pdf"/>: written as a final expository paper for Math 107 (Graph Theory).
            </li>
            <li>
            <InlineLink text='Probabilistic Method' url='/pdfs/Math/ProbabilisticMethod.pdf'/>: a crash course, originally written as a series of mini-lectures for Math75SI students. The examples range from game theory to graph theory to Euclidean geometry. 
            </li>
            <li>
              <InlineLink text="Semidirect Products" url="/pdfs/Math/StanfordClasses/120-SemidirectProducts.pdf"/>: written for the WiM paper in Math 120 (Groups and Rings).
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-sky-300 text-base md:text-lg lg:text-xl">
            Misc Notes
          </h2>
          <br/>
          <ul className="list-disc space-y-2 ml-8">
            <li>
            <InlineLink text="Kontsevichs' Conjecture" url="/pdfs/Math/KontsevichConj.pdf"/>: some notes adapted from a course taught by Prof. <InlineLink text='Melody Chan' url="https://www.math.brown.edu/mchan2/"/>.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-sky-300 text-base md:text-lg lg:text-xl">
            Presentations
          </h2>
          <br/>
          <ul className="list-disc space-y-2 ml-8">
            <li>
            <InlineLink text='Seifert Surfaces' url='/PPTs/SeifertSurfaces.pptx'/>: a presentation with some neat transitions I gave when I was taking Math75SI.
            </li>
          </ul>
        </li>
      </ul>
      <br/><br/><br/><br/>
    </section>
    )
  }
  