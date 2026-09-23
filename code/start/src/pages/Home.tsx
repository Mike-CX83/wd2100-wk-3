import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const highlights = [
  {
    title: "Light and dark",
    description: "Switch the theme from the header whenever you want.",
  },
  {
    title: "Fits any screen",
    description: "Cards stay readable on a phone, tablet, or desktop.",
  },
  {
    title: "Get in touch",
    description: "Use the Features page form to send a short message.",
  },
]

export default function Home() {
  return (
    <section className="w-full space-y-8">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-3xl font-bold md:text-4xl">Welcome to MyApp</h2>
        <p className="text-muted-foreground">
          A small site with pages, a theme toggle, and a contact form.
        </p>
        {/* asChild lets the shadcn Button style wrap a React Router Link */}
        <Button asChild>
          <Link to="/features">View features</Link>
        </Button>
      </div>
      {/* 1 column on phones, 2 on tablets, 3 on desktop */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="w-full">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link to="/about">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
