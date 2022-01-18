import Notebook from "../Notebook/Notebook";

const notebooks=[
    {
        id:1,
        brand:'Apple',
        model:'Pro',
        cost: '100',
        img:"https://i.eldorado.ua//goods_images/1039096/7444887-1634645298.jpg"
    },
    {
        id:2,
        brand:'HP',
        model:'Pro',
        cost: '150',
        img:"https://img.moyo.ua/img/products/4952/73_4000.jpg?1642496903"
    }
]
const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook=><Notebook notebook={notebook}/>)}
        </div>
    );
};

export default Notebooks;