# isanchezd-site

## Description

This project contains the source code of the my personal CV website

## Stack

- [Astro](https://astro.build/) 5.x - Static site generator with component support
- [React](https://react.dev/) 19 - Interactive components
- [Tailwind CSS](https://tailwindcss.com/) 4.1 - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Resend](https://resend.com/) - Email delivery service for contact form
- [Vercel](https://vercel.com/) - Hosting with serverless function adapter


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
|   └── components/
│       └── reusable components logic
|   └── data/
|       └── static data (json, etc..)
|   └── enums/
|       └── enums used in the site
|   └── i18n/
|       └── i18n implementation
│   └── pages/
│       └── page routes and API endpoints
|   └── sections/
|       └── major page sections (about, experience, education, skills, contact, etc.)
|    └── styles/
|       └── global styles and CSS
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contact Form Setup

The contact form uses [Resend](https://resend.com/) for email delivery. To configure it:

1. **Create a Resend account** (free tier: 100 emails/day)
   - Go to [https://resend.com/signup](https://resend.com/signup)
   - Verify your email address

2. **Get your API key**
   - Go to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Create a new API key

3. **Configure environment variables**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your credentials:
     ```env
     RESEND_API_KEY=re_your_api_key_here
     CONTACT_EMAIL_TO=your-email@example.com
     RESEND_EMAIL_FROM=onboarding@resend.dev
     ```

4. **For production (Vercel)**
   - Go to your Vercel project settings → Environment Variables
   - Add the same three variables: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `RESEND_EMAIL_FROM`

5. **Optional: Use your own domain**
   - In Resend, verify your domain
   - Update `RESEND_EMAIL_FROM` to use your domain (e.g., `contact@yourdomain.com`)

## Authors

- [Ivan Sánchez Díaz](mailto:sanchez.diaz.ivan@gmail.com)
