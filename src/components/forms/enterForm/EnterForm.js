import React from 'react'
import '../forms.scss'

const EnterForm = ({onLogClose}) => {
    return (
        <>
        <div onClick={onLogClose} className='form__overlay'>
            <form onClick={e => e.stopPropagation()} className="login__form">
                <div className='inp__template'>
                    <input type="text" placeholder="Имя" />
                    <input type="password" placeholder="Пароль" />
                </div>
                <div className='btn__template'>
                    <button>Вход</button>
                    <button onClick={onLogClose} className='close__btn'>Закрыть</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default EnterForm;
