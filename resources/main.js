/*** Object Constructors ***/

function MapleApplePecan() {
  this.indexRoll = 0;
  this.name = "Maple Apple Pecan";
  this.image = "resources//images//apple_pecan.jpg";
  this.type = "Maple";
  this.desc = "All the wonderful sweetness of apple pecan pie wrapped up into a single bun! Perfect for brunches and dessert.";
  this.packageSelect = null;
}

function Bacon() {
  this.indexRoll = 1;
  this.name = "The Bacon Bun";
  this.image = "resources//images//bacon.jpg";
  this.type = "Bacon";
  this.desc = "Buns wrapped with salty bacon. One of our more substantial rolls not to be missed for breakfast or lunch!";
  this.packageSelect = null;
}

function Walnut() {
  this.indexRoll = 2;
  this.name = "The Walnut Bun";
  this.image = "resources//images//walnut.jpg";
  this.type = "Walnut";
  this.desc = "Rich, caramelized walnut buns for your pleasure. Filled with a caramelized swirl and topped with candied walnuts.";
  this.packageSelect = null;
}

function GlutenFree() {
  this.indexRoll = 3;
  this.name = "The Gluten Free Bun";
  this.image = "resources//images//glutenfree.jpg";
  this.type = "GlutenFree";
  this.desc = "Gluten-free cinnamon buns for all to enjoy.";
  this.packageSelect = null;
}

function Original() {
  this.indexRoll = 4;
  this.name = "The Original Cinnamon Bun";
  this.image = "resources//images//original.jpg";
  this.type = "Original";
  this.desc = "Bun Bun's original cinnamon bun! Cannot be missed and only one of its kind.";
  this.packageSelect = null;
}

function Vegan() {
  this.indexRoll = 5;
  this.name = "The Original Vegan Bun";
  this.image = "resources//images//vegan.jpg";
  this.type = "Vegan";
  this.desc = "Dairy and egg-free buns for our vegan friends. Taste as delicious as the original, ask us for our one-of-a-kind recipe!";
  this.packageSelect = null;
}

function Pumpkin() {
  this.indexRoll = 6;
  this.name = "The Pumpkin Spice Bun";
  this.image = "resources//images//pumpkin.jpg";
  this.type = "Pumpkin";
  this.desc = "Get in the autumn spirit with pumpkin! Your Thanksgiving will not be complete without them.";
  this.packageSelect = null;
}

function Pecan() {
  this.indexRoll = 7;
  this.name = "The Caramel Pecan Roll";
  this.image = "resources//images//pecan.jpg";
  this.type = "Pecan";
  this.desc = "Sweet and crunchy pecan buns filled with caramel swirl and topped with caramel and pecans.";
  this.packageSelect = null;
}

function Carrot() {
  this.indexRoll = 8;
  this.name = "The Carrot Cake Bun";
  this.image = "resources//images//carrot.jpg";
  this.type = "Carrot";
  this.desc = "Rich carrot cake bun topped with cream cheese frosting, carrot shreds and coconut";
  this.packageSelect = null;
}

function Buttermilk() {
  this.indexRoll = 9;
  this.name = "Old-Fashion Buttermilk Bun";
  this.image = "resources//images//buttermilk.jpg";
  this.type = "Buttermilk";
  this.desc = "Buttermilk bisbuit buns are an old-time favorite  from grandma's unique recipe.";
  this.packageSelect = null;
}

function Strawberry() {
  this.indexRoll = 10;
  this.name = "The Strawberry Rhubarb Bun";
  this.image = "resources//images//strawberry.jpg";
  this.type = "Strawberry";
  this.desc = "Strawberry buns are filled with fruit filling made from fresh strawberries. Topped with a cream cheese glaze.";
  this.packageSelect = null;
}

function Birthday() {
  this.indexRoll = 11;
  this.name = "The Birthday Cake Bun";
  this.image = "resources//images//birthday.jpg";
  this.type = "Birthday";
  this.desc = "Birthday cake buns are perfect for your next birthday celebration! Made with birthday cake batter and decorated with rainbow sprinkles.";
  this.packageSelect = null;
}

function Lemon() {
  this.indexRoll = 12;
  this.name = "The Lemon Lavender Bun";
  this.image = "resources//images//lemon.jpg";
  this.type = "Lemon";
  this.desc = "Switch it up from classic cinnamon with these Lemon Lavender Rolls. The sticky lemon filling will satisfy you for breakfast or dessert anytime.";
  this.packageSelect = null;
}

function Cranberry() {
  this.indexRoll = 13;
  this.name = "The Cranberry Bun";
  this.image = "resources//images//cranberry.jpg";
  this.type = "Cranberry";
  this.desc = "Cranberry buns are perfect for breakfast brunches, Thanksgiving, Christmas, and falltime generally. Topped with a cream cheese glaze.";
  this.packageSelect = null;
}

function Blackberry() {
  this.indexRoll = 14;
  this.name = "The Blackberry Bun";
  this.image = "resources//images//blackberry.jpg";
  this.type = "Blackberry";
  this.desc = "Delicious rolls made with fresh blackberries. Try our own specialty blackberry filling and topped with cream cheese glaze.";
  this.packageSelect = null;
}


/*** Global VARIABLES ***/

var rolls = [
  new MapleApplePecan(),
  new Bacon(),
  new Walnut(),
  new GlutenFree(),
  new Original(),
  new Vegan(),
  new Pumpkin(),
  new Pecan(),
  new Carrot(),
  new Buttermilk(),
  new Strawberry(),
  new Birthday(),
  new Lemon(),
  new Cranberry(),
  new Blackberry(),
  ];


var names = [
  "Maple Apple Pecan Bun",
  "The Bacon Bun",
  "The Walnut Bun",
  "The Gluten Free Bun",
  "The Original Cinnamon Bun",
  "The Original Vegan Bun",
  "The Pumpkin Spice Bun",
  "The Caramel Pecan Bun",
  "The Carrot Cake Bun",
  "Old-Fashioned Buttermilk Bun",
  "The Strawberry Rhubarb Bun",
  "The Birthday Cake Bun",
  "The Lemon Lavender Bun",
  "The Cranberry Bun",
  "The Blackberry Bun"
  ];

var packTypes = [
    "Individual",
    "Six-Pack",
    "Twelve-Pack"
    ];


/*** Functions ***/
/////////////////////////////////////////////
//SHOPPING CART FUNCTIONS

function addToCart() {
        alert('This item has been added to your cart!');
    }

function removeFromCart() {
        alert('This item has been removed from your cart!');
    }


//////////////////////////////////////////////
/*** DOCUMENT LOAD ****/
$(document).ready(function() {

  $(document).on("click", ".productSelect", function() {
     var index = ($(this).data("id"))
     var roll = rolls[index];
     localStorage.setItem("savedRoll", JSON.stringify(roll));
  } )

  // Render roll when the document opens
  var roll = JSON.parse(localStorage.getItem("savedRoll"));
  renderRoll();


/////////////////////////////////////////////////
  //update the page based on the roll properties
  //this is where the text is set dynamically
  //#flavorSelection is the id for mydropdown1

$(document).on("change", "#flavorSelection", function() {
    var selected = $(this).children("option:selected").val();
    //console.log(selected);
    var selectedRoll = rolls.find(function(roll) {
      return roll.type === selected;
    } )
    localStorage.setItem("savedRoll", JSON.stringify(selectedRoll));
    renderRoll();
  })


function renderRoll() {
    var roll = JSON.parse(localStorage.getItem("savedRoll"));
    $("#roll-name").text(roll.name);
    $("#roll-img").attr("src", roll.image);
    $("#roll-speak").text(roll.desc);
    }

    //packSelection_number is the id for myddropdown2
    //packSelection_type1 is the id for mydropdown3
    //packSelection_type2 is the id for mydropdown4
    //quantityField is the id for quantity within the package

$(document).ready( function() {
    $('#addToCartButton').click(function(){
      var mainRoll = $("#flavorSelection").children("option:selected").val();
      var mainRollImg = document.getElementById("roll-img").src;
      console.log(mainRollImg);

      var packNumber = $("#packSelection_number").children("option:selected").val();
      var packType1 = $("#packSelection_type1").children("option:selected").val();
      var packType2 = $("#packSelection_type2").children("option:selected").val();
      var quantity = $("#quantityField").val();

      var rollArray =[];
      var rollImgArray = [];
      var packNumberArray = [];
      var packType1Array = [];
      var packType2Array = [];
      var quantityArray = [];

      var savedPackage = {mainRoll, mainRollImg, packNumber, packType1, packType2, quantity};
      var packageSelected = JSON.parse(localStorage.getItem("savedPackage")) || [];

      packageSelected.push(savedPackage);
      localStorage.setItem("savedPackage", JSON.stringify(packageSelected));
      console.log("This is savedPackage" + " " +localStorage.getItem("savedPackage"));
      })
  })

  function addToCart() {
       rollArray.push(document.getElementById("mainRoll").value);
       rollImgArray.push(document.getElementById("mainRollImg").value);
       packNumberArray.push(document.getElementById("packNumber").value);
       packType1Array.push(document.getElementById("packType1").value);
       packType2Array.push(document.getElementById("packType2").value);
       quantityArray.push(document.getElementById("quantityArray").value);
      }


$(document).ready(function(){
    var packageSelected = JSON.parse(localStorage.getItem("savedPackage")) || [];
    console.log("This is packageSelected in Cart" + " " +localStorage.getItem("savedPackage"))

    var results = [];
    for(var i = 0; i < packageSelected.length; i++) {
        var clone = $("#selectedItem").clone();
        var item = packageSelected[i];

        console.log(item)

        clone.find("#roll-name").html(item.mainRoll);
        clone.find("#roll-img").attr("src", item.mainRollImg);
        clone.find("#pack-number").html(item.packNumber);
        clone.find("#pack-type1").html(item.packType1);
        clone.find("#pack-type2").html(item.packType2);
        clone.find("#quantity").val(item.quantity);

      results.push(clone)
    }
  $(".items").html(results);
  })
})

/*
//for the remove button
$(document).ready(function(){
    $("#removeButton").click(function(){
    $(this).parent().parent().remove();
    console.log("Deleting Cinnamon");

      })
    })
*/

////////////////////////////////////////////
//Delete the whole generated cinnamon roll//
////////////////////////////////////////////
$(document).ready(function(){
      $(document).on("click", "#removeButton", function() {
        $(this).parent().parent().remove();
      });
});

//$('#addToCartButton').click(function(){

//location.reload();


/*
  var hasSavedRoll = false;
  if (roll === null) {
    $("#button-storage").text("Save Selection");
    roll = generateRandomRoll();
  } else {
    $("#button-storage").text("Clear Selection");
    hasSavedRoll = true;
  }


  $("#button-storage").click(function() {
    if (hasSavedRoll) {
      // clear the animal from the browser
      localStorage.removeItem("savedRoll");
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    } else {
      // save the animal to the browser
      localStorage.setItem("savedRoll", JSON.stringify(roll));
      // if this button was clicked, hide button and show feedback
      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");
    }


  $("#add-item").click(function() { // bind handler for click event
        var list = $("#shopping-list"); // get the ol list by id
        var itemInput = $("#new-list-item"); // get the new item input
    // append the input value within an li element
        list.append("<li>" + itemInput.val() + "</li>");
    });

  })
})
*/
