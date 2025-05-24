const Footer = () => {
  return (
    <>
      <div className="w-full px-12 lg:px-24 py-6 flex flex-col lg:items-end">
        <div className="w-full lg:w-1/4 flex flex-col">
          <div className="flex items-center space-x-3">
            <img alt="Resto app logo with orange hexagonal shape and restaurant icon inside" className="w-16 h-16" src="http://localhost:8000/storage/assets/logo/restoApp.svg" draggable="false" />
            <a href="/" className="font-bold text-black text-2xl hover:text-red-600 transition-all">
              Resto app
            </a>
          </div>
          <p>
            Our mission is to satisfy your hunger with tasty food, delivered quickly and at no charge
          </p>
          <div className="flex gap-6 text-xl lg:text-2xl text-[#F54748] lg:mt-2">
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-twitter-x-fill"></i>
          </div>
        </div>
        <hr className="w-full border-[#F54748] rounded-xl my-6 lg:my-8" />
      </div>
    </>
  )
}

export default Footer;