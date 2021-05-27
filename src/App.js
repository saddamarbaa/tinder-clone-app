/** @format */

import Header from "./components/Header";
import classes from "./App.module.css";
import TinderCardCop from "./components/TinderCardCop";

function App() {
	return (
		<div className={classes.app}>
			<Header />

			<TinderCardCop />

			{/* SwipeButtons */}
		</div>
	);
}

export default App;
