setTimeout(function() {
  ImportNavigation();
}, 500);

function ImportNavigation () {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var fileContent = this.responseText;
          var navigation = document.createElement("nav");
          navigation.innerHTML = fileContent;
          document.body.insertBefore(navigation, document.body.firstChild);
      }
  }
  xmlhttp.open("GET", "../Standard Elements/Navigation.html", true);
  xmlhttp.send();
}
