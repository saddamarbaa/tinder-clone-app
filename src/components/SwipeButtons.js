/** @format */

import React from "react";
import classes from "./SwipeButtons.module.css";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";

const SwipeButtons = () => {
	return (
		<div className={classes.swipeButtons}>
			<IconButton
				className={`${classes.swipeButtons__repeat} ${classes.MuiIconButton__root}`}>
				<ReplayIcon fontSize='large' />
			</IconButton>

			<IconButton
				className={`${classes.swipeButtons__left} ${classes.MuiIconButton__root}`}>
				<CloseIcon fontSize='large' />
			</IconButton>

			<IconButton
				className={`${classes.swipeButtons__star} ${classes.MuiIconButton__root}`}>
				<StarRateIcon fontSize='large' />
			</IconButton>

			<IconButton
				className={`${classes.swipeButtons__lightning} ${classes.MuiIconButton__root}`}>
				<FavoriteIcon fontSize='large' />
			</IconButton>

			<IconButton
				className={`${classes.swipeButtons__right} ${classes.MuiIconButton__root}`}>
				<FlashOnIcon fontSize='large' />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
