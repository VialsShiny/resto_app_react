import { Link } from "react-router-dom";

const ErrorPage = ({ status = 404 }) => {
  switch (status) {
    case 404:
      return (
        <>
          <div className="w-full min-h-screen flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 className="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">4<img className="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 mais avec une pizza" draggable="false" />4</h2>
            <strong className="text-4xl">Whoops... Page Not Found</strong>
            <p className="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The page you are looking for might have been removed had its name changed or is temporarily unavailable
            </p>
            <Link to="/" className="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </Link>
          </div>
        </>
      )
    case 505:
      return (
        <>
          <div className="w-full min-h-screen flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 className="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">
              5<img className="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 décoratif" draggable="false" />0
            </h2>
            <strong className="text-4xl">Oops... Something Went Wrong</strong>
            <p className="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The server encountered an internal error or misconfiguration and was unable to complete your request.
            </p>
            <Link href="/" className="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </Link>
          </div>
        </>
      )

    default:
      return (
        <>
          <div className="w-full min-h-screen flex flex-col justify-center items-center px-12 lg:px-16 text-center">
            <h2 className="flex gap-x-4 lg:gap-x-8 items-center text-8xl lg:text-[10rem] font-extrabold tracking-wide text-[#F54748]">4<img className="w-24 h-24 lg:w-36 lg:h-36" src="http://localhost:8000/storage/assets/logo/error_number.png" alt="0 mais avec une pizza" draggable="false" />4</h2>
            <strong className="text-4xl">Whoops... Page Not Found</strong>
            <p className="max-w-3xl font-medium text-gray-400 text-lg mt-6">
              The page you are looking for might have been removed had its name changed or is temporarily unavailable
            </p>
            <Link href="/" className="bg-[#F54748] text-white text-md font-bold tracking-wide rounded-full px-8 py-2 mt-12 hover:bg-red-600 transition duration-500">
              GO TO HOMEPAGE
            </Link>
          </div>
        </>
      )
  }
}

export default ErrorPage;