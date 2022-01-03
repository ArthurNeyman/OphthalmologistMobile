import { GET_CLINIC_INFO } from "../actions/types";

import { SET_SCREEN } from "../actions/types";

const initialState = {
  clinic_info: {
    name: "Кемеровская клиническая областная больница, хирургическое отделение № 7",
    mainContact: { name: "Заведующий отделением № 7, Хатминский Николай Юрьевич", contact: "+79131238881" },
    contacts: [
      {
        name: "Сall центр",
        contact: "39-65-33"
      },
      {
        name: "Отделение № 7",
        contact: "39-60-58"
      },
      {
        name: "Отделение № 7",
        contact: "68-10-96"
      }
    ],
    adress: "650066, г. Кемерово, пр-т Октябрьский, 22"
  },
  user: null,
  surgeonsList: [
    {
      firstName: "Сергей",
      lastName: "Ивнов",
      surname: "Сергеевич",
      position: "хирург-офтальмолог",
      info: "тестовая инофрмация"
    },
    {
      firstName: "Сергей",
      lastName: "Ивнов",
      surname: "Сергеевич",
      position: "хирург-офтальмолог",
      info: "тестовая инофрмация"
    },
        {
      firstName: "Сергей",
      lastName: "Ивнов",
      surname: "Сергеевич",
      position: "хирург-офтальмолог",
      info: "тестовая инофрмация"
    },
  ],
  serviceList: [
    {
      name: "Факоэмульсификация катаракты",
      services: [],
      num: 1
    },
    {
      name: "Амбулаторные операции",
      services: [],
      num: 2
    },
    {
      name: "Медикаментозное лечение",
      services: [],
      num: 3
    },
  ],
  activeScreen:"Home"
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLINIC_INFO:
      return {
        ...state, clinic_info: action.payload
      };
      case SET_SCREEN:
      return {
        ...state, activeScreen: action.payload
      };
    default:
      return state;
  }
}

export default data;