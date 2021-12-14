import React from 'react'

const EnterForm = () => {
    return (
        <>
            <form id="logInForm" className="login-form noShow">
            <input type="text" placeholder="Имя" />
            <input type="password" placeholder="Пароль" />
            <button>Вход</button>
        </form>
        </>
    )
}

export default EnterForm;
