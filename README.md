<div align="center">
  <a href="https://github.com/flolu/auth">
    <img width="100px" height="auto" src="./.github/debugging.png" />
  </a>
  <br>
  <h1>Docker Typescript Debugging</h1>
  <p>Example for Debugging Node.js + Typescript Running inside Docker Containers with Hot Reload</p>
  <a href="https://youtu.be/1WUoITRINf0">
    <img width="320px" height="180px" src="https://img.youtube.com/vi/1WUoITRINf0/mqdefault.jpg" style="border-radius: 1rem;" />
    <p>Watch the YouTube Tutorial</p>
  </a>
</div>

# Features

- Node.js + TypeScript app
- Runs in Docker container
- With hot reload
- Ability to debug with VSCode
- Multiple applications
- A shared library

# Usage

**Recommended OS**: Linux

**Requirements**: Docker, Docker Compose, Visual Studio Code (Optional, for debugging)

**Development**

- `make dev` (Start development backend services, http://localhost:3000 and http://localhost:3001)
- `Ctrl+F5` (Start debugging and choose which container to debug)

# Codebase

- [`app1.ts`](app1.ts) simple Node.js server
- [`app2.ts`](app2.ts) another simple Node.js server

# Important files

- [`docker-compose.yml`](docker-compose.yml) backend development environment
- [`package.json`](package.json) contains nodemon configuration for hot reload
- [`.vscode/launch.json`](.vscode/launch.json) launch configuration for debuggers

# Credits

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
