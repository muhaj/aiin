
import { ExternalLink } from '@/components/external-link'


const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
      <h1 className="text-lg font-semibold">
          Welcome to AI Invest, Radix Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an AI Invest app built with{' '}
          <ExternalLink href="https://radixdlt.com ">Radix</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
        </p>
      </div>
    </div>
  )
}
