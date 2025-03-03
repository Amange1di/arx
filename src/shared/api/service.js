import axios from "./axios";

class StoreService {
  getPageData(page) {
    return axios.get(`/${page}`);
  }

  getActivityBanner() {
    return axios.get(`/banner`);
  }
  getActivity() {
    return axios.get(`/activity`);
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
}

export default new StoreService();