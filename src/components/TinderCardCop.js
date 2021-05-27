/** @format */

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import classes from "./TinderCard.module.css";

const db = [
	{
		name: "Richard Hendricks",
		url: "https://statik.tempo.co/data/2020/12/23/id_989553/989553_720.jpg",
	},
	{
		name: "Erlich Bachman",
		url: "https://statik.tempo.co/data/2020/12/23/id_989553/989553_720.jpg",
	},
	{
		name: "Monica Hall",
		url: "https://statik.tempo.co/data/2020/12/23/id_989553/989553_720.jpg",
	},
	{
		name: "Jared Dunn",
		url: "https://statik.tempo.co/data/2020/12/23/id_989553/989553_720.jpg",
	},
];

const TinderCardCop = () => {
	const [people, setPeople] = useState(db);

	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className={classes.cardContainer}>
			{people.map((person) => (
				<TinderCard
					className={classes.swipe}
					key={person.name}
					preventSwipe={["up", "down"]}
					onSwipe={(dir) => swiped(dir, person.name)}
					onCardLeftScreen={() => outOfFrame(person.name)}>
					<div
						style={{ backgroundImage: "url(" + person.url + ")" }}
						className={classes.card}>
						<h3>{person.name}</h3>
					</div>
				</TinderCard>
			))}
		</div>
	);
};

export default TinderCardCop;
