import React from 'react'

const ForgotForm = () => {
    return (
        <>
         <form id="forgotForm" className="forgot__pass noShow">
            <input type="text" placeholder="E-mail" />
            <p className="messageForgot">Укажите электронную почту, для которой вы хотите восстановить пароль.</p>
            <button>Продолжить</button>
        </form>   
        </>
    )
}

export default ForgotForm;
