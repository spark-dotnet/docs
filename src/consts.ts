export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Tutorials': [
        { text: 'Build a Twitter Clone', link: 'spark-tutorial' },
    ],
    'Getting Started': [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'Directory Structure', link: 'directory-structure' },
        { text: 'Upgrade Guide', link: 'upgrade-guide' },
        { text: 'Contribution Guide', link: 'contribution-guide' },
    ],
    'The Basics': [
        { text: 'Configuration', link: 'configuration' },
        { text: 'Frontend', link: 'frontend' },
        { text: 'Database', link: 'database' },
        { text: 'Models & Migrations', link: 'models-and-migrations' },
        { text: 'Data Access', link: 'data-access' },
        { text: 'Services', link: 'services' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Mail', link: 'mail' },
        { text: 'Events', link: 'events' },
        { text: 'Queues', link: 'queues' },
        { text: 'Task Scheduling', link: 'task-scheduling' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ],
};