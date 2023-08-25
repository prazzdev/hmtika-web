import Link from "next/link";

export default function NavLink({ location, text }) {
    return (
        <>
        <Link
            href={location} 
            className="text-xs uppercase mb-2">{text}</Link>
        </>
    )
}