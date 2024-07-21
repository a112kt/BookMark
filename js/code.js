var book_mark = document.getElementById("book_name")
var input_url = document.getElementById("url")


var book_Arr = JSON.parse(localStorage.getItem("book")) ?? [];
display()




function AddBook(){
    var book = {
        mark : book_mark.value,
        url : input_url.value,
    }  
    if (validationName()== true && validationurl()==true){
        book_Arr.push(book) 
        onchange();
        clear(); 

    } 
    else{
            Swal.fire({
                title: `<i class="fa-solid fa-circle text-danger"></i> <i class="fa-solid fa-circle text-info"></i> <i class="fa-solid fa-circle text-warning"></i>`,
                html: `
                 <p class="m-0 pb-2 fs-3 text-black">site Name or Url is not valid,Please follow the rules below:<br></p>
                 <ol class="rules list-unstyled m-0">
                 <li class= "text-success-emphasis">
                 <i class="fa-regular fa-circle-right text-danger"></i>
                 Site name must contain at least 3 characters
                 </li>
                 <li class= "text-success-emphasis">
                 <i class="fa-regular fa-circle-right text-danger"></i>
                 Site URL must be a valid one
                 </li>
                 </ol>
                `,
                showCloseButton: true,
                
              });
           

    }
        }


        



function display(){
    var box =""
    for (var i=0; i<book_Arr.length;i++){
       box+= `
       <tr>
           <td>${i}</td>
           <td>${book_Arr[i].mark}</td>
           <td><a href="${book_Arr[i].url}" target="_blank" ><button class="btn" >Visit</button></a></td>
           <td><button class="btn" onclick="Delete(${i})">Delete</button></td>
       </tr>
       `
      
    }
    document.getElementById("table_body").innerHTML = box;
}



function clear(){
    book_mark.value = "";
     input_url.value = "";
}
function onchange(){   
        localStorage.setItem("book",JSON.stringify(book_Arr))
        display()
        
     
    
}


function Delete(index){
    book_Arr.splice(index,1);
    onchange();
   
}


// localStorage.clear()

function validationName(){
    if(/^[A-Za-z]{3,}$/.test(book_mark.value)){
        book_mark.classList.add("is-valid")
        book_mark.classList.remove("is-invalid")
        return true

    }
    else{
        book_mark.classList.add("is-invalid")
        book_mark.classList.remove("is-valid")
        return false

    }


}
function validationurl(){
    if(/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}?$/.test(input_url.value)){
        input_url.classList.add("is-valid")
        input_url.classList.remove("is-invalid")
        return true

    }
    else{
        input_url.classList.add("is-invalid")
        input_url.classList.remove("is-valid")
        return false

    }
}
