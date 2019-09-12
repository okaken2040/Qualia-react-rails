import axios from "axios"
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

export const CHANGE_SERIF = 'CHANGE_SERIF'
export const CHANGE_TOP = 'CHANGE_TOP'
export const CHANGE_LEFT = 'CHANGE_LEFT'

const ROOT_URL = "http://localhost:3000"

export const updateScene = async scene => {
	console.log("updateSceneまで来てる")
	const response =	await axios.patch('http://localhost:3000/scenes/1', {params:scene})
	// dispatch({
	// 	type: CHANGE_SERIF,
	// 	serif:response.data[0].serif,
	// 	index:0
	// })
	console.log(response.data[0].serif)
	return response.data[0].serif
}