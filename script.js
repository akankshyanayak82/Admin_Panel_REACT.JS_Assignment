$(document).ready(() => {
    var url =
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    $.get(url, (response) => {
      var tableData = document.getElementById("table-data");
      let table = $("<table>");
      let tbody = $("<tbody>");
      for (let i = 0; i < response.length; i++) {
        let tr = $("<tr>").attr("class", "data-row");
        let td_1 = $("<td>").attr("class", "column1").html(response[i].id);
        let td_2 = $("<td>").attr("class", "column2").html(response[i].firstName);
        let td_3 = $("<td>").attr("class", "column3").html(response[i].lastName);
        let td_4 = $("<td>").attr("class", "column4").html(response[i].email);
        let td_5 = $("<td>").attr("class", "column5").html(response[i].phone);
        tr.append(td_1);
        tr.append(td_2);
        tr.append(td_3);
        tr.append(td_4);
        tr.append(td_5);
        tbody.append(tr);
      }
      table.append(tbody);
      table.attr("id", "myTable");
      tableData.append(table[0]);
  
      let tdCount = document.getElementsByTagName("tr");
      for (let i = 0; i < tdCount.length; i++) {
        tdCount[i].onclick = function () {
          var x = document.getElementsByClassName("active");
          if (x.length != 0) {
            x[0].className = "";
          }
          this.className = "active";
          $("#info-content").css({ display: "block" });
          $("#userSelected").html(response[i - 1].firstName);
          document.getElementById("description").innerHTML =
            response[i - 1].description;
          document.getElementById("address").innerHTML =
            response[i - 1].address.streetAddress;
          document.getElementById("city").innerHTML = response[i - 1].address.city;
          document.getElementById("state").innerHTML = response[i - 1].address.state;
          document.getElementById("zip").innerHTML = response[i - 1].address.zip;
        };
      }
    });
  
    $("#search-box").keyup(() => {
      var input, filter, table, tr, i, textvalue;
      input = document.getElementById("search-box");
      filter = input.response.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        if (true) {
          textvalue = tr[i].textContent || tr[i].innerText;
          if (textvalue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    });
  });