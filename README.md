# openapi-testgen

A CLI tool that ingests an OpenAPI/Swagger spec and automatically generates test stubs — so you never have to hand-write boilerplate test files again.

> Inspired by a real tool built and shipped into a production CI/CD pipeline at FamilySearch.

---

## Features

- Accepts a Swagger/OpenAPI spec via **URL or local file** (JSON or YAML)
- Parses all endpoints, HTTP methods, parameters, and response schemas
- Generates test stubs for **Jest** or **Vitest**
- Also outputs a raw **YAML** summary of all endpoints
- Groups output files **by resource** (e.g. `pet.test.ts`, `user.test.ts`)
- Colored terminal output with spinner via **chalk** and **ora**
- Outputs a **GitHub Action** config so it runs automatically in CI

---

## Installation

```bash
npm install -g openapi-testgen
```

Or run without installing:

```bash
npx openapi-testgen <spec>
```

---

## Usage

### Basic — generate stubs from a URL
```bash
openapi-testgen generate https://petstore.swagger.io/v2/swagger.json
```

### From a local file
```bash
openapi-testgen generate ./openapi.yaml
```

### Specify output format
```bash
openapi-testgen generate ./openapi.yaml --format vitest
openapi-testgen generate ./openapi.yaml --format jest       # default
openapi-testgen generate ./openapi.yaml --format yaml
```

### Output to a directory
```bash
openapi-testgen generate ./openapi.yaml --out ./tests/generated
```

---

## Example Output

Given an endpoint like:

```yaml
/users/{id}:
  get:
    summary: Get a user by ID
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: string
    responses:
      200:
        description: A user object
      404:
        description: User not found
```

`openapi-testgen` produces:

```typescript
// generated/users.test.ts

import { describe, it, expect } from 'vitest';

describe('GET /users/{id}', () => {
  it('should return 200', async () => {
    const response = await request.get('/users/{id}');
    expect(response.status).toBe(200);
  });

  it('should return 404', async () => {
    const response = await request.get('/users/{id}');
    expect(response.status).toBe(404);
  });
});
```

---

## Project Structure

```
openapi-testgen/
├── src/
│   ├── cli.ts              # Entry point, command definitions (commander)
│   ├── parser.ts           # Ingests and normalizes OpenAPI spec (swagger-parser)
│   ├── generator.ts        # Routes to the correct formatter based on --format
│   ├── formatters/
│   │   ├── jest.ts         # Jest output formatter
│   │   ├── vitest.ts       # Vitest output formatter
│   │   └── yaml.ts         # Raw YAML output formatter
│   └── utils/
│       ├── fileWriter.ts   # Writes output files to disk
│       └── logger.ts       # Rich terminal output (chalk + ora)
├── tests/
│   └── generator.test.ts
├── .github/
│   └── workflows/
│       └── testgen.yml     # GitHub Action config
├── vitest.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## GitHub Action

Add this to your repo to auto-generate test stubs whenever your spec changes:

```yaml
# .github/workflows/testgen.yml
name: Generate API Tests

on:
  push:
    paths:
      - 'openapi.yaml'
      - 'swagger.json'

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: node dist/cli.js generate ./openapi.yaml --out ./tests/generated
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'chore: regenerate API test stubs'
```

---

## Tech Stack

| Layer | Tool |
|---|---|
| Language | TypeScript |
| CLI framework | Commander.js |
| Spec parsing | swagger-parser |
| Terminal output | chalk + ora |
| Test output | Jest / Vitest / YAML |
| Testing | Vitest |
| CI | GitHub Actions |

---

## Roadmap

- [ ] `--watch` mode — re-generate stubs when spec file changes
- [ ] Playwright output formatter
- [ ] Support for multiple spec files in one run
- [ ] Interactive mode (`openapi-testgen init`) for first-time setup
- [ ] Config file (`.testgenrc`) for persistent preferences
- [ ] AI-generated assertions via Claude API (`--ai` flag)

---

## Why This Exists

At FamilySearch, OpenAPI/Swagger test files were being written by hand from the spec URL — a slow, error-prone process. This tool was originally built to solve that exact problem and was shipped directly into the CI/CD pipeline before the internship ended.

This is a cleaned-up, open-source version of that idea.

---

## License

MIT
