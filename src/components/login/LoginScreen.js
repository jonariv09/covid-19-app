import { FcGoogle } from "react-icons/fc";

export const LoginScreen = () => {
  
  return (
    <>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <FcGoogle />
        <span> Login with Google </span>
      </button>
    </>
  )

}
