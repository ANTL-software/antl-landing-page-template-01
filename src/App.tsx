import { HashRouter, Route, Routes } from "react-router-dom";
import { useRouteScroll } from "./hooks";
import { NotFoundPage, ProductLaunchPage } from "./views/layouts";

function RoutedApp() {
  useRouteScroll();

  return <Routes><Route path="/" element={<ProductLaunchPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>;
}

function App() {
  return <HashRouter><RoutedApp /></HashRouter>;
}

export default App;
