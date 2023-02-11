import { DiJavascript1, DiReact, DiPostgresql } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb"
import { SiMongodb, SiPostgresql, SiDocker, SiGraphql } from "react-icons/si"

const Experience = () => {

  const techs = [
    {
      id: 1,
      comp: <DiJavascript1 />,
      title: 'Javascript'
    },
    {
      id: 2,
      comp: <DiReact />,
      title: 'React JS'
    },
    {
      id: 3,
      comp: <FaVuejs />,
      title: 'Vue JS'
    },
    {
      id: 4,
      comp: <TbBrandNextjs />,
      title: 'Next JS'
    },
    {
      id: 5,
      comp: <TbBrandTailwind />,
      title: 'Tailwind css'
    },
    {
      id: 6,
      comp: <SiMongodb />,
      title: 'Mongo DB'
    },
    {
      id: 7,
      comp: <SiPostgresql />,
      title: 'Postgresql'
    },
    {
      id: 8,
      comp: <SiDocker />,
      title: 'Docker'
    },
    {
      id: 9,
      comp: <SiGraphql />,
      title: 'GraphQL'
    },
    {
      id: 10,
      comp: <DiJavascript1 />,
      title: 'Javascript'
    },
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-800 to-gray-700">

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">

        <div>
          <p className="text-4xl sm:text-7xl font-bold text-purple-600">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 to-purple-300">Techs Favoritas</span>
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-100">Estas são as tecnologias com as quais trabalhei ao longo do tempo.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {
            techs.map(item => (
              <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg" key={item.id}>
                <div className="w-80 mx-auto">{item.comp}</div>
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Experience