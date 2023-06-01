export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Tutorial': [
        { text: 'Build a Blog in 15min', link: 'tutorial/introduction' },
        { text: 'Installation', link: 'tutorial/installation' },
        { text: 'Creating Posts', link: 'tutorial/creating-posts' },
        { text: 'Showing Posts', link: 'tutorial/showing-posts' },
        { text: 'Editing Posts', link: 'tutorial/edit-posts' },
        { text: 'Deleting Posts', link: 'tutorial/delete-posts' },
        { text: 'Notifications & Events', link: '' },
    ],
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
        { text: 'Data Access', link: 'data-access' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Mail', link: 'mail' },
        { text: 'Events', link: 'events' },
        { text: 'Queues', link: 'queues' },
        { text: 'Task Scheduling', link: 'task-scheduling' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ]
};