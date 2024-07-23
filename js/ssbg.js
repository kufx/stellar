    function searchTables() {
      var input, filter, allTables, allRows, i, j;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();

      allTables = document.getElementsByTagName('table');

      var foundCount = 0;

      for (var table of allTables) {
        allRows = table.getElementsByTagName('tr');

        for (i = 1; i < allRows.length; i++) {
          var cells = allRows[i].getElementsByTagName('td');
          for (j = 0; j < cells.length; j++) {
            if (cells[j]) {
              var txtValue = cells[j].textContent.toUpperCase();
              if (txtValue.indexOf(filter) > -1) {
                foundCount++;
                break;
              }
            }
          }
        }
      }

      if (filter!== '') {
        if (foundCount > 0) {
          input.style.borderColor = "#4CAF50";
        } else {
          input.style.borderColor = "red";
        }

        var resultInfo = document.getElementById("resultInfo");
        resultInfo.style.display = "block";
        resultInfo.innerHTML = "搜索结果为 <span style='color:#FF0000;font-size:25px;'>" + foundCount + "</span> 条";
      } else {
        input.style.borderColor = "#808080";
        var resultInfo = document.getElementById("resultInfo");
        resultInfo.style.display = "none";
      }

      for (var table of allTables) {
        allRows = table.getElementsByTagName('tr');

        for (i = 1; i < allRows.length; i++) {
          var found = false;
          var cells = allRows[i].getElementsByTagName('td');
          for (j = 0; j < cells.length; j++) {
            if (cells[j]) {
              var txtValue = cells[j].textContent.toUpperCase();
              if (txtValue.indexOf(filter) > -1) {
                found = true;
                break;
              }
            }
          }
          if (found || filter === '') {
            allRows[i].style.display = "";
          } else {
            allRows[i].style.display = "none";
          }
        }
      }
    }

    function expandSearchInput() {
      var input = document.getElementById("searchInput");
      input.style.width = "80%";
    }

    function handleClickOutsideSearch() {
      var input = document.getElementById("searchInput");
      if (!input.contains(event.target) && input.value === '') {
        input.style.width = "50%";
        input.style.borderColor = "#808080";
      }
    }