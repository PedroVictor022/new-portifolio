const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Pedro Victor</h1>
      </div>

      <div className="flex">
        <a className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-150 duration-200">Home</a>
        <a className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-150 duration-200">Sobre</a>
        <a className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-150 duration-200">Projetos</a>
      </div>
      
    </div>
  )
}

export default Navbar;