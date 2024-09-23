export default function Page() {
    return (
      <section className="flex flex-col ml-[10vw] mt-40 items-start justify-center"
    id="TShirts">
      <h1 className="text-white text-lg md:text-xl lg:text-2xl
      ">
        T-Shirts
      </h1>
      <ul className="space-y-5 indent-5 list-disc gap-5">
        <li>
          <h2>Hollow Knight</h2>
          <img src='/images/T-Shirts/HollowKnight.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
          <h2>The Legend of Zelda</h2>
          <img src='/images/T-Shirts/Zelda.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
        <li>
          <h2>PROMYS 2022</h2>
          <img src='/images/T-Shirts/PROMYS2022.jpeg' className=" w-1/3 lg:w-1/4 items-center">
          </img>
        </li>
      </ul>
    </section>
    )
  }
  