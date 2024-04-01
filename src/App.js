import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "../src/components/Error";
import SearchResultContainer from "../src/components/SearchResultContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResultContainer />,
      },
    ],
  },
]);

export default App;
