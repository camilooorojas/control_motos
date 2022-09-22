import styles from './SearchFilter.module.css';

function SearchFilter(props) {
    const { filter, onChangeFilter } = props;

	return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={filter}
                onChange={onChangeFilter}
            />
        </div>
    );
}

export { SearchFilter };
