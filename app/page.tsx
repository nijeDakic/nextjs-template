export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#3f3f3f] font-bold text-2xl">
			<p className="text-[#f3f3f3]">
				Next.js Template by <a href="https://github.com/nijeDakic">nijeDakic</a>
			</p>
			{process.env.TEST}
		</main>
	);
}
