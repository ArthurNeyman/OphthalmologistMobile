import {
  GET_CLINIC_INFO,
  SET_SCREEN,
  SET_LOAD_STATUS,
  GET_NEWS_LIST,
  GET_NEWS,
  GET_SERVICE_LIST,
  GET_SERVICE,
  GET_SERVICE_CATEGORIES,
  GET_STAFF_LIST
} from "../actions/types";

const initialState = {
  theme : {
    defaultMainColor: "#00ADA8",
    defaultTextColor: "#243329",
    currentMainColor: "#00ADA8",
    currentTextColor: "#243329",
    setCurrentMainColor : (newColor) => {
      this.currentMainColor = newColor
    }
  },
  clinic_info: {},
  user: null,
  staffList: [],
  categoryServiceList:[],
  serviceList:[],
  activeScreen: "Home",
  newsList: [],
  news: {},
  service: {},
  loadData: false
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return {
        ...state, activeScreen: action.payload
      };
    case GET_CLINIC_INFO:
      return {
        ...state, clinic_info: action.payload
      }
    case GET_NEWS_LIST:
      return {
        ...state, newsList: action.payload
      }
    case GET_NEWS:
      return {
        ...state, news: action.payload
      }
    case SET_LOAD_STATUS:
      return {
        ...state, loadData: action.payload
      }
    case GET_SERVICE_CATEGORIES:
      return {
        ...state, categoryServiceList: action.payload
      }
      case GET_SERVICE_LIST:
        return {
          ...state, serviceList: action.payload
        }
      case GET_SERVICE:
        return {
          ...state, service: action.payload
        }
      case GET_STAFF_LIST :
        return {
          ...state,staffList:action.payload
        }
    default:
      return state;
  }
}

export default data;