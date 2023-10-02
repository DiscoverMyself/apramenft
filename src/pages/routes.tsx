export interface Route {
	name: string,
	path: string,
	basePath?: string,
}

export const HomeRoute: Route = {
	name: 'Home',
	path: '/',
}

export const MintRoute: Route = {
	name: 'Mint',
	path: '/mint'
}

export const TermsRoute: Route = {
	name: 'Terms and Conditions',
	path: '/terms'
}
