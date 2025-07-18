import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import { HomePage } from "./pages/home"
import { DocsPage } from "./pages/docs"
import { ComponentsPage } from "./pages/components"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}