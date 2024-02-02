import Link from "next/link";

function Information({}) {
  return (
    <div className="bg-neutral-900 w-full p-4 flex flex-col gap-4 rounded-md text-neutral-400 font-light">
      <h1 className="text-3xl sm:text-4xl font-medium text-neutral-100">
        Polyrhythmic Rings
      </h1>
      <p>
        Built by{" "}
        <Link
          href={"https://www.abjt.dev/"}
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
        >
          ABJT
        </Link>
        , this application is made using Next.js, SVG Filters, SVG Animations,
        Framer Motion, and Radix UI. Project inspired by{" "}
        <Link
          href={"https://www.youtube.com/watch?v=Kt3DavtVGVE"}
          target="_blank"
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
        >
          Hyperplexed&apos;s video
        </Link>{" "}
        on their YouTube channel.
      </p>
      <Link
        href={"https://github.com/abjt14/polyrhythmic-rings"}
        target="_blank"
        className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
      >
        Code on GitHub
      </Link>
    </div>
  );
}

export default Information;
