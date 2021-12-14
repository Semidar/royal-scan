import React from 'react'
import './enterForm.scss'

const EnterForm = ({ onEntreFormClose }) => {
    return (
        <>
        <div className='form__overlay'>
            <form className="login__form">
                <div className='inp__template'>
                    <input type="text" placeholder="Имя" />
                    <input type="password" placeholder="Пароль" />
                </div>
                <div className='btn__template'>
                    <button>Вход</button>
                    <button onClick={onEntreFormClose} className='close__btn'>Закрыть</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default EnterForm;
