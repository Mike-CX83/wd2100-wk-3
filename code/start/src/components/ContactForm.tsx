import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // stay on the page instead of doing a real browser submit
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="rounded-xl border bg-card p-6 text-card-foreground">
        Thanks. Your message was received.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-full space-y-4 rounded-xl border bg-card p-4 text-card-foreground sm:max-w-lg sm:p-6 lg:max-w-xl"
    >
      {/* name + email stack on mobile, sit side by side from sm up */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-md border border-input bg-background px-3 py-2"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Submit
      </Button>
    </form>
  )
}
