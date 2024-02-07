
let vehicle=document.getElementById('vehicle')
async function vehicles(){
    try{
        var url_data =await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    var res= await url_data.json()
     console.log(res);
    res.forEach((ele)=>{
        let code_data =document.createElement('div')
        code_data.innerText=`Code : ${ele.codigo}`
        vehicle.appendChild(code_data) 
        let data =document.createElement('div')
        data.innerText=`Name : ${ele.nome}`
        vehicle.appendChild(data) 
       


    })
}
    
    
catch{
    console.log(err);

    }   
}
    vehicles()
