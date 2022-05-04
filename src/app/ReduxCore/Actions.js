export const handleShow = (value) => {
    return {
        type : 'change',
        payLoad : value
    }
}
export const addStudent = (value) => {
    return {
        type : 'student/add',
        payLoad : {
            name : value.name,
            code : value.code,
            poin : value.poin,
            age : value.age
        }
    }
}
export const deleteStudent = (value) => {
    return {
        type : 'student/delete',
        payLoad : value,
    }
}
export const updateStudent = (value, key) => {
    return {
        type : 'student/update',
        payLoad : value,
        key : key
    }
}
export const changeKeyBoard = (value) => {
    return {
        type : 'keyboard',
        payLoad : value
    }
}
export const changeSort = (value) => {
    return {
        type : 'changeSort',
        payLoad : value
    }
}
export const changeRank = (value) => {
    return {
        type : 'changeRank',
        payLoad : value
    }
}