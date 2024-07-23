    function searchTables() {
      var input, filter, allTables, allRows, i, j;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();

      allTables = document.getElementsByTagName('table');

      var found = false;

      for (var table of allTables) {
        allRows = table.getElementsByTagName('tr');

        for (i = 1; i < allRows.length; i++) {
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
        }
      }

      if (found) {
        input.style.borderColor = "#4CAF50";
      } else if (filter === '') {
        input.style.borderColor = "#808080";
      } else {
        input.style.borderColor = "red";
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