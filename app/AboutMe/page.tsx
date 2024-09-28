import InlineLink from "@/components/InlineLink";

export default function Page() {
    return (
      <section className="w-full flex flex-col ml-[10vw] mt-20 items-start justify-center text-sm md:text-base lg:text-lg"
    id="More About Me">
      <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
        More About Me
      </h1>
      <br></br>
      <div className="w-5/6 md:w-3/4 flex flex-col-reverse md:flex-row justify-between items-start gap-20">
        <ul className="w-full flex flex-wrap md:w-7/12 space-y-12">
            <li>
                <h1 className="text-sky-300 font-semibold text-lg first-line:md:text-xl lg:text-2xl"> Basic Info</h1>
                <p> <u className="font-medium text-sky-200"> Full Name:</u> Aaryan Chirag Sukhadia </p>
                <p> <u className="font-medium text-sky-200"> Age:</u> Some open neighborhood of 22 </p>
                <p> <u className="font-medium text-sky-200"> Pronouns:</u> Any/All </p>
                <p> <u className="font-medium text-sky-200"> Nationality:</u> Indian </p>
                <p> <u className="font-medium text-sky-200"> Favorite Word:</u> Syzygy </p>
                <p> <u className="font-medium text-sky-200"> Hobbies:</u> Watching Film&TV; Playing Video Games; Writing Short Stories</p>
                <p> <u className="font-medium text-sky-200"> Why Astronauts</u>: You may have noticed a number of astronaut-themed content around this site. In short, I feel they symbolize humanity's unyielding curiosity and drive to explore the unknown. It's possibly my favorite thing about us.</p>
            </li>
            <li>
                <h1 className="text-sky-300 font-semibold text-lg first-line:md:text-xl lg:text-2xl"> Some Favorites</h1>
                <p><u className="font-medium text-sky-200"> Opening Line(s) of a Book</u> </p>
                <ul className="list-disc list-inside">
                    <li> <em className="font-serif">"I'm pretty much fucked."</em> &nbsp; -- Andy Weir's <em>The Martian</em></li>
                    <li> <em className="font-serif">"This book is the child of an unborn parent."</em> &nbsp; -- Zariski's <em>Commutative Algebra</em></li>
                    <li> <em className="font-serif">"Doing things right is simple: just eliminate all your mistakes and then you'll be perfect."</em> &nbsp; -- Julian Baggini's <em>The Duck That Won The Lottery</em></li>
                </ul>
                <br/>
                <p><u className="font-medium text-sky-200"> Song Titles </u> </p>
                <ul className="list-disc list-inside">
                    <li> <em>The Only Difference Between Martydrom and Suicide is Press Coverage</em> -- Panic! At The Disco</li>
                    <li> <em>Headfirst Slide into Cooperstown on a Bad Bet</em> -- Fall Out Boy </li>
                    <li> <em>Sun Bleached Flies</em> -- Ethel Cain </li>
                </ul>
                <br/>
                <p><u className="font-medium text-sky-200"> Queer Characters </u> </p>
                <ul className="list-disc list-inside">
                    <li> Alex Fierro -- Rick Riordan's <em> Magnus Chase </em> series</li>
                    <li> Kikunojo of the Lingering Snow -- Eiichirdo Oda's <em>One Piece</em> </li>
                    <li> Any dwarf in Terry Pratchett's <em>Discworld</em> series</li>
                    <li> Irving -- <em>Severance</em> (the TV Show) </li>
                </ul>
                <br/>
            </li>
        </ul>
        <figure className="w-5/6 md:w-1/4 flex flex-col items-center text-center text-xs md:text-sm lg:text-base">
            <img src='/images/Portrait.jpeg' className="w-1/2 lg:w-52 xl:w-72 items-center">
            </img>
            <figcaption> <em>One of the less-unfortunate-looking photographs of me.</em></figcaption>
            <hr></hr>
        </figure>
      </div>
      <br/><br/><br/><br/>
    </section>
    )
  }
  