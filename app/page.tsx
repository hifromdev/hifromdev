import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    	<h1>Dev Patel</h1>
	<ul>
	  <li><a href="https://x.com/hifromdev/">https://x.com/hifromdev/</a></li>
	  <li><a href="https://github.com/hifromdev/">https://github.com/hifromdev/</a></li>
	</ul>
    </div>
  );
}
