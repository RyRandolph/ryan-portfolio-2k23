import Link from 'next/link';
import DefaultPage from "../pages/defaultPage";
import ParallaxPage from "../pages/parallaxPage";

export default function Home() {
  //const gradientClass = "relative before:absolute before:inset-0 before:h-[300px] before:w-[480px] before:bg-gradient-to-r before:from-pink-900 before:via-yellow-800 before:to-blue-700 before:opacity-20";
  //const gradientClass = "relative before:absolute before:h-[450px] before:w-[450px] before:bg-gradient-to-r before:from-blue-900 before:via-blue-800 before:to-blue-700 before:opacity-20 before:backdrop-filter before:backdrop-blur-lg before:rounded-full before:content-[''] before:opacity-0";
  //const gradientClass = "relative flex place-items-center before:absolute before:h-[450px] before:w-[450px] before:rounded-full before:bg-gradient-radial before:from-blue-500 before:via-black before:to-transparent before:opacity-20 before:content-[''] before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:transform before:backdrop-filter before:backdrop-blur-lg";
  const gradientClass = "relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/parallaxPage'>Parallax Page 1</Link>
      <Link href='/defaultPage'>Default Page</Link>
      <div className={gradientClass}>
        Hello World
      </div>
    </main>
  );
}
