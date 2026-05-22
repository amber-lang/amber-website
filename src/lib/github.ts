export interface GitHubRelease {
    tag: string;
    url: string;
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
    try {
        const res = await fetch('https://api.github.com/repos/amber-lang/Amber/releases', {
            next: { revalidate: 3600 },
            headers: { 'Accept': 'application/vnd.github.v3+json' },
        });
        if (!res.ok) return null;
        const releases: { tag_name: string; prerelease: boolean; html_url: string }[] = await res.json();
        const latest = releases.find(r => !r.prerelease);
        if (!latest) return null;
        return { tag: latest.tag_name, url: latest.html_url };
    } catch {
        return null;
    }
}

export async function getGitHubStars(): Promise<number> {
    try {
        const res = await fetch('https://api.github.com/repos/amber-lang/Amber', {
            next: { revalidate: 3600 },
            headers: { 'Accept': 'application/vnd.github.v3+json' },
        });
        if (!res.ok) return 2300;
        const data = await res.json();
        return typeof data.stargazers_count === 'number' ? data.stargazers_count : 2300;
    } catch {
        return 2300;
    }
}
