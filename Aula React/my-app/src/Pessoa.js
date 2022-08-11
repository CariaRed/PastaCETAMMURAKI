import styles from '../src/Pessoa.css'

function Pessoa (props) {

    return(
        <div className={styles.layout}>
            <img source={props.foto} height="90"/>
            <p>Nome: {props.nome}</p>
            <p>sobronome: {props.sobrenome}</p>
            <p>profissao: {props.profissao}</p>
        </div>
    )
}
  


export default Pessoa;