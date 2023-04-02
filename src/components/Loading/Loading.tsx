import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loading;
