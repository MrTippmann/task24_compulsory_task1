// code for leaving a comment

//Defining array of comments
let arrayOfComments = [];

//Function that checks if the page has been loaded before and gets the infomation that was insertered from the session storage
function myLoad() {

    let htmlSelect = document.getElementById("commentList");
    htmlSelect.style.visibility = "hidden";

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
       
        sessionStorage.setItem("commentEntries", JSON.stringify(arrayOfComments));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        arrayOfComments = JSON.parse(sessionStorage.getItem("commentEntries")); 
        let i = 0;

        // function that loops through each of the elements in the array and creates and inserts the elements into a drop down menu
        arrayOfComments.forEach(function(p) {

            let optItem = document.createElement("option");
            optItem.innerHTML = p.fullName;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
        }
    }
}

//constructor function that will be used to create all comments objects.
function Comments(fullName, comment) {
    this.fullName = fullName;
    this.comment = comment;
}
    
// function that adds the user inputted infomation into the array and then saves it to the session storage
function addComment() {
    arrayOfComments = JSON.parse(sessionStorage.getItem("commentEntries"));
    let newComment = new Comments(
        document.getElementById("fullName").value,
        document.getElementById("comment").value,
    );
    arrayOfComments.push(newComment);
    sessionStorage.setItem("commentEntries", JSON.stringify(arrayOfComments));
}

// function that displays the selected option from the drop down menu onto the page 
function displayComment(indexOfCommentsObj) {
    arrayOfComments[indexOfCommentsObj].bio = function() {

        let node = document.createElement("p");
        let textnode = document.createTextNode(

           "Person name: " + this.fullName + ". " +

           "Comment: " + this.comment + ". "
            );
            
        node.appendChild(textnode);
        document.getElementById("comments").appendChild(node);
    };
    arrayOfComments[indexOfCommentsObj].bio();
}

// end of code for leaving a comment

// jQuery code

// function that starts when the page is loaded
$(document).ready(function() {
    
    // dropdown 
    $('.card').hover(function() {
        let index = $(this).index();
        let currentCard = $('.card').eq(index);
        let currentBody = $(`.card:eq(${index}) .card-body`)
   
        if(currentCard.hasClass('active')) {
            currentBody.slideUp()
        } else {
            currentBody.slideDown();
        }
   
        currentCard.toggleClass('active');
   
       });

       $(".hide").click(function(e) {
        $(e.target).hide( "slow" );
    });

    // animatesthe fun button
      $(".animationButton").on({
        click: function(){
        $(".animationButton")
        .animate({width: "300px"})
    
            .animate({
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    marginLeft: "210px",
                    marginTop: "20px",
                    backgroundColor: 'green',
                    backgroundColor: 'purple'
                },
                15000,
            );
        }});

});


// functions to add the images to the saveForLaterPage
function saveForLaterIndex() {

    var DOM_img = document.createElement("img");
 DOM_img.src = "img/banner.jpg";

 document.getElementsByClassName("SaveForLater").appendChild(DOM_img);

}

function saveForLaterIndex() {

    var DOM_img = document.createElement("img");
 DOM_img.src = "img/banner.jpg";

 document.getElementsByClassName("SaveForLater").appendChild(DOM_img);

}