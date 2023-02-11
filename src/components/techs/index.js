import { DiJavascript1, DiReact } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind, TbBrandGithub, TbBrandPython } from "react-icons/tb"
import { SiMongodb, SiPostgresql, SiDocker, SiGraphql, SiDart } from "react-icons/si"

const Experience = () => {

  const techs = [
    {
      id: 1,
      comp: <DiJavascript1  className="sm:text-6xl md:text-6xl w-40 mx-auto text-yellow-300 "/>,
      title: 'Javascript',
      // shadow: 'shadow-yellow-400'
    },
    {
      id: 2,
      comp: <DiReact  className="sm:text-6xl md:text-6xl w-40 mx-auto text-cyan-400 "/>,
      title: 'React JS',
      // // shadow: 'shadow-cyan-500'
    },
    {
      id: 3,
      comp: <FaVuejs  className="sm:text-6xl md:text-6xl w-40 mx-auto text-green-400 "/>,
      title: 'Vue JS',
      // // shadow: 'shadow-green-500'
    },
    {
      id: 4,
      comp: <TbBrandNextjs  className="sm:text-6xl md:text-6xl w-40 mx-auto text-white "/>,
      title: 'Next JS',
      // // shadow: 'shadow-white'
    },
    {
      id: 7,
      comp: <TbBrandPython  className="sm:text-6xl md:text-6xl w-40 mx-auto text-yellow-200 " />,
      title: 'Python',
      // // shadow: 'shadow-yellow-200'
    },
    {
      id: 5,
      comp: <TbBrandTailwind  className="sm:text-6xl md:text-6xl w-40 mx-auto text-blue-300 "/>,
      title: 'Tailwind css',
      // // shadow: 'shadow-blue-300'
    },
    {
      id: 6,
      comp: <SiMongodb  className="sm:text-6xl md:text-6xl w-40 mx-auto text-green-600"/>,
      title: 'Mongo DB',
      // // shadow: 'shadow-green-600'
    },
    
    
    {
      id: 8,
      comp: <SiDocker  className="sm:text-6xl md:text-6xl w-40 mx-auto text-blue-400"/>,
      title: 'Docker',
      // // shadow: 'shadow-blue-400'
    },
    {
      id: 9,
      comp: <SiGraphql  className="sm:text-6xl md:text-6xl w-40 mx-auto text-pink-600 "/>,
      title: 'GraphQL',
      // // shadow: 'shadow-pink-600'
    },
    {
      id: 10,
      comp: <SiDart  className="sm:text-6xl md:text-6xl w-40 mx-auto text-blue-300 " />,
      title: 'Dart',
      // // shadow: 'shadow-blue-300'
    },
    {
      id: 11,
      comp: <TbBrandGithub  className="sm:text-6xl md:text-6xl w-40 mx-auto text-white " />,
      title: 'Dart',
      // // shadow: 'shadow-gray-300'
    },
    {
      id: 12,
      comp: <SiPostgresql  className="sm:text-6xl md:text-6xl w-40 mx-auto text-blue-600 "/>,
      title: 'Postgresql',
      // // shadow: 'shadow-blue-600'
    },
    
  ];

  return (
    <div name="experience" className="h-screen w-full bg-gradient-to-b from-black to-gray-700">

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">

        <div className="sm:mx-auto ml">
          <p className="text-4xl sm:text-7xl font-bold text-purple-600">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 to-purple-300">Techs Favoritas</span>
          </p>
          <p className="py-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-100">Estas são as tecnologias com as quais trabalhei ao longo do tempo.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
            techs.map(item => (
              <div className={`bg-gradient-to-r from-purple-900 to-purple-600 to-gray-900 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${item.shadow} hover:scale-105 duration-100`} key={item.id}>
                <div className="sm:text-4xl">{item.comp}</div>
                <p className="text-white">{item.title}</p>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Experience