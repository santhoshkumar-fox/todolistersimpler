const _input = document.getElementById("textField");
const _paraent_list = document.getElementById("list1");


_input.addEventListener("keypress",(e)=>

{
//    get value after enter
   if(e.code === "Enter" && e.target.value !=="" ){

    let totdo = e.target.value;

    // create dynamic id
    let totdo_id = new Date().getTime();
    let _todo_item =document.createElement("li");
    const lable_id = totdo_id+11;
    let delete_id = "deleteId";

    // innerhtml 
    _todo_item.innerHTML= `
    <input id="`+totdo_id+`" type="checkbox"><div class="sizedBox"></div><lable id="`+lable_id+`" for="`+totdo_id+`">`+totdo+`</lable><div class="sizedBox"></div><i id="`+delete_id+`" class="fa-solid fa-delete-left"></i>
    `;

    // add the created element into parant class

    _paraent_list.appendChild(_todo_item);
    e.target.value="";


   }
});

_paraent_list.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.checked){

        const  lable_id = Number(e.target.id) + 11;
        var st_lable_id = String(lable_id);
        const _lable = document.getElementById(st_lable_id);
        _lable.style.textDecoration  = "line-through";

        
    }
    else{
        // const  lable_id1 = Number(e.target.id) + 11;
        // const st_lable_id1 = String(lable_id1);
        // const _lable1 = document.getElementById(st_lable_id1);
        
        
        
    }

    if(e.target.id === "deleteId"){
        //document.getElementById("deleteId").style.textDecoration = "line-through";
        e.stopPropagation();
        const _p = e.target.parentElement;
        _p.remove();
    }
    //  document.getElementById('deleteId').style.color= "red";
    
});

//REGIT ELEMENTS


