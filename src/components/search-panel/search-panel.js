import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            //Класс из библиотеки boostrap
            <input 
                type="text"
                className="form-control search-input" 
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
                // Value здесь задали так, чтобы всегда можно было организовать проверку вводимых данных и, изменять если что.
        )
    }
    
}

export default SearchPanel;