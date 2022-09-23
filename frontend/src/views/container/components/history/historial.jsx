import styles from './historial.module.css';
import { SearchFilter } from '../searchFilter/SearchFilter';
import { ButtonsContainer } from '../buttonsContainer/ButtonsContainer';
import { useState } from 'react';

function Historial() {
  const [filter, setFilter] = useState('');
  const [dataFiltered, setDataFiltered] = useState([
		{
			cedula: 1024576995,
			codigo: 20202678023,
			nombre: 'Camilo',
			apellido: 'Rojas',
			placa: 'UTB-32P',
			id_tarjeta: '10008912347',
			ingreso: '08:20',
			salida: '17:52',
		},	
		{
			cedula: 102687410,
			codigo: 20158756925,
			nombre: 'Milton',
			apellido: 'Arango',
			placa: 'TGB-12J',
			id_tarjeta: '10006374158',
			ingreso: '13:22',
			salida: '18:07',
		}
  ]);

	const onChangeFilter = (e) => {
		setFilter(e.target.value);
	};

  const onFilterCode = () => {
    let search = data.filter(item => item.codigo === parseInt(filter, 10))
    setDataFiltered(search.length > 0 ? search : data);
  }

  const onClearFields = () => {
    setDataFiltered(data);
    setFilter('');
  }

  const data = [
		{
			cedula: 1024576995,
			codigo: 20202678023,
			nombre: 'Camilo',
			apellido: 'Rojas',
			placa: 'UTB-32P',
			id_tarjeta: '10008912347',
			ingreso: '08:20',
			salida: '17:52',
		},	
		{
			cedula: 102687410,
			codigo: 20158756925,
			nombre: 'Milton',
			apellido: 'Arango',
			placa: 'TGB-12J',
			id_tarjeta: '10006374158',
			ingreso: '13:22',
			salida: '18:07',
		}
  ]

  return (
    <div className={'d-flex flex-column justify-content-center align-items-center'}>
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
                            <tr key={key} className={`${styles.row}`}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.codigo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.id_tarjeta}</td>
                                <td>{item.placa}</td>
                                <td>{item.ingreso}</td>
                                <td>{item.salida}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
		</div>
  );
}

export { Historial }