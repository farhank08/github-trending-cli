import { Command } from 'commander';
import { getTrendingRepos } from './src/services/githubService.js';

// Initialize CLI program
const program = new Command();

// Define CLI program
program
	.name('github-trending-cli')
	.description('A CLI tool to fetch and display GitHub trending repositories')
	.version('1.0.0');

program
	.command('trending-repos')
	.description('Fetch and display trending GitHub repositories')
	.option(
		'-d, --duration <duration>',
		'Duration to fetch trending repositories for (day, week, month, year)',
		'week'
	)
	.option('-l, --limit <limit>', 'Number of repositories to display', '10')
	.action(async (options) => {
		// Destructure options
		const { duration, limit } = options;

		try {
			// Fetch trending repositories
			const repos = await getTrendingRepos(duration, limit);

			// Display repositories
			repos.forEach((repo, index) => {
				console.log(`${index + 1}. ${repo.full_name} - ⭐ ${repo.stargazers_count}`);
				console.log(`   ${repo.html_url}`);
				console.log(`   Created at ${repo.created_at.split('T')[0]}`);
				repo.description ? console.log(`   Description: ${repo.description}`) : null;
				repo.language ? console.log(`   Language: ${repo.language}`) : null;
				console.log(''); // Empty line for better readability
			});

			// Exit with success
			process.exit(0);
		} catch (error) {
			// Handle github API  errors
			console.error('Error fetching trending repositories:', error.message);
			process.exit(1);
		}
	});

// Parse CLI arguments
program.parse(process.argv);
