/** @format */

import axios from "axios";

// Initializing axios with default tinder api URL
const instance = axios.create({
	baseURL: "http://localhost:5000",
});

export default instance;
