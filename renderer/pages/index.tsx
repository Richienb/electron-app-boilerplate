import styles from "../styles/Home.module.sass"

export default function Home() {
	return (
		<>
			<h1 className={styles.center}>Hello World</h1>
			<p suppressHydrationWarning className={styles.center}>You are using Node.js {process.versions.node}, Chromium {process.versions.chrome} and Electron {process.versions.electron}.</p>
		</>
	)
}
