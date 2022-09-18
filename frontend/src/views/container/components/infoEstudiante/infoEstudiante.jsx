import styles from './infoEstudianteStyles.module.css';

import { CardEstudiante } from './components/CardStudent/CardEstudiante';
import axios from 'axios';
import { useEffect } from 'react';

function InfoEstudiante(props) {
  const { student, bikes, setBikes} = props;

  useEffect(() => {
    console.log(student);
    const loadBikeInfo = async (code) => {
    const res = await axios.get(`http://localhost:4000/api/credentials/${code}`);
    setBikes(prev => [...prev, res.data]);
    }
    setBikes([]);
     student?.credential.forEach(element => {
      loadBikeInfo(element);
    });
  }, [student, setBikes])
  
  
  return (
    <div className={styles.container}>
      <h2>Datos del estudiante</h2>
      <div className={styles.bg_white}>
        <div className={styles.student_data}>
          <div>Nombre: {student?.nombre}</div>
          <div>Apellido: {student?.apellido}</div>
          <div>Cédula: {student?.cedula}</div>
          <div>Código: {student?.codigo}</div>
        </div>
        <div className={styles.card_content}>
          {bikes?.map((item, index) => (
            <CardEstudiante  key={index}
              propertyId={item.id_tarjeta}
              plate={item.placa}
            />
          ))}
        </div>
        <div className={styles.button_container}>
          <button>
            Registrar nueva moto
          </button>
        </div>
      </div>
    </div>
  );
}

export {InfoEstudiante}