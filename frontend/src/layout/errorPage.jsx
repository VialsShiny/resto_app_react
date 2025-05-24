const ErrorPage = ({ status = 404 }) => {
  switch (status) {
    case 404:
      return (
        <>
          <div class="w-full min-h-[89vh] flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 class="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">4<img class="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 mais avec une pizza" draggable="false" />4</h2>
            <strong class="text-4xl">Whoops... Page Not Found</strong>
            <p class="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The page you are looking for might have been removed had its name changed or is temporarily unavailable
            </p>
            <a href="/" class="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </a>
          </div>
        </>
      )
    case 505:
      return (
        <>
          <div class="w-full min-h-[89vh] flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 class="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">
              5<img class="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 décoratif" draggable="false" />0
            </h2>
            <strong class="text-4xl">Oops... Something Went Wrong</strong>
            <p class="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The server encountered an internal error or misconfiguration and was unable to complete your request.
            </p>
            <a href="/" class="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </a>
          </div>
        </>
      )

    default:
      return (
        <>
          <div class="w-full min-h-[89vh] flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 class="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">4<img class="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 mais avec une pizza" draggable="false" />4</h2>
            <strong class="text-4xl">Whoops... Page Not Found</strong>
            <p class="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The page you are looking for might have been removed had its name changed or is temporarily unavailable
            </p>
            <a href="/" class="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </a>
          </div>
        </>
      )
  }
}

export default ErrorPage;