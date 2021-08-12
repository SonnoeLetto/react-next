import Link from "next/link";

export function MainLayout({children}) {
    return(
        <>
            <nav>
                <Link href={'/'}>Main</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/posts'}>Posts</Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
              position: fixed;
              height: 60px;
              left: 0;
              top: 0;
              right: 0;
              background: purple;
              color: #eaeaea;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
            main {
            margin-top: 60px;
            padding: 1rem;
            }
            `}

            </style>
        </>
    )
}
