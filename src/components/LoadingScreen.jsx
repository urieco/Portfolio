import HashLoader from "react-spinners/HashLoader";

function LoadingScreen() {
  return (
    <div className="LoadingScreen">
      <HashLoader
        color="#36d7b7"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export { LoadingScreen };
