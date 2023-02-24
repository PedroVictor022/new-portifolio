const About = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-black to-black pb-48">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 pb-5">
            <p>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">Sobre </span> 
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900">mim</span>
              </p>
          </div>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100 text-2xl font-medium">
            Programador Full Stack, tenho 20 anos, moro em Minas Gerais, estou cursando Análise e Desenvolvimento de Sistemas na PUC Minas, atualmente trabalho como DevJr e também participo de um projeto freelancer que será lançado em breve.
          </p>

        </div>
      </div>


    </div>
  )
}

export default About;