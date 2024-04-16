/* eslint-disable react/prop-types */

const Btn = ({title,handleSubmit}) => {
  return (
      <button 
      onClick={handleSubmit}
      className=" bg-primary w-full font-black p-2 rounded-md text-white"
      >
        {title}
        </button>
  )
}

export default Btn
