import React from 'react'

const RegisterForm = ({ onRegClose }) => {
    return (
        <>
        <div onClick={onRegClose} className='form__overlay'>
            <form onClick={e => e.stopPropagation()}>
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Пароль" />
                <button>Регистрация</button>
                <button onClick={onRegClose} className='close__btn'>Закрыть</button>
            </form>
        </div>   
        </>
    )
}

export default RegisterForm;
