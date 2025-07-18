
import { Header } from "./header"
import { Footer } from "./footer"

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  )
}