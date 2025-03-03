import axios from "./axios";

class StoreService {
  getPageData(page) {
    return axios.get(`/${page}`);
  }
  async getActivityData() {
    const response = await axios.get('/activity');
    return response.data;
  }
  async getApplicantsData() {
    const response = await axios.get('/applicants');
    return response.data;
  }


  async getGuideData() {
    const response = await axios.get('/guide');
    return response.data;
  }

  async getStudentsData() {
    const response = await axios.get('/students');
    return response.data;
  }
  async getScienceData() {
    const response = await axios.get('/science');
    return response.data;
  }

  async getEducationData() {
    const response = await axios.get('/education');
    return response.data;
  }
}

export default new StoreService();