/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const baseurl = "http://localhost:3001/api/journal"

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const create = async (newObject) => {
    const response = await axios.post(baseurl, newObject)
    return response.data
}

const update = async (id, updatedObject) => {
    const request = await axios.put(`${baseurl}/${id}`, updatedObject)
    return request.data
}

const deleteOne = async (id) => {
    const request = await axios.delete(`${baseurl}/${id}`)
    return request.data
}

export default {
    getAll,
    create,
    update,
    deleteOne
}