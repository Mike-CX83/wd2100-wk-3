import ContactForm from "@/components/ContactForm"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Theme toggle",
    body: "Change between light and dark from the header on any page.",
  },
  {
    title: "Works on phones",
    body: "The cards and form resize so the page stays easy to use.",
  },
  {
    title: "Contact form",
    body: "Send your name, email, and a short message.",
  },
]

export default function Features() {
  return (
    <section className="w-full space-y-8">
      <h2 className="text-3xl font-bold">Features</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="w-full">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Send a message</h3>
        {/* form lives in its own component so this page stays mostly layout */}
        <ContactForm />
      </div>
    </section>
  )
}
