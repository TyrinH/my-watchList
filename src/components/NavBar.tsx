import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function NavBar() {
    const { isSignedIn } = useUser();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">
          <Link href="/">Home</Link>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li>
                {isSignedIn && (
                    <UserButton />)}
              </li>
        </ul>
      </div>
    </div>
  );
}