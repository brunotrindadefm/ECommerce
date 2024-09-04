import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-12 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase  font-bold text-xl h-12 flex items-center"
      >
        BT<span className="text-cyan-500">Loja</span>
      </Link>
      <div className="flex items-center gap-8">
        {/* Usuário não está logado */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-xl border-gray-400 bg-cyan-600 px-5 py-2 transition duration-300  hover:bg-cyan-700" aria-label="Fazer Login">
                Login
            </button>
          </SignInButton>
        </SignedOut>

        {/* Usuário logado */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
