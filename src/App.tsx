import Spinner from "./loaders/spinner-loader/Spinner";
import Dots from "./loaders/dots-loader/Dots";
import "./styles/App.css";
import InfiniteBar from "./loaders/infinite-bar-loader/InfiniteBar";

function App() {
  return (
    <>
      <Spinner />
      <Dots />
      <InfiniteBar />
    </>
  );
}

export default App;
