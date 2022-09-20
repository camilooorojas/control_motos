import axios from 'axios';
import { useState } from 'react';
import styles from './registroMotoStyles.module.css'


function RegistroMoto(props) {
    const [placa, setPlaca] = useState("");
    const handlePlaca = ({ target: { value } }) => setPlaca(value);
    const [idTarjeta, setIdTarjeta] = useState("");
    const handleIdTarjeta = ({ target: { value } }) => setIdTarjeta(value);
    const sendData = async (e) => {
        e.preventDefault();
        const body = {
            placa: placa,
            id_tarjeta: idTarjeta
        }
        // const resp = await axios.get(`http://localhost:4000/api/students/${code}`);
        // if (resp.data.length === 0) {
        //   const res = await axios.post(`http://localhost:4000/api/students`, body);
        // } else {
        //   console.log("Ya existe");
        // }

    }
    return (
        <div className={styles.container}>
            <h2>Registro Moto</h2>
            <form onSubmit={sendData} className={`d-flex flex-column align-items-center ${styles.form}`}>
                <div className={styles.formContainer}>
                    <h3>Placa:</h3>
                    <input required value={placa} onChange={handlePlaca} className={styles.formContainer_input} type="text" placeholder='Digite placa moto...' />
                    <h3>Id Tarjeta prpiedad:</h3>
                    <input required value={idTarjeta} onChange={handleIdTarjeta} className={styles.formContainer_input} type="text" placeholder='Digite Id tarjeta de propiedad...' />
                </div>
                <button type='submit' className={styles.formContainer_button}>Continuar</button>
            </form>            
        </div>
    );

}

export { RegistroMoto }