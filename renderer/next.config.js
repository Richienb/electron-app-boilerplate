module.exports = {
	reactStrictMode: true,
	poweredByHeader: false,
	experimental: {
		esmExternals: "loose",
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.target = "electron-renderer"
		}

		return config
	},
}
