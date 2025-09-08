# Nosora Dummy Store

Modern online store website with search product filter.

### Installation for Local Host

Requirement:

- pnpm v10.14.x or newer
- nodejs v22.x or newer

Install the dependencies:

```bash
pnpm install
```

### Dotenv

Create ".env" file in root project folder (same level as "package.json") with the following content:

```bash
VITE_BASE_URL_API=https://dummyjson.com
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm build
```

---

Built with ❤️ using React Router v7 framework.
