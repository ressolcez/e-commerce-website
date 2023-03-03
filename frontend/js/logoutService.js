const logutUser = async () => {

  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  await fetch('http://localhost:8080/api/v1/authentication/logout', {

     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({userId: userId, token: token})
     
   }).then(response => response.json())
   .then( json => {
     localStorage.clear();
     window.location.reload()
  } 

  ).catch(error => {
     console.log(error);
   });

}