import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 grid gap-10 md:grid-cols-[auto_1fr] mb-5">
      <div>
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Boldo" width={156} height={41} />
        </div>
        <p className="mt-6 max-w-[300px]   text-muted-foreground">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="mt-10  text-muted-foreground">All rights reserved.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10  md:justify-items-end w-full">
        <div className="grid gap-3">
          <h3 className="text-xl  font-bold">Landings</h3>
          <ul className="grid gap-3   text-muted-foreground">
            <li>
              <Link href="#" className="hover:opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-3">
          <h3 className="text-xl  font-bold">Company</h3>
          <ul className="grid gap-3   text-muted-foreground">
            <li>
              <Link href="#" className="hover:opacity-80">
                Home
              </Link>
            </li>
            <li className="space-x-3">
              <Link href="#" className="hover:opacity-80">
                Careers
              </Link>
              <span className="bg-boldo-green text-boldo-blue-dark rounded-full px-2 py-1 text-xs leading-none font-bold">
                Hiring!
              </span>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-3">
          <h3 className="text-xl  font-bold">Resources</h3>
          <ul className="grid gap-3   text-muted-foreground">
            <li>
              <Link href="#" className="hover:opacity-80">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-80">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
