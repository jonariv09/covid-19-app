import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/auth";

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const handleGoogleLogin = () => {
		console.log("Hi!!");
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<button
				className="hover:bg-gray-300 text-gray-800 font-bold py-2 px-4
        border border-gray-400 rounded inline-flex items-center"
				onClick={handleGoogleLogin}
			>
				<FcGoogle />
				<span> Login with Google </span>
			</button>
		</>
	);
};
