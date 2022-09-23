import styles from './historial.module.css';
import { SearchFilter } from '../searchFilter/SearchFilter';
import { ButtonsContainer } from '../buttonsContainer/ButtonsContainer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Historial() {
  const [filter, setFilter] = useState('');
  const [dataFiltered, setDataFiltered] = useState([]);
  
  useEffect(() => {
        const loadHistory = async () => {
            const res = await axios.get(
                `http://localhost:4000/api/parking/outSide`
            );
            setDataFiltered(res?.data);
        };
        
    loadHistory()
    
  }, []);
  const callData = async() => {
		const response = await axios.get(
                `http://localhost:4000/api/parking/outside/`
            );
		setDataFiltered(response?.data);
	}
	const onChangeFilter = (e) => {
		setFilter(e.target.value);
	};
  
  const onFilterCode = () => {
    let search = dataFiltered.filter(item => item.codigo === parseInt(filter, 10))
    setDataFiltered(search.length > 0 ? search : dataFiltered);
  }

  const onClearFields = () => {
    callData();
    setFilter('');
  }

  return (
    <div className={styles.container}>
            <h2>Historial</h2>
			      <SearchFilter 
                filter={filter} 
                onChangeFilter={onChangeFilter}
            />
            <ButtonsContainer 
              onFilterCode={onFilterCode}
              onClearFields={onClearFields}
            />
            <div className="containerTable">
                <table className="table">
                    <thead className={styles.tableBlack}>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Código</th>
                            <th>Cedula</th>
                            <th>Id Tarjeta</th>
                            <th>Placa</th>
                            <th>Ingreso</th>
                            <th>Salida</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableWhite}>
                        {dataFiltered?.map((item, key) => (
                            <tr key={key}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.codigo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.id_tarjeta}</td>
                                <td>{item.placa}</td>
                                <td>{item.fechaEntrada}</td>
                                <td>{item.fechaSalida}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
		</div>
  );
}

export { Historial }