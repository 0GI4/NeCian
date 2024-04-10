const React = require('react')

function FilterHouse () {
    return (
        <select className='FilterHouse'>
            <option headers>Выберите категорию</option>
            {categories.map((category) => <option value={category.id}>{category.name}</option>)}
            
            </select>
    )
}

module.exports = FilterHouse