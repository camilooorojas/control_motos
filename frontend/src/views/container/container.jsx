import { NavBar } from './components/navBar/navBar';
import { RegistroIngreso } from './components/registroIngreso/registroIngreso';
import styles from './containerStyles.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistroSalida } from './components/registroSalida/registroSalida';
import { RegistroEstudiante } from './components/registroEstudiante/registroEstudiante';
import { Historial } from './components/history/historial';
import { MotosIngresadas } from './components/motosIngresadas/motosIngresadas';


function Container() {
  
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <NavBar />
        <h1>PARQUEADERO UD</h1>

        <Routes>
          <Route path="/" element={<RegistroIngreso />} />
          <Route path="/ingreso" element={<RegistroIngreso />} />
          <Route path="/salida" element={<RegistroSalida />}/>
          <Route path="/registro" element={<RegistroEstudiante/>}/>
          <Route path="/historial" element={<Historial/>}/>
          <Route path="/motos" element={<MotosIngresadas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export {Container}