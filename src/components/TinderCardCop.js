/** @format */

import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import classes from "./TinderCard.module.css";
import axios from "../axios";

const TinderCardCop = () => {
	const [people, setPeople] = useState([]);

	const [lastDirection, setLastDirection] = useState();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get("/api/card");

			setPeople(request.data.tinderCard);
		}

		fetchData();
	}, []);

	console.log(people);

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
					key={person._id}
					preventSwipe={["up", "down"]}
					onSwipe={(dir) => swiped(dir, person.name)}
					onCardLeftScreen={() => outOfFrame(person.name)}>
					<div
						style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
						className={classes.card}>
						<h3>{person.name}</h3>
					</div>
				</TinderCard>
			))}
		</div>
	);
};

export default TinderCardCop;
