import './search-panel.css'

const SearchPanel = () => {
    return (
        //Класс из библиотеки boostrap
        <input 
            type="text"
            className="form-control search-input" 
            placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;