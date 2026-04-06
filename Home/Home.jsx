import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.page}>
            <h1>Bem-vindo à Home</h1>
            <p>Este é o lugar que vai te levar para outros lugares</p>
        </div>
    );
}

export default Home;