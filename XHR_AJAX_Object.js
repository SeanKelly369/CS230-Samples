document.getElementById('button').addEventListener('click', loadData);

//Load , make new, open it, get it, load it, use it, send it

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN.  true, in that the code is asynchronous
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      //use something with the data received
      console.log(this.responseText);
    }
  }

  xhr.send();

}
