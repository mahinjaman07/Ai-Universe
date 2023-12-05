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
    <i onclick=" closeBtn()" class="fa-solid fa-xmark text-end" data-bs-dismiss="modal" aria-label="Close"></i>
    <div class="modal-body row gap-3 p-3 justify-content-center align-items-center ">
       <div class=" col col-5 details-1 border rounded p-3" style="background-color: rgb(252, 215, 234); line-height: 20px; gap: 50px">
       <p class="fw-bold">${data?.description}</p>
       <ul class="d-flex gap-1 ">${data?.pricing ? data?.pricing?.map(price => `<li>${price.price} ${price.plan}</li> ` ).join(' '):'Data Not Found'}       
       </ul>

       <div class="d-flex justify-content-space-between align-items-center">
       
       <div>
           <ul>${Object?.values(data?.features).map(features => features.feature_name ? `<li>${features.feature_name}</li>` : 'No Data Founded').join(' ')}</ul>
       </div>

       <div class="pt-3">
          <ul>${data.integrations? data.integrations.map(integration=> `<li>${integration}</li>`).join(' '):'No Data Available'}</ul>
       </div>

       
       </div>

       </div>

       <div class="col col-5 details-2 d-flex flex-column align-items-center border rounded p-3">
        <img style="height: 245px;" src="${data?.image_link[0]}" class="card-img-top rounded" alt="${data?.tool_name}">
        <p class="fw-bold">${data?.input_output_examples[0]?.input}</p>
        <p>${data?.input_output_examples[0]?.output}</p>
       </div>
    </div>
   `
   return div;
}




