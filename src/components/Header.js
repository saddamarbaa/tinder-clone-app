/** @format */

import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<IconButton>
				<PersonIcon />
			</IconButton>

			<img
				className={classes.image}
				src='https://www.techadvisor.com/cmsdata/features/3515013/tinder_logo_thumb1200_16-9.png'
				alt='tinder logo'
			/>

			<IconButton>
				<ForumIcon fontSize='large' />
			</IconButton>
		</div>
	);
};

export default Header;
