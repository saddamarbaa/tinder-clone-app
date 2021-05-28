/** @format */

import axios from "axios";

// Initializing axios with default tinder api URL
const instance = axios.create({
	baseURL: " https://tinder-clone-dev.herokuapp.com",
});

export default instance;
