import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    console.log('clicked' )
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('user', user)
      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Sign up was successful");
      navigate("/");
    } catch (error) {
      console.log('error', error)
      toast.error("Could not authorize with Google");
    }
  }
  return (
    <button
      className="flex items-center justify-center w-full h-10 text-sm text-center text-white uppercase transition duration-200 ease-in-out bg-red-500 rounded-md shadow-md hover:bg-red-700 active:bg-red-800 hover:shadow-lg"
      onClick={onGoogleClick} type="button">
      <FcGoogle className="mr-1 text-xl bg-white rounded-full" />
      <p>continue with google</p>
    </button>
  );
}
