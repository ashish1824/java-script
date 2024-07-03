let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);


function inputMsg(){
   let name = prompt("Namaste World!");
   namasteBtn.textContent = 'Roll No.1:' + name;
}

