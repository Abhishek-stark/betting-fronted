import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ Component }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedPage;
