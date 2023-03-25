import Link from "next/link";
import { useRouter } from "next/router";

export type NavLinkProps = {
  href: string;
  active?: boolean;
  children?: React.ReactElement | string;
};

function NavLink({ href, active, children }: NavLinkProps) {
  let router = useRouter();
  active ||= router.asPath === href;

  return (
    <Link href={href}>
      <a className="group relative block">
        <div className="absolute -left-3 flex h-full items-center">
          <div
            className={`${
              active ? "h-10" : "h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
            } w-1 origin-left rounded-r bg-white transition-all duration-200`}
          ></div>
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              active
                ? "bg-brand rounded-2xl text-white"
                : "group-hover:bg-brand rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:text-white"
            } flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default NavLink;
