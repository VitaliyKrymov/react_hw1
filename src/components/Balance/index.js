const Balance= ({balance}) => {
    return (
        <div>
            Поточний баланс : {balance}
            <hr/>
            {balance === 0 ? 'Повний нуль'
            : balance < 0 ? 'Зайшли в мінус':'Ми в плюсі'}
        </div>
    )
}
export default Balance;