const Sort = {
    byFio: (a, b) => `${a.surname} ${a.name} ${a.middleName}`.localeCompare(`${b.surname} ${b.name} ${b.middleName}`),
    byFaculty: (a, b) => a.faculty.localeCompare(b.faculty),
    byBirthday: (a, b) => new Date(a.birthday) - new Date(b.birthday),
    byStartDate: (a, b) => new Date(a.startDate) - new Date(b.startDate),

}

export default Sort;