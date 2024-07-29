const Books = [
  { Name: "The Great Gatsby", Price: 14.99 },
  { Name: "To Kill a Mockingbird", Price: 12.49 },
  { Name: "1984", Price: 10.99 },
  { Name: "The Catcher in the Rye", Price: 10.99 },
  {
    Name: "Harry Potter and the Sorcerer's Stone",
    Price: 19.99,
  },
  { Name: "The Hobbit", Price: 15.99 },
  { Name: "Pride and Prejudice", Price: 9.99 },
  { Name: "The Lord of the Rings", Price: 29.99 },
  { Name: "The Da Vinci Code", Price: 13.49 },
  { Name: "The Hunger Games", Price: 14.99 },
];

localStorage.setItem("Books", JSON.stringify(Books));

$(document).ready(function () {
  let allBooks = JSON.parse(localStorage.getItem("Books")) || [];
  console.log(allBooks);

  function maketableBooks() {
    const datatable = $("#dataTable");
    datatable.empty();

    datatable.append(`
    <thead>
    <tr>

      <th>Name of Book</th>
      
      <th>Price</th>
      <th>Edit option</th>
      <th>Delete option</th>
    </tr>
  </thead>`);

    allBooks.forEach((product) => {
      datatable.append(`<tr>
      <td> ${product.Name} </td>
      <td> ${product.Price} </td>
      <td><button class="deleteBtn btn btn-danger" data-id="${product.Name}">Delete</button></td>
      <td><a href="editBooks.html?name=${product.Name}" class="btn btn-primary">Edit</a></td>


      <br>
  
      
      `);
    });
  }

  $(document).on("click", ".deleteBtn", function () {
    const indexm = $(this).data("id");
    console.log(indexm);
    console.log(allBooks);
    allBooks = allBooks.filter((product) => product.Name !== String(indexm));
    // console.log(Manan);

    // Update the localStorage
    localStorage.setItem("Books", JSON.stringify(allBooks));

    // Update the table
    maketableBooks();
  });

  // Event listener for the log ID buttons
  $(document).on("click", ".EditBtn", function () {
    var productId = $(this).data("id");
    console.log("Clicked Log ID button for product id: " + productId);
  });

  $("#showFormBtn").on("click", function () {
    $("#addNewForm").show();
  });

  $("#addNewForm").on("submit", function (event) {
    event.preventDefault();

    // Collect values from the form
    const Name = $("#new-Name").val();
    const Price = $("#new-Price").val();
    // const price = $("#new-price").val();

    // const images = [];
    // const files = $(".image-input")[0].files;

    // Function to add new data to the array
    // Generate a random ID
    const newId = Math.floor(Math.random() * 1000) + 1;

    // Add new data to the array
    const newData = {
      Id: newId,
      Name: Name,
      Price: Price,
      Rent: 0,
      Bought: 0,
    };

    allBooks.push(newData);

    // Update the localStorage
    localStorage.setItem("Books", JSON.stringify(allBooks));

    // Clear the form and hide it
    $("#addNewForm")[0].reset();
    //   $("#addNewForm").hide();

    // Update the table
    maketableBooks();
  });

  maketableBooks();
});

function addData() {
  alert("Data added");
}

// For Books
