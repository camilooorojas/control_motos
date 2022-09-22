import styles from './motosIngresadas.module.css';

import { SearchFilter } from '../searchFilter/SearchFilter';
import { useState } from 'react';

function MotosIngresadas() {
	const [filter, setFilter] = useState('');

	const onChangeFilter = (e) => {
		setFilter(e.target.value);
	};

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
			codigo: 62626262,
			nombre: 'aaaa',
			apellido: 'aaaa',
			placa: 'TBK15',
			id_tarjeta: '4567894654',
			ingreso: 'hoy',
			salida: 'mañana',
		},
	];

	return (
		<div className={styles.container}>
            <h2>Motos Ingresadas</h2>
			<SearchFilter 
                filter={filter} 
                onChangeFilter={onChangeFilter}
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
                        {data?.map((item) => (
                            <tr>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.codigo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.id_tarjeta}</td>
                                <td>{item.placa}</td>
                                <td>{item.ingreso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
		</div>
	);
}

export { MotosIngresadas };
