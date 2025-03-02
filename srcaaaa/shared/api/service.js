import axios from "./axios";

class StoreService {
  getPageData(page) {
    return axios.get(`/${page}`);
  }

  getActivityBanner() {
    return axios.get(`/banner`);
  }

  getActivityCard() {
    return axios.get(`/cards`); // Изменено с /card на /cards
  }
}

export default new StoreService();
