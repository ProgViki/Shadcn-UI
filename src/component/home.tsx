import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="container relative pb-10">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. And
          Next.js 13 Ready.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button asChild>
            <a href="/docs">Get Started</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/shadcn/ui">GitHub</a>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Component {i + 1}</CardTitle>
              <CardDescription>Beautifully designed component</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Preview of component goes here</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}