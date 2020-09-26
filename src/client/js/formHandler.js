import {checkForName} from "./nameChecker";
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8080/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
   // })

   const options = {
    method:'post',
    body: JSON.stringify({url:formText}),
    credentials: 'same-origin',
    headers : {
        'Content-type' : 'application/json',
    }
   }
fetch ('/api' , options)
   .then(res =>res.json())
    .then(function(res){
        document.getElementById('text').innerHTML = res.text
         alert(dataText)
    })
}

   /*let reqbody = { theText: formText};

   fetch('/api' ,{
       method:'post',
       body: JSON.stringify(reqbody),
       credentials: 'same-origin',
       headers : {
           'Content-type' : 'application/json',
       }
    })
    .then(res =>res.json())
    .then(function(res){
        document.getElementById('results').innerHTML = res.message
        alert(dataText)
    })
}*/

export { handleSubmit }
