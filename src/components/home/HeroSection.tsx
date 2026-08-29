@import "tailwindcss";

:root {
  --background: #f2efe7;
  --foreground: #3368a0;
  --navy: #3368a0;
  --navy-light: #66a3bf;
  --slate: #3368a0;
  --slate-light: #66a3bf;
  --emerald: #66a3bf;
  --emerald-dark: #3368a0;
  --emerald-light: #c8dfdb;
  --surface: #c8dfdb;
  --border: #66a3bf;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-navy: var(--navy);
  --color-navy-light: var(--navy-light);
  --color-slate: var(--slate);
  --color-slate-light: var(--slate-light);
  --color-emerald: var(--emerald);
  --color-emerald-dark: var(--emerald-dark);
  --color-emerald-light: var(--emerald-light);
  --color-surface: var(--surface);
  --color-border: var(--border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}

::selection {
  background: var(--emerald-light);
  color: var(--navy);
}

.gradient-text {
  background: linear-gradient(135deg, #3368a0 0%, #66a3bf 50%, #c8dfdb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.glass-dark {
  background: rgba(51, 104, 160, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, #c8dfdb 1px, transparent 0);
  background-size: 32px 32px;
}

.dashboard-glow {
  box-shadow:
    0 0 0 1px rgba(102, 163, 191, 0.2),
    0 20px 60px -12px rgba(51, 104, 160, 0.2),
    0 8px 24px -8px rgba(102, 163, 191, 0.16);
}

.form-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: var(--navy);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--emerald);
  box-shadow: 0 0 0 3px rgba(102, 163, 191, 0.25);
}

.form-input::placeholder {
  color: var(--slate-light);
}
