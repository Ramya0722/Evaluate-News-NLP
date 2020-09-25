function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8080/test')
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
   // })

   let reqbody = { theText: formText};

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
}

export { handleSubmit }
