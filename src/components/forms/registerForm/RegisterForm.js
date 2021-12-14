import React from 'react'

const RegisterForm = () => {
    return (
        <>
         <form id="regForm" className="register-form noShow">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Пароль" />
            <button>Регистрация</button>
        </form>   
        </>
    )
}

export default RegisterForm;
