import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
