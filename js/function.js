const aiContainer = document.getElementById('container');
const spinner = document.getElementById('spinner');
const modalContainer = document.getElementById('modal-container');

const apiAllData = async limit =>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    displayData(limit ,data.data.tools);
};
apiAllData(6);
const displayData = (limit, allData)=>{
        if (limit > 5 && allData.length > 10 ){
            const displayAiData = allData.slice(0, limit);
            displayAiData.map(displayAi => {
                const aiDiv = apiDiv(displayAi);
                aiContainer.appendChild(aiDiv);
            })
        }
        else{
            aiContainer.innerHTML = '';
            allData.map(allAi=>{
                const AllAiDiv = apiDiv(allAi);
                aiContainer.appendChild(AllAiDiv);
                spinner.classList.add('d-none');
            })
        }
        

};




const seeMoreBtn = limit =>{
    spinner.classList.remove('d-none');
    apiAllData(limit);
    document.querySelector('.more-btn').classList.add('d-none');
}

const modalDetailsBtn = async id =>{
    let trueId = 0;
    if(id <= 9){
        const num = `0${id}`;
        trueId = num;
    }
    else{
        trueId = id;
    }
    const url = `https://openapi.programming-hero.com/api/ai/tool/${trueId}`;
    const res = await fetch(url);
    const data = await res.json();
    modalDetails(data.data)
    
}


const modalDetails = data =>{
    const modalDiv = aiModalDiv(data);
    modalContainer.append(modalDiv);
}

const closeBtn = ()=>{
    modalContainer.innerHTML = '';
}

