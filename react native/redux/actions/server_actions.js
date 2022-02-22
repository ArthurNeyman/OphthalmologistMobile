import {
    GET_NEWS_LIST,
    GET_NEWS,
    GET_SERVICE_LIST,
    GET_SERVICE,
    GET_STAFF_LIST,
    GET_STAFF,
    GET_CLINIC_INFO
} from "./types";

import { setLoadStatus, setActiveScreen } from "./application_actions";

const URL = "http://82.179.9.51:8080/api"

const getUrlParamsRow = (params) => {
    let urlParams = ""
    if (params != null) {
        urlParams += "?"
        for (let i = 0; i < params.length; i++)
            Object.keys(params[i]).forEach(el =>
                urlParams += (el + "=" + params[i][el]) + (i != params.length - 1 ? "&" : "")
            )
    }
    return urlParams
}

const get = (urlEnd, inType, params) => {
    return async dispatch => {
        dispatch(setLoadStatus(true))
        fetch(URL + urlEnd + getUrlParamsRow(params), {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: inType,
                    payload: json
                })
                dispatch(setLoadStatus(false))
            })
            .catch(error => {
                console.log("GET_ERROR", error)
            })
    }
}

const post = (urlEnd, inType, body) => {
    return async dispatch => {
        fetch(URL + urlEnd, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: inType,
                    payload: json
                })
            })
            .catch(error => {
                console.log("POST_ERROR", error)
            })
    }

}

export const getNewsList = () => {
    return get("/user/news", GET_NEWS_LIST)
}

export const getNews = (newsId) => {
    return get("/user/news", GET_NEWS, [{ "newsId": newsId }])
}

export const getServiceById = (serviceId) => {
    return async dispatch => {
        dispatch({
            type: GET_SERVICE,
            action: services.filter(el => el.id == serviceId)[0]
        })
    }
}

export const getClinicInfo = () => {
    return async dispatch => {
        dispatch({
            type: GET_CLINIC_INFO,
            payload: {
                name: "Кузбасская областная клиническая больница им. С.В. Беляева, хирургическое отделение № 7",
                shortDescription: "Хирургия катаракты и не только",
                contacts:
                {
                    mainContact: {
                        name: "Заведующий отделением № 7, Хатминский Николай Юрьевич",
                        contact: "+79131238881"
                    },
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
                    ]
                },
                address: {
                    postIndex: "650066",
                    address: "г. Кемерово, пр-т Октябрьский, 22",
                    comments: ["Отделение располагается на втором этаже офтальмологического корпуса ГАУЗ КОКБ им. С.В. Беляева"]
                }
            }
        })
    }
}

export const getStaffList = () => {
    return dispatch => {
        dispatch({
            type: GET_STAFF_LIST,
            payload: staffs
        })
    }
}

export const getServiceList = () => {
    return dispatch => {
        dispatch({
            type: GET_SERVICE_LIST,
            payload: services
        })
    }
}

export const getStaff = (staffId) => {
    return async dispatch => {
        dispatch({
            type: GET_STAFF,
            payload: staffs.filter(el => el.id == staffId)[0]
        })
    }
}

const staffs = [
    {
        id: 1,
        firstName: "Николай",
        lastName: "Хатминский",
        surname: "Юрьевич",
        position: "Заведующий отделением",
        category: "к.м.н., Врач высшей категории",
        info: "Автор ряда патентов и рацпредложений.Имеет награды областного и федерального значения",
        whatsAppContact:"+79131238881"
    },
    {
        id: 2,
        firstName: "Татьяна",
        lastName: "Янченко ",
        surname: "Валентиновна ",
        position: "Заведующая отделением",
        category: "к.м.н.",
        info: "",
        whatsAppContact:""
    },
    {
        id: 3,
        firstName: "Марина",
        lastName: "Никитина ",
        surname: "Юрьевна ",
        position: "Старшая медицинская сестра",
        category: "Высшая категория",
        info: "",
        whatsAppContact:""
    },
    {
        id: 4,
        firstName: "Татьяна ",
        lastName: "Баева ",
        surname: "Витальевна ",
        position: "Врач-офтальмолог",
        category: "Врач высшей категории",
        info: "Специализируется на амбулаторной хирургии при заболеваниях век, конъюнктивы."
            + "Так же занимается консервативным лечением при воспалительных заболеваниях глаза (кератит, склерит, иридоциклит, хориоретинит), глаукоме, заболеваниях сетчатки." ,
            whatsAppContact:"" },
    {
        id: 5,
        firstName: "Нина",
        lastName: "Федорова",
        surname: "Федоровна",
        position: "Врач-офтальмолог",
        category: "Врач высшей категории",
        info: "Специализация - пластическая хирургия век.Выполняет операции по коррекции блефарохолязиса, грыж орбитальной клетчатки."
        ,
        whatsAppContact:"" },
    {
        id: 6,
        firstName: "Дарья ",
        lastName: "Пушкарева ",
        surname: "Андреевна",
        position: "Врач-офтальмолог",
        category: "Врач высшей категории",
        info: "Специализируется на курации пациентов с различной патологией,выполняет операции экстренные и плановые на веках, конъюнктиве"
        ,
        whatsAppContact:""},
    {
        id: 7,
        firstName: "Дарья ",
        lastName: "Белозерова ",
        surname: "Юрьевна",
        position: "-",
        category: "-",
        info: "-"
        ,
        whatsAppContact:""}
    ,
    {
        id: 8,
        firstName: "Наталья ",
        lastName: "Баркова ",
        surname: "Юрьевна",
        position: "-",
        category: "-",
        info: "-"
        ,
        whatsAppContact:""}
];

const services = [
    {
        id: 1,
        name: "Факоэмульсификация катаракты",
        description: `    Факоэмульсификация катаракты с имплантацией гибкой интраокулярной линзы (ИОЛ)\n    ИОЛ – интраокулярная линза или искусственный хрусталик.\n    Операция: Факоэмульсификация катаракты – современный метод хирургического лечения.\n    Операция проводится при помощи аппарата под контролем компьютера.\n    Операция Факоэмульсификация катаракты проводится через микропрокол. Эта операция является легкой и малоболезненной. В этот же день после операции пациенты отдыхают и идут домой.\n    ИОЛ интраокулярные линзы.ИОЛ подбираются индивидуально  и для каждого глаза отдельно.\n\n    Существует много новых ИОЛ с новыми свойствами:`,
        options: [
            {
                imageLink: "",
                message: "ИОЛ со светофильтром для защиты от вредного воздействия света"
            },
            {
                imageLink: "",
                message: " ИОЛ с асферической оптикой"
            },
            {
                imageLink: "",
                message: "Монофокальная ИОЛ коррекцией астигматизма – линза для дали, очки для близи"
            },
            {
                imageLink: "",
                message: " Мультифокальная торическая - линза для дали и близис коррекцией астигматизма на всех расстояниях"
            },
            {
                imageLink: "",
                message: "Мультифокальная ИОЛ линза для дали и близи"
            },
            {
                imageLink: "",
                message: "Монофокальная линза. Обеспечивает зрение для дали.Для чтения и работы  близи понадобятся очки"
            }

        ],
        doctors: [{
            id: 1,
            name: "Хатминский Н.Ю.",
            position: "Хирург"
        },
        {
            id: 4,
            name: "Баева Т.В.",
            position: "Врач-офтальмолог"
        },
        {
            id: 6,
            name: "Пушкарева Д.А.",
            position: "Врач-офтальмолог"
        }]
    },
    {
        id: 2,
        name: "Операции по коррекции блефарохолязиса, грыж орбитальной клетчатки",
        description: "",
        options: [],
        doctors: [{
            id: 5,
            name: "Федорова Н.Ф.",
            position: "Хирург"
        }]
    },
    {
        id: 3,
        name: "Операции на мышцах глаза при косоглазии и птозе",
        description: "птозе – опущении верхнего века у пациентов старше 18 лет",
        options: [],
        doctors: [{
            id: 2,
            name: "Янченко Т.В.",
            position: "Хирург"
        }]
    },
    {
        id: 4,
        name: "Операции при патологии век и конъюнктивы глаза",
        description: "(вывороте и завороте век, новообразованиях век и конъюнктивы и др.)",
        options: [],
        doctors: [{
            id: 4,
            name: "Баева Т.В.",
            position: "Хирург"
        }]
    },
    {
        id: 5,
        name: "Медикаментозное  лечение при воспалительных заболеваниях глаза ",
        description: "(кератит, склерит, иридоциклит, хориоретинит), глаукоме, заболеваниях сетчатки",
        options: [],
        doctors: [{
            id: 4,
            name: "Баева Т.В.",
            position: "---"
        }]
    },
    {
        id: 6,
        name: "ЭФИ.Исследования глаз на современном оборудовании.",
        description: "ЭФИ- кабинет электрофизиологических исследований глаза",
        options: [],
        doctors: [{
            id: 7,
            name: "Белозерова Д.Ю.",
            position: "---"
        }]
    },
    {
        id: 7,
        name: "ОКТ",
        description: "ОКТ - оптическая когерентная томография сетчатки и  диска зрительного нерва",
        options: [],
        doctors: [{
            id: 8,
            name: "Баркова Н.Ю.",
            position: "---"
        }]
    }
];