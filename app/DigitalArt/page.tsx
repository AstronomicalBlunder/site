export default function Page() {
    return (
      <section className="flex flex-col ml-[10vw] mt-40 items-start justify-center"
    id="Drawing">
      <h1 className="text-white text-lg md:text-xl lg:text-2xl
      ">
        Digital Art, made via either Procreate or Concepts.
      </h1>
      <ul className="space-y-5 indent-5 list-disc gap-5">
        <li>
        <h2>Into The Breach</h2>
          <img src='images/DigitalArt/IntoTheBreach.jpg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
        <h2>Zenitsu</h2>
          <img src='images/DigitalArt/Zenitsu.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
        <h2>L</h2>
          <img src='images/DigitalArt/L.jpg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
        <h2>Giyuu</h2>
          <img src='images/DigitalArt/Giyuu.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
        <h2>Gojo</h2>
          <img src='images/DigitalArt/Gojo.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
      </ul>
    </section>
    )
  }
  