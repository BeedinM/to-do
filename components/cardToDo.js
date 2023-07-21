import styles from './cardToDo.module.css';

export default function CardToDo() {
    return (
        <div className={styles.cardTotal}>
            <div className={styles.dateHeader}>01/01/2023</div>

            <div className={styles.divClient}>
                Cliente:<input type='text'></input>
            </div>

            <div className={styles.divCheckbox}>
                <div>
                    <input type='checkbox' id='1' className={styles.inputCheckbox}/>
                    <label for='1'>Concluído</label>
                </div>

                <div>
                    <input type='checkbox' id='2' className={styles.inputCheckbox}/>
                    <label for='2'>Em andamento</label>
                </div>

                <div>
                    <input type='checkbox' id='3' className={styles.inputCheckbox}/>
                    <label for='3'>Outro:</label>
                    <input type='text' className={styles.inputOutro}></input>
                </div>
            </div>

            <div className={styles.divTxt}>
                <input type='text' />
            </div>
        </div>
    )
}