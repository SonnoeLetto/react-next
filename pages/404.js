import Link from "next/link";



export default function Error() {
    return (
        <>
        <h1>Error</h1>
            <p>Please <Link href={'/'}><a>go back</a></Link>  to main page</p>
        </>
    )
}