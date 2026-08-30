import { Route, Routes } from "react-router-dom";
import { ImageViewerProvider } from "./components/ImageViewer";
import WikiHeader from "./components/WikiHeader";
import HomePage from "./pages/HomePage";
import ProjectFallbackPage from "./pages/ProjectFallbackPage";
import RushHourPage from "./pages/projects/RushHourPage";

export default function App() {
  return (
    <ImageViewerProvider>
      <WikiHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/rush-hour" element={<RushHourPage />} />
        <Route path="/projects/:slug" element={<ProjectFallbackPage />} />
      </Routes>
    </ImageViewerProvider>
  );
}
