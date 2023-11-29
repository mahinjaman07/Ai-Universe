const apiDiv = (data) =>{
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('p-3')
    div.innerHTML=`
    <img style="height: 245px;" src="${data.image}" class="card-img-top rounded " alt="${data.name}">
    <div class="card-body border-bottom">
      <h5 class="card-title fw-bold">Features</h5>
      <ol>${data?.features?.map(ele=> `<li>${ele}</li>`).join(" ")}</ol>
      
    </div>
    <div class="d-flex align-items-center justify-content-between pt-3 pv-3" style="width: 90%;">
    <div>
    <h5 class="fw-bold">${data.name}</h5>
    <p><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</p>
    </div>
    <i onclick="modalDetailsBtn(${data.id})" id="details-btn" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#aiDetails"></i>
    </div>
    `
    return div;
};


const aiModalDiv = data =>{
  console.log(data);
   const div = document.createElement('div');
  div.classList.add('modal-content');
  div.classList.add('modalDiv');
   div.innerHTML =`

    <div class="text-end">
        <button onclick="closeBtn()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body row gap-3 p-3 justify-content-center align-items-center ">
       <div class="col col-5 details-1 border rounded">
       <p class="fw-bold">${data?.description}</p>
       </div>
       <div class="col col-5 details-2 d-flex flex-column align-items-center border rounded">
        <img style="height: 245px;" src="${data?.image_link[0]}" class="card-img-top rounded" alt="${data?.tool_name}">
        <p class="fw-bold">${data?.input_output_examples[0]?.input}</p>
       </div>
    </div>
   `
   return div;
}




