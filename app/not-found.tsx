'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Error404() {
	const router = useRouter();

	return (
		<>
			<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-green">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">
						Sorry, we could not find the page you are looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							onClick={() => {
								router.back();
							}}
							href="/dev"
							className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green_variation transition-all"
						>
							Go to Back Page
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
