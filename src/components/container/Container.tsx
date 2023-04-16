import Div100vh from "react-div-100vh";
import "./container.css";

export const Container = ({ children }: { children: any }) => {
  return <Div100vh className="container">{children}</Div100vh>;
};
