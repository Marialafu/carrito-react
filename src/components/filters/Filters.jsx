import styles from './filters.module.css'
import {FILTER_BUTTONS} from '../../constants/filterButtons'

const Filters = () => {

  const filterGeneralClass = `${styles.filterButton} ${styles.button}`

    return (
        <section className={styles.filterButtonsContainer} >
          {FILTER_BUTTONS.map(filter => 
            <button 
            className={filterGeneralClass}
            >{filter.name}
            </button>
          )}
      </section>
    )


}

export default Filters