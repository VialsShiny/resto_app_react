const Footer = () => {
  return (
    <>
      <div class="w-full px-12 lg:px-24 py-6 flex flex-col lg:items-end">
        <div class="w-full lg:w-1/4 flex flex-col">
          <div class="flex items-center space-x-3">
            <img alt="Resto app logo with orange hexagonal shape and restaurant icon inside" class="w-16 h-16" src="http://localhost:8000/storage/assets/logo/restoApp.svg" draggable="false" />
            <a href="/" class="font-bold text-black text-2xl hover:text-red-600 transition-all">
              Resto app
            </a>
          </div>
          <p>
            Our mission is to satisfy your hunger with tasty food, delivered quickly and at no charge
          </p>
          <div class="flex gap-6 text-xl lg:text-2xl text-[#F54748] lg:mt-2">
            <i class="ri-instagram-line"></i>
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-twitter-x-fill"></i>
          </div>
        </div>
        <hr class="w-full border-[#F54748] rounded-xl my-6 lg:my-8" />
      </div>
    </>
  )
}

export default Footer;