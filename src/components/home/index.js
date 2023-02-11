import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Main = () => {
  const [avatar, setAvatar] = useState();

  const profileLink = 'https://api.github.com/users/PedroVictor022';
  const getDataProfile = async (url) => {
    const dataFetch = await fetch(url);
    const resData = await dataFetch.json();
    console.log(resData.avatar_url);
    setAvatar(resData.avatar_url);
  }

  useEffect(() => {
    getDataProfile(profileLink);
  }, [])

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-800 to bg-black ">
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-purple-600 flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 to-purple-200">Desenvolvedor</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 to-purple-200">Full Stack</span>  
          </h1>
          <p className="text-gray-300 py-4 max-w-md">
            3 anos de experiência com desenvolvimento de aplicações Web.
            Atualmente tenho trabalhado com Next JS, Vue Js, PrimeReact e Tailwind.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center items-center rounded-md bg-gradient-to-r from-purple-900 to-purple-400 cursor-pointer text-lg">
              Portifolio 
              <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight /></span>  
            </button>
          </div>
        </div>

        <div>
          <img src={avatar} alt="My photo" className="rounded-full mx-auto w-2/3 md:w-full"/>
        </div>

      </div>
    </div>
  )
}

export default Main