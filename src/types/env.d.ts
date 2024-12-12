interface ImportMetaEnv {
	readonly VITE_DISCOVERY_URL: string;
	readonly VITE_DISCOVERY_API: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
