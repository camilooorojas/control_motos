import axios from 'axios';
import { useState } from 'react';
import styles from './registroMotoStyles.module.css'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function RegistroMoto(props) {
    const { student } = props
    const [placa, setPlaca] = useState("");
    const handlePlaca = ({ target: { value } }) => setPlaca(value);
    const [idTarjeta, setIdTarjeta] = useState("");
    const handleIdTarjeta = ({ target: { value } }) => setIdTarjeta(value);
    const [modalOpen, setModalOpen] = useState(false);

    Modal.setAppElement('#root');

    const stylesModal = {
        container: {
            top: '20%',
            left: '20%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        modal: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            width: '80%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#fff',
            marginTop: 80,
            marginLeft: 40,
        },
        text: {
            color: '#3f2949',
            marginTop: 10,
        },
        close: {
        },
    };

    const sendDataMoto = async (e) => {
        e.preventDefault();
        const body = {
            placa: placa,
            id_tarjeta: idTarjeta
        }
        const respC = await axios.post(`http://localhost:4000/api/credentials`, body);
        if (respC?.data?.message === "Credential saved") {
            console.log("tipo: ", typeof (idTarjeta));
            const responseC = await axios.get(`http://localhost:4000/api/credentials/tarjeta/${idTarjeta}`);           
            console.log("inffo", responseC.data[0]._id);
            console.log("estudiante lo que existe", student[0]);
            console.log("estudiante credencial", student[0].credential.length);
            if(student[0].credential.length === 0){
                console.log("Es nulo")
                const addCredential = {
                    credential: responseC.data[0]._id
                }
                const res = await axios.put(`http://localhost:4000/api/students/${student[0]?._id}`, addCredential);    
            }
            else{
                console.log("No es nulo", student[0].credential)
                const addCredential = student[0].credential.push(responseC.data[0]._id);
                const res = await axios.put(`http://localhost:4000/api/students/${student[0]?._id}`, addCredential);
            }
            
        }
        setModalOpen((prev) => !prev);
    }
    return (
        <div className={styles.container}>
            <h2>Registro Moto</h2>
            <div className={styles.prueba}></div>
            <form onSubmit={sendDataMoto} className={`d-flex flex-column align-items-center ${styles.form}`}>
                <div className={styles.formContainer}>
                    <h3>Placa:</h3>
                    <input required value={placa} onChange={handlePlaca} className={styles.formContainer_input} type="text" placeholder='Digite placa moto...' />
                    <h3>Id Tarjeta prpiedad:</h3>
                    <input required value={idTarjeta} onChange={handleIdTarjeta} className={styles.formContainer_input} type="text" placeholder='Digite Id tarjeta de propiedad...' />
                </div>
                <button type='submit' className={styles.formContainer_button}>Registrar</button>

            </form>

            <Modal
                isOpen={modalOpen}
                contentLabel="Example Modal"
            >
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">                    
                        </div>
                        <div className="title">
                            <h1>Información de Registro</h1>
                        </div>
                        <div className="body">
                            <p>Registro exitoso!</p>
                        </div>
                        <div className="footer">                           
                            <Link to="/ingreso">
                                <button>Continuar</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );

}

export { RegistroMoto }