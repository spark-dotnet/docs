export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Getting Started': [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'Project Templates', link: 'project-templates' },
        { text: 'Frontend Assets', link: 'frontend-assets' },
        { text: 'Directory Structure', link: 'directory-structure' },
        { text: 'Upgrade Guide', link: 'upgrade-guide' },
    ],
    'Project Types': [
        { text: 'Blazor', link: 'blazor' },
        { text: 'MVC', link: 'mvc' },
        { text: 'Razor Pages', link: 'razor-pages' },
    ],
    'Essentials': [
        { text: 'Configuration', link: 'configuration' },
        { text: 'Database', link: 'database' },
        { text: 'Services', link: 'services' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Mail', link: 'mail' },
        { text: 'Events', link: 'events' },
        { text: 'Queues', link: 'queues' },
        { text: 'Task Scheduling', link: 'task-scheduling' },
        { text: 'Extension Methods', link: 'extension-methods' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ],
    'Tutorials': [
        { text: 'Spark.NET for beginners', link: 'beginner-tutorial' },
        { text: 'Build a Twitter Clone', link: 'spark-tutorial' },
        { text: 'Build a Blog in 25 min', link: 'blog-tutorial' },
    ],
};