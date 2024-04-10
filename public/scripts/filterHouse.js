const select = document.querySelector('.FilterHouse')
const form = document.querySelector('.FormFilter')

if(form){
    form.addEventListener('submit', async (e) =>{
        const category = e.target.value
        console.log(category);
        const res = await fetch(`/api/filter/${category}`)
        const data = await res.json()
        if(data.message === 'success') {
            const container = document.querySelector('.container').innerHTML = data.category            
        }
    })
}