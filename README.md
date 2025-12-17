# GitHub Trending CLI

A Node.js **command-line interface (CLI)** tool that fetches and displays **trending GitHub repositories** using the **GitHub Search API**. It uses **Commander.js** for commands/options and prints results with readable, colorized output.

Project from https://roadmap.sh/projects/github-trending-cli

## Prerequisites

- Node.js runtime

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd github-trending-cli
```

2. **Install dependencies**

```bash
npm install
```

## Configuration

This project does not require environment variables for basic usage.

## Running the Application

### Fetch trending repositories

```bash
node index.js trending-repos [options]
```

#### Options

- `-d, --duration <duration>`: Time window to search within (`day`, `week`, `month`, `year`). Default: `week`
- `-l, --limit <limit>`: Number of repositories to display. Default: `10`

## Example Usage

```bash
node index.js trending-repos
```

```bash
node index.js trending-repos --duration month --limit 5
```

## How “Trending” Works (in this project)

This CLI approximates “trending” by querying GitHub repositories created after a computed start date (based on `--duration`) and sorting by **stars** in descending order. Results are limited using GitHub’s `per_page` parameter.

## Output

For each repository, the CLI prints:

- `full_name` and star count
- Repository URL
- Created date
- Description (if available)
- Language (if available)

## Notes

- No authentication is required for basic GitHub Search API usage.
- Results are subject to GitHub API rate limits.

## License

This project is licensed under the ISC License.
