setTimeout(function() {
  LoadCalendar();
}, 500);

function LoadCalendar() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var fileContent = this.responseText;
          var entries = JSON.parse(fileContent);
          var calendar = document.getElementById('calendar');

          for (var i = 0; i < entries.length; i++){
            var tr = document.createElement('tr');

            var date = document.createElement('td');
            date.innerHTML = entries[i].date;

            var entry = document.createElement('td');
            entry.innerHTML = entries[i].name;

            tr.appendChild (date);
            tr.appendChild (entry);
            calendar.appendChild (tr);
          }
      }
  }
  xmlhttp.open("GET", "/B1e/Documents/Calendar Entries.json", true);
  xmlhttp.send();
}
