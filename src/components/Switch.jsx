
const Switch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className=" text-white peer outline-none duration-100 after:duration-500 w-28 h-14 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white  after:content-['ES'] after:absolute after:outline-none after:h-12 after:w-12 after:bg-blue-gray-900 after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['EN']"></div>
    </label>
  );
};

export default Switch;
