function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://purl.obolibrary.org/obo/HAO_0000397");
oReq.send();
