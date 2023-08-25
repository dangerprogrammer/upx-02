import verifyLogin from '@/scripts/verifyLogin';
import TextInput from '../text-input/TextInput';
import
    { mainContainer, container, backgroundContainer, formContent, inputsContainer, loginInput, submitButton }
    from './Login.module.scss';

function LoginContainer({ children }) {
    return <main className={mainContainer}>
        <section className={container}>
            <span className={backgroundContainer}/>
            <article className={formContent}>
                <h1>Faça login com seu nome ou entre com sua conta Google!</h1>
                <ul className={inputsContainer}>
                    <TextInput id='input-name' placeholder='Digite seu nome' className={loginInput}/>
                    <TextInput id='input-email' placeholder='Digite seu e-mail' className={loginInput}/>
                    <input type="submit" value="Fazer Login" className={submitButton} onClick={verifyLogin}/>
                </ul>
                { children }
            </article>
        </section>
    </main>
};

export default LoginContainer;