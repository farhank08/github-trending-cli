import axios from 'axios';

// Get start date based on duration
export const getStartDate = (duration) => {
	// Get current date
	const now = new Date();

	// Adjust date based on duration
	switch (duration) {
		case 'day':
			now.setDate(now.getDate() - 1);
			break;
		case 'week':
			now.setDate(now.getDate() - 7);
			break;
		case 'month':
			now.setMonth(now.getMonth() - 1);
			break;
		case 'year':
			now.setFullYear(now.getFullYear() - 1);
			break;
		default:
			now.setDate(now.getDate() - 7);
			break;
	}

	// Return date in YYYY-MM-DD format
	return now.toISOString().split('T')[0];
};

export const getTrendingRepos = async (duration, limit) => {
	// Validate duration
	const validDurations = ['day', 'week', 'month', 'year'];
	if (!validDurations.includes(duration)) {
		throw new Error(`Invalid duration. Please choose from: ${validDurations.join(', ')}`);
	}

	// Validate limit
	const limitNum = Number(limit);
	if (!Number.isInteger(limitNum) || limitNum <= 0) {
		throw new Error('Limit must be a positive integer.');
	}

	// Get start date
	const startDate = getStartDate(duration);

	// Fetch trending repositories from GitHub API
	const response = await axios.get(`https://api.github.com/search/repositories`, {
		params: {
			q: ` created:>${startDate}`,
			sort: 'stars',
			order: 'desc',
			per_page: limitNum,
		},
	});

	// Get repository data
	const data = response.data;
	if (!data || !data.items) {
		throw new Error('Invalid response from GitHub API');
	}

	// Return filtered repositories
	return data.items;
};
