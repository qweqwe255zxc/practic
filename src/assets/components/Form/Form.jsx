import './Form.css';
import { useRef, useEffect, useState } from 'react'

const Form = ({ setData }) => {

    const inputsRef = useRef([]);
    const btnRef = useRef(null);

    const allInputs = (el, i) => (
        inputsRef.current[i] = el
    )

    const [students, setStudents] = useState([
        {
            name: 'Владимир',
            surname: 'Болдырь',
            middleName: 'Михайлович',
            birthday: '2008-01-01',
            startDate: '2024-09-01',
            faculty: 'ИСиП'
        },
        {
            name: 'Андрей',
            surname: 'Бакушин',
            middleName: 'Дмитриевич',
            birthday: '2008-04-25',
            startDate: '2024-09-01',
            faculty: 'ИСиП'
        }
    ]);
    const handleClick = (e) => {
        e.preventDefault();

        const hasEmptyField = inputsRef.current.some((input) => input.value.trim() === '');
        const birthday = new Date(inputsRef.current[3].value);
        const startDate = new Date(inputsRef.current[4].value);
        console.log(birthday, startDate);


        if (!hasEmptyField) {
            if (birthday < new Date() && birthday > new Date('1900-01-01')) {
                if (startDate < new Date() && startDate > new Date('2000-01-01')) {
                    const newStudent = {
                        name: inputsRef.current[0].value.trim(),
                        surname: inputsRef.current[1].value.trim(),
                        middleName: inputsRef.current[2].value.trim(),
                        birthday: inputsRef.current[3].value.trim(),
                        startDate: inputsRef.current[4].value.trim(),
                        faculty: inputsRef.current[5].value.trim(),
                    };

                    setStudents(prev => {
                        const newStudents = [...prev, newStudent];
                        // setData(newStudents);
                        return newStudents;
                    });

                    inputsRef.current.forEach((input) => input.value = '');
                    alert("Форма успешно отправлена!");
                } else {
                    alert("Некорректный год начала обучения");
                }
            } else {
                alert("Некорректная дата рождения");
            }
        } else {
            alert("Заполните все поля");
        }
    };

    useEffect(() => {
        console.log('Обновлён список студентов:', students);
        setData(students);
    }, [students]);

    // setInterval(() => {
    //     setData(students);
    // }, 50);


    return (
        <form>
            <label htmlFor="first_name" >Имя</label>
            <input type="text" name="first_name" id="first_name" ref={(el) => allInputs(el, 0)} required />

            <label htmlFor="second_name ">Фамилия</label>
            <input type="text" name="second_name" id="second_name" ref={(el) => allInputs(el, 1)} required />

            <label htmlFor="middle_name" >Отчество</label>
            <input type="text" name="middle_name" id="middle_name" ref={(el) => allInputs(el, 2)} required />

            <label htmlFor="birthday" >Дата рождения</label>
            <input type="date" name="birthday" id="birthday" ref={(el) => allInputs(el, 3)} required />

            <label htmlFor="startDate" >Год начала обучения</label>
            <input type="date" name="startDate" id="startDate" ref={(el) => allInputs(el, 4)} required />

            <label htmlFor="faculty" >Факультет</label>
            <input type="text" name="faculty" id="faculty" ref={(el) => allInputs(el, 5)} required />

            {/* <input type="submit" value="Добавить студента" /> */}
            <button type='button' ref={btnRef} onClick={handleClick}>Добавить студента</button>
        </form>
    );
};

export default Form;