import {
    GET_NEWS_LIST,
    GET_NEWS,
    GET_SERVICE_LIST,
    GET_SERVICE,
    SET_LOAD_STATUS,
    GET_SERVICE_CATEGORIES,
    GET_STAFF_LIST,
    GET_CLINIC_INFO
} from "./types";

const URL = "http://82.179.9.51:8080/api"

const get = (urlEnd, inType) => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
        fetch(URL + urlEnd, {
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
                dispatch({
                    type: SET_LOAD_STATUS,
                    payload: false
                })
            })
            .catch(error => {
                console.log("GET_ERROR", error)
            })
    }
}

const post = (urlEnd, body, inType) => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
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
                dispatch({
                    type: SET_LOAD_STATUS,
                    payload: false
                })
            })
            .catch(error => {
                console.log("GET_ERROR", error)
            })
    }

}

export const getNewsList = () => {
    return get("/user/news", GET_NEWS_LIST)
}

export const getNews = (newsId) => {
    return post("/user/news", { "newsId": newsId }, GET_NEWS)
}

export const getServiceCatagories = () => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
        dispatch({
            type: GET_SERVICE_CATEGORIES,
            payload: [
                {
                    name: "Исследования",
                    id: 0
                },
                {
                    name: "Амбулаторные операции",
                    id: 1
                },
                {
                    name: "Медикаментозное лечение",
                    id: 2
                }
            ]
        })
        dispatch({
            type: SET_LOAD_STATUS,
            payload: false
        })
    }
}

const getServiceList = (categoryId) => {
    switch (categoryId) {
        case 0: return [
            {
                id: "1",
                name: "ЭФИ",
                cost: 0,
                description: " ЭФИ- электрофизиологическое исследование сетчатки глаза. ЭФИ – это четыре высокоинформативных способа определения функционирования сетчатой оболочки, зрительного нерва, а также зрительных зон коры головного мозга.",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            },
            {
                id: "2",
                name: "ОКТ",
                cost: 0,
                description: "Оптическая когерентная томография — метод неинвазивного исследования тонких слоёв кожи и слизистых оболочек, глазных и зубных тканей человека.",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            }
        ]
        case 1: return [
            {
                id: "0",
                name: "Факоэмульсификация катаракты",
                cost: 0,
                description: "Факоэмульсификация катаракты с имплантацией гибкой интраокулярной линзы (ИОЛ)",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            },
            {
                id: "1",
                name: "Операции на веках при блефарохолязисе и грыжах орбитальной клетчатки",
                cost: 0,
                description: " Операции на веках при блефарохолязисе и грыжах орбитальной клетчатки",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            },
            {
                id: "2",
                name: "Операции на мышцах глаза при косоглазии и птозе",
                cost: 0,
                description: " Операции при патологии век и конъюнктиве глаза (вывороте и завороте век, новообразованиях век и конъюнктивы и др.)",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            },
            {
                id: "3",
                name: "Операции при косоглазии и птозе",
                cost: 0,
                description: " Операции на мышцах глаза при косоглазии и птозе – опущении верхнего века у пациентов старше 18 лет с привлечение хирургов стробологов",
                images: [],
                doctor: {
                    name: "Doct1",
                    whatsAppContact: 89999999
                }
            },
        ]
        case 2: return []
        default: return [];
    }
}

export const gerServiceListByCatagory = (categoryId) => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
        dispatch({
            type: GET_SERVICE_LIST,
            payload: getServiceList(categoryId)
        })

        dispatch({
            type: SET_LOAD_STATUS,
            payload: false
        })
    }
}

export const getStaffList = () => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
        dispatch({
            type: GET_STAFF_LIST,
            payload: [
                {
                    firstName: "Николай",
                    lastName: "Хатминский",
                    surname: "Юрьевич",
                    position: "Заведующий отделением",
                    category: "к.м.н., Врач высшей категории",
                    info: "Автор ряда патентов и рацпредложений.Имеет награды областного и федерального значения"
                },
                {
                    firstName: "Марина",
                    lastName: "Никитина ",
                    surname: "Юрьевна ",
                    position: "Старшая медицинская сестра",
                    category: "высшая",
                    info: ""
                },
                {
                    firstName: "Татьяна ",
                    lastName: "Баева ",
                    surname: "Витальевна ",
                    position: "Врач-офтальмолог",
                    category: "Врач высшей категории",
                    info: "Специализируется на амбулаторной хирургии при заболеваниях век, конъюнктивы."
                        + "Так же занимается консервативным лечением при воспалительных заболеваниях глаза (кератит, склерит, иридоциклит, хориоретинит), глаукоме, заболеваниях сетчатки."
                },
                {
                    firstName: "Нина",
                    lastName: "Федорова",
                    surname: "Федоровна",
                    position: "Врач-офтальмолог",
                    category: "Врач высшей категории",
                    info: "Специализация - пластическая хирургия век.Выполняет операции по коррекции блефарохолязиса, грыж орбитальной клетчатки.Выполняет операции по коррекции блефарохолязиса, грыж орбитальной клетчатки"
                },
                {
                    firstName: "Дарья ",
                    lastName: "Пушкарева ",
                    surname: "Андреевна",
                    position: "Врач-офтальмолог",
                    category: "Врач высшей категории",
                    info: "Специализируется на курации пациентов с различной патологией,выполняет операции экстренные и плановые на веках, конъюнктиве"
                }
            ]
        })
        dispatch({
            type: SET_LOAD_STATUS,
            payload: false
        })
    }
}

export const getStaffById = (staffId) => {

}

export const getClinicInfo = () => {
    return async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: true
        })
        dispatch({
            type: GET_CLINIC_INFO,
            payload: {
                name: "Кемеровская клиническая областная больница, хирургическое отделение № 7",
                shortDescription: "короткое описание клиники",
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

        dispatch({
            type: SET_LOAD_STATUS,
            payload: false
        })
    }
}