import React, { useEffect } from "react";
import {
  Routes,
  Route,
  HashRouter,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AssignUsers from "./components/AssignUsers";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Preparation from "./components/Preparation";
import Sign from "./components/Sign";
import View from "./components/View";
import Header from "./components/Header";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Welcome from "./components/Welcome";

import { auth, generateUserDocument } from "./firebase/firebase";
import { setUser, selectUser } from "./firebase/firebaseSlice";

import "./App.css";

// const App = () => {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const user = await generateUserDocument(userAuth);
//         const { uid, displayName, email, photoURL } = user;
//         dispatch(setUser({ uid, displayName, email, photoURL }));
//       }
//     });
//   }, [dispatch]);

//   return (
//     <HashRouter>
//       {user ? (
//         <Routes>
//           <Route exact path="/" element={<Welcome />}></Route>
//           <Route path="/assignUsers" element={<AssignUsers />}></Route>
//           <Route path="/prepareDocument" element={<Preparation />}></Route>
//           <Route path="/signDocument" element={<Sign />}></Route>
//           <Route path="/viewDocument" element={<View />}></Route>
//         </Routes>
//       ) : (
//         <div>
//           <Header />
//           <Routes>
//             <Route path="/" element={<SignIn />}></Route>
//             <Route path="/signUp" element={<SignUp />}></Route>
//             <Route path="/passwordReset" element={<PasswordReset />}></Route>
//           </Routes>
//         </div>
//       )}
//     </HashRouter>
//   );
// };

// export default App;

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await generateUserDocument(userAuth);
        const { uid, displayName, email, photoURL } = user;
        dispatch(setUser({ uid, displayName, email, photoURL }));
      }
    });
  }, [dispatch]);

  return (
    <HashRouter>
      <Routes>
        {/* public */}
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/passwordReset" element={<PasswordReset />}></Route>

        {/* private */}
        <Route
          path="/assignUsers"
          element={
            <RequireAuth>
              <AssignUsers />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/prepareDocument"
          element={
            <RequireAuth>
              <Preparation />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/signDocument"
          element={
            <RequireAuth>
              <Sign />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/viewDocument"
          element={
            <RequireAuth>
              <View />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </HashRouter>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useSelector(selectUser);
  let location = useLocation();
  console.log({ user, children });
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signUp" state={{ from: location }} replace />;
  }

  return children;
}
