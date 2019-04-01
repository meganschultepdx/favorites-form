var favorites_list = [];
var prompts = ["Favorite food?", "Favorite drink?", "Favorite animal?"];
var index = 0;
$(document).ready(function () {
  $("#SelectedThing").text(prompts[index]);

  $("#form-favorite").submit(function (event) {
    event.preventDefault();
    favorites_list.push($("#form-favoriteThing").val());
    $("#form-favoriteThing").val("");

    index++;
    $("#SelectedThing").text(prompts[index]);

    if (index > prompts.length - 1)
    {
      $("#questions").fadeOut(function () {
        $("#favorite-display-list").text(favorites_list.join());
        $("#answers").fadeIn();
      });

    }

  });
});
