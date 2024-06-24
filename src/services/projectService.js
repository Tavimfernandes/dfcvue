import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getProjects = () => axios.get(`${API_URL}/projects`);
export const getProjectById = (id) => axios.get(`${API_URL}/projects/${id}`);
export const getProjectByCode = (code) => axios.get(`${API_URL}/projects?code=${code}`);
export const createProject = (project) => axios.post(`${API_URL}/projects`, project);
