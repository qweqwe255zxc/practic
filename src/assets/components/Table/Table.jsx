import { useState} from "react";
import './Table.css'
import Sort from "../Sort";

const Table = ({ data }) => {

    const [localData, setLocalData] = useState(data);

    const calcAge = (birthday) => {
        const birthDate = new Date(birthday)
        const today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth() // 3 - 4 = -1
        if (month < 0 || (month == 0 && today.getDate() - birthDate.getDate() < 0)) { // 15 - 24 = -9
            age--
        }
        return age
    }

    const calcCourse = (startDateStr) => {
        const startDate = new Date(startDateStr)
        const today = new Date()
        const endYear = startDate.getFullYear() + 4
        const mounthNow = today.getMonth()
        const currentCourse = today.getFullYear() - startDate.getFullYear() + (mounthNow > 8 ? 1 : 0)
        const course = currentCourse > 4 ? 'Закончил' : `${currentCourse} курс`
        return `${startDate.getFullYear()}-${endYear} | ${course}`
    }


    return (

        <table>
            <thead>
                <tr>
                    <th onClick={() => {
                        console.log(localData);
                        const newData = setLocalData([...localData].sort(Sort.byFio))
                        console.log(newData);
                        return newData
                        
                    }}>ФИО студента</th>
                    <th>Факультет</th>
                    <th>День рождения, возраст</th>
                    <th>Курс</th>
                </tr>
            </thead>
            <tbody>
                {localData && localData.length > 0 ? (
                    localData.map((student, i) => {
                        return (
                            <tr key={i}>
                                <td>{student.surname} {student.name} {student.middleName}</td>
                                <td>{student.faculty}</td>
                                <td>{student.birthday} | Возраст: {calcAge(student.birthday)}</td>
                                <td>{calcCourse(student.startDate)}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan="4">Нет данных</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;