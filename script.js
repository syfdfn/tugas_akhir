// mengambil semua yang dibutuhkan
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
// event keyup
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //mendapatkan data yang diinput oleh pengguna
  if(userEnteredValue.trim() != 0){ //jika nilai yang diinput bukan hanya spasi
    addBtn.classList.add("active"); //aktifkan tobol tambah
  }else{
    addBtn.classList.remove("active"); //nonaktifkan tobol tambah
  }
}
showTasks(); //memanggil fungsi showTask 
addBtn.onclick = ()=>{ //ketika user mengklik tombol add
  let userEnteredValue = inputBox.value; //mendapatkan nilai data yang diinput
  let getLocalStorageData = localStorage.getItem("New Todo"); //mendapatkan local storage
  if(getLocalStorageData == null){ //jika local storage berisi null
    listArray = []; //buat array kosong
  }else{
    listArray = JSON.parse(getLocalStorageData);  //ubah string json menjadi onjek
  }
  listArray.push(userEnteredValue); //menambahkan elemen baru pada array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = "";
}

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}


    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    showTasks(); 
