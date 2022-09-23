import styles from './motosIngresadas.module.css';

import { SearchFilter } from '../searchFilter/SearchFilter';
import { ButtonsContainer } from '../buttonsContainer/ButtonsContainer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const data = [
	{
		cedula: 123456790,
		codigo: 62626262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 62626562,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 626262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 62346262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 6263462,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 6263262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 626226262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 622362,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
	{
		cedula: 123456790,
		codigo: 626987262,
		nombre: 'aaaa',
		apellido: 'aaaa',
		placa: 'TBK15',
		id_tarjeta: '4567894654',
		ingreso: 'hoy',
		salida: 'mañana',
	},
];

function MotosIngresadas() {
	const [filter, setFilter] = useState('');
  const [dataFiltered, setDataFiltered] = useState(data);

	const onChangeFilter = (e) => {
		setFilter(e.target.value);
	};
	useEffect(() => {
        const loadHistory = async () => {
            const res = await axios.get(
                `http://localhost:4000/api/parking/`
            );
            setDataFiltered(res?.data);
        };
        
    loadHistory()
    
	}, []);
	const callData = async() => {
		const response = await axios.get(
                `http://localhost:4000/api/parking/`
            );
		setDataFiltered(response?.data);
	}
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
            <h2>Motos Ingresadas</h2>
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
                        </tr>
                    </thead>
                    <tbody className={styles.tableWhite}>
                        {dataFiltered?.map((item, index) => (
													<tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.codigo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.id_tarjeta}</td>
                                <td>{item.placa}</td>
                                <td>{item.fechaEntrada}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
		</div>
	);
}

export { MotosIngresadas };
