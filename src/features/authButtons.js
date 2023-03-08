import { auth, provider } from "../firebase";
import { setUser, signOut } from "./Auth";
import { useDispatch } from 'react-redux';
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

//Sign In ボタン
export const SignInWithGoogleButton = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleSignInClick = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        dispatch(setUser(user));  //ユーザーの状態を更新
        navigate("/home")
    })
    .catch((error) => {
    console.log(error);
    });
  };

  return (
    <button onClick={handleSignInClick}>
      Sign In
    </button>
  );
};

//Sign Out　ボタン
export const SignOutButton = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleSignOutClick = () => {
    auth.signOut()
    .then(() => {
      dispatch(signOut());
      navigate("/")
    })
    .catch((error) => {
    console.log(error);
    });
  };

  return (
    <button onClick={handleSignOutClick}>
      Sign Out
    </button>
  );
};
