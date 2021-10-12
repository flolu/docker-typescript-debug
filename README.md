<div align="center">
  <a href="https://github.com/flolu/auth">
    <img width="100px" height="auto" src="./.github/debugging.png" />
  </a>
  <br>
  <h1>Docker Typescript Debugging</h1>
  <p>Example for Debugging Node.js + Typescript Running inside Docker Containers with Hot Reload</p>
  <!-- <a href="https://youtu.be/XXX">
    <img width="320px" height="180px" src="https://img.youtube.com/vi/XXX/mqdefault.jpg" style="border-radius: 1rem;" />
    <p>Watch the YouTube Tutorial</p>
  </a> -->
</div>

# Usage

**Recommended OS**: Ubuntu 20.04 LTS

**Requirements**: Yarn, Docker, Docker Compose

**Setup**

- `yarn install`

**Development**

- `make dev` or `yarn dev` (Start development backend services, http://localhost:3000)
- `Ctrl+F5` (Choose which container to debug)

# Codebase

- [`docker-compose.yml`](docker-compose.yml) backend development environment
- [`.vscode/launch.json`](.vscode/launch.json) launch configuration for debuggers

# Credits

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
