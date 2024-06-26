import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      AI Investment chatbot built with{' '}
      <ExternalLink href="https://radixdlt.com/">Radix</ExternalLink> and{' '}
      <ExternalLink href="https://github.com/muhaj/aiin">
        AI
      </ExternalLink>
      .
    </p>
  )
}
