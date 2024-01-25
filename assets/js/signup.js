
var Form=document.querySelector('form');
var X=document.getElementById('X')

// Form.addEventListener('submit', async function(event){
// try{
//     event.preventDefault();

//     const fromData= new FormData(X);
//     console.log(fromdata); 
//     let response= await fetch('/route/api/signup',{
//         method:'POST',
//         body:fromData
//     });

//     const result= await response.json();
//     if(result){
//         console.log(result)
//     }
// }catch(error){
//     console.log(error)
//     //alert(error)

// }

// })
X.onsubmit= async (event)=>{
  try{
    event.preventDefault();
    


    const fromData= new FormData(X);
    //console.log(fromData)
    const response= await fetch('/route/api/signup',{
        method:"post",
        body:fromData,
    });
    const result= await response.json();
    //console.log(result)
   // console.log(result.error.email.msg)
    if(result.error){
        const allError=document.querySelectorAll('.errorx');
        const textError=document.querySelectorAll('p.error');
        for( let i=0;i<allError.length;i++){
          console.log(textError[i])
          allError[i].classList.remove('errorx');
          textError[i].style.display='none';
          //console.log(allError[i])
          //document.querySelector('input')
        }
        var key = Object.keys(result.error)
        key.forEach((FildName)=>{
            X[FildName].classList.add('errorx')
            //console.log(FildName)
            const placeHolder=document.querySelector(`.${FildName}-error`);
            //console.log(placeHolder)
            placeHolder.textContent=result.error[FildName].msg;

            placeHolder.style.display='block';
           
            
        })
        
    }else{
        alert('success ! ');
        document.querySelector('p.error').style.display='none';
        //document.querySelector(`.${X[FildName]}`).classList.remove('errorx');
        // setTimeout(()=>{
        //     //location.reload();
        //     window.location.reload();
        // },2000);
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }
  }catch(error){
    console.log(error)
  }
   
}
