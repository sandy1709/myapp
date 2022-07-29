import Link from "next/link";

export default function Home() {
    return (
        <div className="center">
            <ul>
                <li>
                    <h2>My projects</h2>
                </li>
                <li>
                    <Link href="/projects/project-1"><a>Project 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/project-2"><a>Project 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/project-3"><a>Project 3</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
