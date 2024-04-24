# Portfolio Website

## Introduction

This web application was created as a follow along project to learn about Next.js, Tailwind CSS, Framer Motion and Resend. If you also want to follow along refer [ByteGrad](https://www.youtube.com/watch?v=sUKptmUVIBM&t=22784s) or get it from his repository [Repository](https://github.com/ByteGrad/portfolio-website). It was a great learning experience to work on my front-end skills. I have modified his project and uses Next.js version 14 which supports stable server actions used to emails using Resend (version 3.2.0).

If you want to run the project:

1. Clone the project

```
    git clone https://github.com/Parth0921/PortfolioWebsite
```

2. Run the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you had like to customize email and make it your own, you need to create your own api key check [Resend](https://resend.com/docs/api-reference/api-keys/create-api-key) and make an environment file with .env.local with the following content

> RESEND_API_KEY=YOUR_API_KEY
