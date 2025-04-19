import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "./slice.jsx"; // Adjust the path if needed
import { useNavigate } from "react-router-dom";

const AutoLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log("User inactive for 2 minutes. Logging out..."); // Debugging
        dispatch(logoutUser());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      }, 30 * 60 * 1000); // 2 minutes (120,000 ms)
    };

    // Detect user activity
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;
    window.onkeydown = resetTimer;
    window.addEventListener("scroll", resetTimer);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [dispatch, navigate]);

  return null; // No UI, just logic
};

export default AutoLogout;
