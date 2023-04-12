import Div100vh from "react-div-100vh";

export const Container = ({ children }: { children: any }) => {
  return <Div100vh className="container">{children}</Div100vh>;
};
