import react from 'react';

const Balance= ({balance}) => {

    return (
        <div>
            {/*Balance: {!balance===0 ? 'Повний нуль': null}*/}
            {/*Balance: {!balance && 'Повний нуль'}*/}
            {/*analog*/}
            {/*перевірка декількох умов цей варіант важко сприймається */}
            Balance: {balance}
            <hr/>
            {balance === 0 ? 'Повний нуль'
            : balance < 0 ? 'Зайшли в мінус':'Ми в плюсі'}


        </div>
    )
}
export default Balance;