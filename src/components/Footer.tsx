export const Footer = () => {
	return (
		<footer className="w-full mt-10 mb-10">
			<div className="mx-auto w-full max-w-7xl rounded-3xl border border-gray-200 bg-white p-8 md:p-12">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
					<div className="space-y-4">
						<a href="/" className="flex items-center gap-2">
							<img src="/logo1.png" alt="scrycli logo" className="h-10 w-10 rounded" />
							<span className="text-xl font-semibold tracking-tight">scrycli</span>
						</a>
						<p className="text-sm leading-6 text-gray-600">
                        SCRYCLI is your AI-powered terminal buddy that hunts down bugs, and calls out the garbage before it hits production.
						</p>
						<div className="flex items-center gap-4 text-gray-500">
							<a href="#" aria-label="X" target="_blank" className="hover:text-gray-900">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.244 3H21l-6.55 7.48L22 21h-5.98l-4.67-5.66L5.9 21H3.14l7.01-8.02L2 3h6.08l4.22 5.11L18.244 3Zm-2.1 16.28h2.19L7.94 4.64H5.6l10.544 14.64Z"/></svg>
							</a>
							<a href="#" aria-label="Instagram" target="_blank" className="hover:text-gray-900">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>
							</a>
							<a href="https://www.linkedin.com/in/sanskar1/" target="_blank" aria-label="LinkedIn" className="hover:text-gray-900">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.983 3.5a2.5 2.5 0 1 1-.002 5.001A2.5 2.5 0 0 1 4.983 3.5ZM3.25 9h3.5v11.5h-3.5V9Zm6.25 0h3.36v1.57h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.4h-3.5v-5.67c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.77H9.5V9Z"/></svg>
							</a>
							<a href="https://github.com/sanskarmishra479" target="_blank" aria-label="GitHub" className="hover:text-gray-900">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.7 2 12.4c0 4.6 2.87 8.5 6.84 9.88.5.1.68-.23.68-.5v-1.9c-2.78.63-3.37-1.4-3.37-1.4-.45-1.2-1.12-1.52-1.12-1.52-.92-.66.07-.65.07-.65 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.14 2.94.87.09-.68.35-1.14.63-1.4-2.22-.26-4.56-1.17-4.56-5.2 0-1.15.39-2.08 1.03-2.82-.1-.26-.45-1.32.1-2.75 0 0 .85-.28 2.8 1.08.81-.23 1.68-.35 2.54-.35s1.73.12 2.54.35c1.95-1.36 2.8-1.08 2.8-1.08.55 1.43.2 2.49.1 2.75.64.74 1.03 1.67 1.03 2.82 0 4.04-2.34 4.94-4.57 5.2.36.33.68.97.68 1.97v2.92c0 .27.18.6.69.5C19.13 20.9 22 17 22 12.4 22 6.7 17.52 2 12 2Z" clipRule="evenodd"/></svg>
							</a>
						</div>
					</div>
					<div className="w-160 flex items-center justify-center">
                        <div className="flex-col items-center justify-center">
                            <h1 className="text-center text-4xl font-medium font-[Poppins]">"Don’t take yourself so seriously. You’re just a monkey with a plan."</h1>
                            <p className="text-center text-sm font-light font-[Poppins] mt-2">~ Naval Ravikant</p> 
                        </div>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-8 w-full max-w-7xl border-t border-gray-200 pt-6">
				<div className="flex flex-col items-start justify-between gap-4 text-sm text-gray-600 md:flex-row md:items-center">
					<p>© {new Date().getFullYear()} scrycli. All rights reserved.</p>
					<nav className="flex items-center gap-6">
						<a href="#" className="hover:text-gray-900">Privacy Policy</a>
						<a href="#" className="hover:text-gray-900">Terms of Service</a>
						<a href="#" className="hover:text-gray-900">Cookies Settings</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}