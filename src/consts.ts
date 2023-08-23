export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Getting Started': [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'Frontend Assets', link: 'frontend-assets' },
        { text: 'Directory Structure', link: 'directory-structure' },
        { text: 'Spark CLI', link: 'spark-cli' },
        { text: 'Upgrade Guide', link: 'upgrade-guide' },
    ],
    // 'Core Concepts': [
    //     { text: 'Dependency Injection', link: 'dependency-injection' },
    //     { text: 'Services', link: 'services' },
    // ],
    'Project Types': [
        { text: 'Overview', link: 'project-types-overview' },
        { text: 'Blazor', link: 'blazor' },
        { text: 'Api', link: 'api' },
    ],
    'Essentials': [
        { text: 'Configuration', link: 'configuration' },
        { text: 'Database', link: 'database' },
        { text: 'Models & Migrations', link: 'models-and-migrations' },
        { text: 'Services', link: 'services' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Logging', link: 'logging' },
        { text: 'Mail', link: 'mail' },
        { text: 'Events', link: 'events' },
        { text: 'Jobs', link: 'jobs' },
        { text: 'Queues', link: 'job-queues' },
        { text: 'Scheduling Jobs', link: 'job-scheduling' },
        { text: 'Extension Methods', link: 'extension-methods' },
    ],
    // 'Entity Framework': [
    //     { text: 'Getting Started', link: 'entity-framework' },
    //     { text: 'Models', link: 'models' },
    //     { text: 'Migrations', link: 'migrations' },
    //     { text: 'Relationships', link: 'relationships' },
    //     { text: 'Data Access', link: 'data-access' },
    // ],
    'Tutorials': [
        { text: 'Spark.NET for beginners', link: 'beginner-tutorial' },
        { text: 'Build a Twitter Clone', link: 'spark-tutorial' },
        { text: 'Build a Blog in 25 min', link: 'blog-tutorial' },
    ],
};