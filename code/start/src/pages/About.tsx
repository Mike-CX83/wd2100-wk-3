import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// simple about page using the same card component as Home and Features
export default function About() {
  return (
    <section className="w-full max-w-3xl space-y-6">
      <h2 className="text-3xl font-bold">About</h2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>What MyApp is</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>
            MyApp is a small website with three pages: Home, About, and
            Features.
          </p>
          <p>
            Use the header to move between pages or switch between light and
            dark mode.
          </p>
          <p>
            The Features page includes a contact form if you want to send a
            message.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
