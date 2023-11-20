import verifyLogin from '@/scripts/verifyLogin';
import TextInput from '../text-input/TextInput';
import
    { mainContainer, container, formContent, inputsContainer, loginInput, submitButton }
    from './Login.module.scss';

function LoginContainer({ children, setLogin }) {
    return <main className={mainContainer}>
        <section className={container}>
            <article className={formContent}>
                <h1>Faça login com seu nome ou entre com sua conta Google!</h1>
                <ul className={inputsContainer}>
                    <TextInput id='input-name' placeholder='Digite seu nome' type='text' className={loginInput}/>
                    <TextInput id='input-email' placeholder='Digite seu e-mail' type='email' className={loginInput}/>
                    <button className={submitButton} onClick={() => verifyLogin(setLogin)}>
                        <span>Fazer Login</span>
                    </button>
                </ul>
                { children }
            </article>
        </section>
    </main>
};

export default LoginContainer;