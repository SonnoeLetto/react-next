import Link from "next/link";

export function MainLayout({children}) {
    return(
        <>
            <nav>
                <Link href={'/'}>Main</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/posts'}>Posts</Link>
                <h1>Navigation</h1>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
