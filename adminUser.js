// localStorage.setItem("Books", JSON.stringify(Books));

$(document).ready(function () {
  let allUsers = JSON.parse(localStorage.getItem("user_data")) || [];
  //   console.log(allBooks);

  function maketableUsers() {
    const datatable = $("#dataTable");
    datatable.empty();

    datatable.append(`
      <thead>
      <tr>
  
        <th>Name</th>
        
        <th>Email address</th>
        <th>Password</th>
        <th>gender</th>

        <th>Edit option</th>
        <th>Delete option</th>
      </tr>
    </thead>`);

    allUsers.forEach((product) => {
      datatable.append(`<tr>
        <td> ${product.Name} </td>
        <td> ${product.Email} </td>
        <td> ${product.Password} </td>
        <td> ${product.Gender} </td>
        <td><button class="deleteBtn btn btn-danger" data-id="${product.Email}">Delete</button></td>
        <td><a href="editUser.html?email=${product.Email}" class="btn btn-primary">Edit</a></td>
  
  
        <br>
    
        
        `);
    });
  }

  $(document).on("click", ".deleteBtn", function () {
    const indexm = $(this).data("id");
    console.log(indexm);
    // console.log(allBooks);
    allUsers = allUsers.filter((product) => product.Email !== String(indexm));
    // console.log(Manan);

    // Update the localStorage
    localStorage.setItem("user_data", JSON.stringify(allUsers));

    // Update the table
    maketableUsers();
  });

  // Event listener for the log ID buttons
  //   $(document).on("click", ".EditBtn", function () {
  //     var productId = $(this).data("id");
  //     console.log("Clicked Log ID button for product id: " + productId);
  //   });

  $("#showFormBtn").on("click", function () {
    $("#addNewForm").show();
  });

  $("#addNewForm").on("submit", function (event) {
    event.preventDefault();

    // Collect values from the form
    const Name = $("#signupName").val();
    const Email = $("#signupEmail").val();
    const Password = $("#signupPassword").val();
    const Gender = $("#signupGender").val();
    const newId = Math.floor(Math.random() * 1000) + 1;

    console.log(Gender);

    // Add new data to the array
    const newData = {
      Id: newId,
      Name: Name,
      Email: Email,
      Books: { Rent: [], Bought: [] },
      Password: Password,
      Gender: Gender,
    };

    allUsers.push(newData);

    // Update the localStorage
    localStorage.setItem("user_data", JSON.stringify(allUsers));

    // Clear the form and hide it
    $("#addNewForm")[0].reset();
    //   $("#addNewForm").hide();

    // Update the table
    maketableUsers();
  });

  maketableUsers();
});

function addData() {
  alert("Data added");
}

// For Books
