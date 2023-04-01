export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
} as const;

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
    'Getting Started': [
        { text: 'Installation', link: 'installation' },
        { text: 'Directory Structure', link: 'directory-structure' },
        { text: 'Configuration', link: 'configuration' },
        { text: 'Database', link: 'database' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Authorization', link: 'authorization' },
        { text: 'Spark CLI', link: 'spark-cli' },
    ],
    'Tutorials': [
        { text: 'Blog Tutorial', link: 'blog-tutorial' },
    ]
};