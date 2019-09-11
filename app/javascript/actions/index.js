import axios from "axios"

export const CHANGE_SERIF = 'CHANGE_SERIF'
export const CHANGE_TOP = 'CHANGE_TOP'
export const CHANGE_LEFT = 'CHANGE_LEFT'

const ROOT_URL = "http://localhost:3000"

export const updateScene = async() => {
	console.log('updateSceneは有効')
	const response =	await axios.get(`${ROOT_URL}/scenes`)
	console.log(response)
}