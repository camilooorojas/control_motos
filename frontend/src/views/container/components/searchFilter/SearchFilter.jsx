import styles from './SearchFilter.module.css';

function SearchFilter(props) {
    const { filter, onChangeFilter } = props;

	return (
        <div className={styles.container}>
            <input
                autoFocus
                type="number" 
                value={filter}
                onChange={onChangeFilter}
            />
        </div>
    );
}

export { SearchFilter };
