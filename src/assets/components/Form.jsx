const Form = () => {



    return (
        <form>
            <label htmlFor="first_name">Имя</label>
            <input type="text" name="first_name" id="first_name" />

            <label htmlFor="second_name">Фамилия</label>
            <input type="text" name="second_name" id="second_name" />

            <label htmlFor="middle_name">Отчество</label>
            <input type="text" name="middle_name" id="middle_name" />

            <label htmlFor="birthday">Дата рождения</label>
            <input type="date" name="birthday" id="birthday" />

            <label htmlFor="birthday">Дата рождения</label>
            <input type="date" name="birthday" id="birthday" />

            <label htmlFor="startLearn">Год начала обучения</label>
            <input type="date" name="birthday" id="birthday" />
        </form>
    );
};

export default Form;