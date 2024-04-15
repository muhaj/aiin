# AIIN AI Chatbot for Stock Trading

![Project Logo](path-to-your-logo.png) *Replace with the path to your logo*

**Tagline:** Revolutionizing Stock Trading with Conversational AI

## Problem Statement

**Issue:** The complexity and inaccessibility of stock trading for the average person.

**Impact:** Potential investors often feel overwhelmed and excluded from the stock market.

## Solution

**AIIN AI Chatbot:** An AI-driven chatbot that simplifies stock trading through natural conversations.

**Features:**
- Real-time stock information
- Guidance on stock purchases
- Interactive UI elements for an engaging user experience

## Technology Overview

**Model Providers** Aiin ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code.

**Built With:** Advanced AI models, React for streamable UI components, and server-side logic for secure transactions.

**Integration:** Seamlessly integrates with MetaMask for transactions on the EVM Sidechain.

## Key Features

- **Stock Information:** Provides up-to-date stock prices and trends.
- **Purchase Facilitation:** Guides users through the process of buying stocks.
- **User Engagement:** Interactive elements like stock cards, purchase UIs, and event highlights.

## Target Audience

- **Novice Traders:** Individuals new to stock trading looking for a simplified entry point.
- **Tech-Savvy Investors:** Users comfortable with digital platforms seeking efficient ways to trade.
- **AI Enthusiasts:** People interested in the latest AI technologies and their applications.

## Market Opportunity

- **Growth of Retail Trading:** Highlight the increasing participation of retail investors in the stock market.
- **AI Adoption:** Discuss the growing acceptance and use of AI in financial services.

## Competitive Advantage

- **Innovative Approach:** Combining AI chat technology with stock trading.
- **User Experience:** Simplifying stock trading into conversational interactions.
- **Technology:** Leveraging cutting-edge AI for real-time data processing and decision support.

## Business Model

**Monetization Strategies:** Subscription fees, transaction fees, or partnerships with trading platforms.

## Roadmap

- **Current Status:** Development phase, key features implemented.
- **Next Steps:** Beta testing, user feedback collection, additional feature development.
- **Future Vision:** Expanding to other financial services, personal finance management, and global markets.
## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


