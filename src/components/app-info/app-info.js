import './app-info.css'

const AppInfo = (props) => {
    const {employees, increased} = props;
    return (
        //.app-info + tabX2
        <div className="app-info">
            <h1>Учет сотрудников в компании Алгоритмика</h1>
            <h2>Общее учисло сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;