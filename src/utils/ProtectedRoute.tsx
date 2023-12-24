import { RootState } from "@/app/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface protectRouteType {
  Component: React.ComponentType;
}

function ProtectedRoute(props: protectRouteType) {
  const { Component } = props;
  const { data } = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, []);

  return <Component />;
}

export default ProtectedRoute;
