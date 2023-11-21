import { loadingContainer, loading } from './LoadingContainer.module.scss';

function LoadingContainer() {
    return <span className={loadingContainer}>
        <div className={loading}>
            <span style={{'--ind': 0}}></span>
            <span style={{'--ind': 1}}></span>
            <span style={{'--ind': 2}}></span>
        </div>
        <p>Carregando...</p>
    </span>
};

export default LoadingContainer;