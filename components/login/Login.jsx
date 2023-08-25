import { mainContainer, container, backgroundContainer } from './Login.module.scss';

function LoginContainer({ children }) {
    return <main className={mainContainer}>
        <section className={container}>
            <span className={backgroundContainer}/>
            <article className={formContent}>
                <h1>Opa!</h1>
            </article>
        </section>
    </main>
};

export default LoginContainer;