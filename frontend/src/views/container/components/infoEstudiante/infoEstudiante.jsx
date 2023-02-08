import styles from "./infoEstudianteStyles.module.css";
import { CardEstudiante } from "./components/CardStudent/CardEstudiante";
import axios from "axios";
import { useEffect, useState } from "react";
import { RegistroMoto } from "../registroMoto/registroMoto";
import { RiEdit2Fill } from "react-icons/ri";
import Modal from "react-modal";

function InfoEstudiante(props) {
  const { student, setStudents, bikes, setBikes, setSearch } = props;
  const [newMoto, setNewMoto] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalEditMotorcycleOpen, setModalEditMotorcycleOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState(0);
  const [id , setId] = useState(0);
  const handleName = ({ target: { value } }) => setName(value);
  const handleLastName = ({ target: { value } }) => setLastName(value);
  const handleCode = ({ target: { value } }) => setCode(value);
  const handleId = ({ target: { value } }) => setId(value);
  let dateInit;

  useEffect(() => {
    const loadBikeInfo = async (code) => {
      const res = await axios.get(
        `http://localhost:4000/api/credentials/${code}`
      );
      setBikes((prev) => [...prev, res.data]);
    };
    setBikes([]);
    student?.credential.forEach((element) => {
      loadBikeInfo(element);
    });
  }, [student, setBikes]);

  const changeState = () => {
    console.log("Llega a cambiar");
    setNewMoto(true);
  };

  const generateDates = () => {
    let date = new Date();
    dateInit = date.toLocaleString();
    console.log("fecha", dateInit);
  };
  const addRegisterParking = async (plate, propertyId) => {
    generateDates();
    const body = {
      cedula: student?.cedula,
      codigo: student?.codigo,
      nombre: student?.nombre,
      apellido: student?.apellido,
      placa: plate,
      id_tarjeta: propertyId,
      inside: 1,
      fechaEntrada: dateInit,
    };
    const response = await axios.get(
      `http://localhost:4000/api/parking/${student?.codigo}`
    );
    console.log("Formato", response);
    let flag = 0;
    response?.data?.forEach((element) => {
      if (element.inside === 1) {
        setMensaje("El estudiante ya ingresó una moto");
        flag = 1;
      }
    });

    if (flag === 0) {
      await axios.post(`http://localhost:4000/api/parking`, body);
      setMensaje("Moto Registrada Exitosamente!");
    }
    console.log("mensaje: ", mensaje);
    setModalOpen((prev) => !prev);
  };

  const closedModal = () => {
    setModalOpen(false);
    setStudents([]);
  };

  const resetPage = () => {
    setStudents([]);
    setSearch("");
  };

  const editStudent = async () => {
    const body = {
        cedula: id,
        nombre: name,
        apellido: lastName
    }
    console.log("Student", student)
    await axios.put(`http://localhost:4000/api/students/${student._id}`, body);
    const res = await axios.get(`http://localhost:4000/api/students/${student.codigo}`);
    console.log("cambio", res.data)
    setStudents(res.data);
    setSearch("");
    setModalEditOpen(false);
  };


  const loadModalStudent = (element) => {
    setName(element.nombre);
    setLastName(element.apellido);
    setId(element.cedula);

    console.log("entre")
    setModalEditOpen((prev) => !prev);
    console.log(modalEditOpen)
  };

  const closedModalEdit = () => {
    setModalEditOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button_back}>
        <button onClick={() => resetPage()}>Volver a buscar</button>
      </div>
      <h2>Datos del estudiante</h2>
      <div className={styles.bg_white}>
        <div className={styles.student_data}>
          <div>
            <div>Nombre: {student?.nombre}</div>
            <div>Apellido: {student?.apellido}</div>
            <div>Cédula: {student?.cedula}</div>
            <div>Código: {student?.codigo}</div>
          </div>
          <div onClick={()=>loadModalStudent(student)}>
            <RiEdit2Fill />
            </div>
        </div>
        {newMoto === false ? (
          <div className={styles.card_content}>
            {bikes?.map((item, index) => (
              <CardEstudiante
                key={index}
                propertyId={item.id_tarjeta}
                plate={item.placa}
                idMotorcycle={item._id}
                idStudent={student.codigo}
                addRegisterParking={addRegisterParking}
                bikes={bikes}
                setBikes={setBikes}
                code={student.credential}
              />
            ))}
          </div>
        ) : (
          <RegistroMoto student={student} setStudents={setStudents} />
        )}
        <div className={styles.button_container}>
          <button onClick={() => changeState()}>Registrar nueva moto</button>
        </div>
      </div>

      <Modal isOpen={modalOpen} contentLabel="Example Modal">
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn"></div>
            <div className="title">
              <h1>Información de Registro Ingreso</h1>
            </div>
            <div className="body">
              <p>{mensaje}</p>
            </div>
            <div className="footer">
              <button onClick={() => closedModal()}>Continuar</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={modalEditOpen}>
        <div className="modalBackground">
          <div className="modalContainerField modalContainer">
            <h2>Editar Estudiante</h2>
           
              <div className={styles.formContainer}>
                <div>
                  <h3>Código:</h3>
                  <label>{student?.codigo}</label>
                </div>
                <div>
                  <h3>Nombre:</h3>
                  <input
                    required
                    value={name}
                    onChange={handleName}
                    className={styles.formContainer_input}
                    type="text"
                    placeholder="Digite nombre del estudiante..."
                    />
                </div>
                <div>
                  <h3>Apellido:</h3>
                  <input
                    required
                    value={lastName}
                    onChange={handleLastName}
                    className={styles.formContainer_input}
                    type="text"
                    placeholder="Digite apellido del estudiante..."
                    />                               
                </div>
                <div>
                  <h3>Cédula:</h3>
                  <input
                    required
                    value={id}
                    onChange={handleId}
                    className={styles.formContainer_input}
                    type="number"
                    placeholder="Digite cédula del estudiante..."
                    />
                </div>
                <div className={styles.btn_action}>
                <button onClick={() => editStudent()}>
                  Editar
                </button>
                <button onClick={() => closedModalEdit()}>
                  Cerrar
                </button>
              </div>
              </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export { InfoEstudiante };
