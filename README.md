# GitHub Trending CLI

![Node.js v25](https://img.shields.io/badge/node-v25.x-brightgreen)
![CLI](https://img.shields.io/badge/type-CLI-blue)
![GitHub API](https://img.shields.io/badge/API-GitHub-black)
![License](https://img.shields.io/badge/license-ISC-lightgrey)

A simple **command-line interface (CLI)** tool built with **Node.js (v25)** that fetches and displays **trending GitHub repositories** using the **GitHub Search API**. Trending is approximated by querying repositories **created after a chosen time window** and sorting by **stars**.

Project from https://roadmap.sh/projects/github-trending-cli

---

## 📦 Features

- Fetch trending repositories via `github-trending-cli trending-repos`
- Time-window filter via `--duration` (`day`, `week`, `month`, `year`)
- Result limit via `--limit`
- Built with `commander` (commands + options)
- Axios-based GitHub API client logic in a dedicated service module
- Clean terminal output with useful fields (stars, URL, created date, description, language)
- ES Modules (`type: module`)

---

## 🧱 Project Structure

```text
Github Trending CLI/
├── index.js
├── package.json
├── package-lock.json
└── src/
    └── services/
        └── githubService.js
```

---

## ⚙️ Tech Stack

| Layer          | Technology                                 |
| -------------- | ------------------------------------------ |
| Runtime        | Node.js v25                                |
| CLI Framework  | Commander.js                               |
| HTTP Client    | Axios                                      |
| Output Styling | Chalk                                      |
| External API   | GitHub Search API (`/search/repositories`) |

---

## 🧠 How “Trending” Works (in this project)

This CLI builds a GitHub Search query using the `created:>{startDate}` qualifier and then sorts by `stars` descending.

- `startDate` is computed from the selected duration

---

## 📡 CLI Commands

### `trending-repos`

Fetch and display trending repositories.

**Options**

| Option                      | Default | Description                                          |
| --------------------------- | ------- | ---------------------------------------------------- |
| `-d, --duration <duration>` | `week`  | Time window: `day`, `week`, `month`, `year`          |
| `-l, --limit <limit>`       | `10`    | Number of repositories to display (positive integer) |

---

## 🧪 Example Usage

```bash
node index.js trending-repos
```

```bash
node index.js trending-repos --duration month --limit 5
```

---

## 🚀 Getting Started

### 1) Clone the repository

```bash
git clone <repository-url>
cd github-trending-cli
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the CLI

```bash
node index.js trending-repos --help
```

---

## 🔌 GitHub Service

The `src/services/githubService.js` module is responsible for:

- Validating `duration` and `limit`
- Calculating `startDate` in `YYYY-MM-DD` format
- Calling GitHub Search API

---

## 📄 License

This project is licensed under the ISC License.
