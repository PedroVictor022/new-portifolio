export const TechItem = ({ comp, title, id }) => {
  return (
    <div 
    className={`bg-gradient-to-r shadow-md hover:scale-105 duration-500 to-zinc-900 from-gray-900 hover:duration-200 py-2 rounded-lg hover:scale-105 duration-100`}
    key={id}
    >
      <div className="text-5xl sm:text-3xl md:text-3xl">{comp}</div>
      <div className="text-white">{title}</div>
    </div>
  )
}