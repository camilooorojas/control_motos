import styles from './infoEstudianteStyles.module.css';

import { CardEstudiante } from './components/CardStudent/CardEstudiante';

function InfoEstudiante() {
  const data = [
    {
      plate: "aaa",
      propertyId: 123
    },
    {
      plate: "ccc",
      propertyId: 456
    }
  ]

  return (
    <div className={styles.container}>
      <h2>Datos del estudiante</h2>
      <div className={styles.bg_white}>
        <div className={styles.student_data}>
          <div>Nombre: </div>
          <div>Apellido: </div>
          <div>Cédula: </div>
          <div>Código: </div>
        </div>
        <div className={styles.card_content}>
          {data?.map(item => (
            <CardEstudiante 
              propertyId={item.plate}
              plate={item.propertyId}
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