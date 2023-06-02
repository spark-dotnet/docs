export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Getting Started': [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'Directory Structure', link: 'directory-structure' },
    ],
    'The Basics': [
        { text: 'Configuration', link: 'configuration' },
        { text: 'Frontend', link: 'frontend' },
        { text: 'Database', link: 'database' },
        { text: 'Models & Migrations', link: 'models-and-migrations' },
        { text: 'Services & Data Access', link: 'services-and-data-access' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Mail', link: 'mail' },
        { text: 'Events', link: 'events' },
        { text: 'Queues', link: 'queues' },
        { text: 'Task Scheduling', link: 'task-scheduling' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ],
    'Tutorials': [
        { text: 'Blog Tutorial', link: 'blog-tutorial' },
    ]
};