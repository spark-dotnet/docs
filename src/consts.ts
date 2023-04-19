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
        { text: 'Database', link: 'database' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Events', link: 'events' },
        { text: 'Tasks', link: 'tasks' },
        { text: 'Scheduling', link: 'scheduling' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ],
    'Tutorials': [
        { text: 'Blog Tutorial', link: 'blog-tutorial' },
    ]
};