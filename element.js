
var project_list_length = $(".mini-repo-list-item.css-truncate").length;
var project_count = 0;
var lang_data = {};
var sum = 0;

$(".contributions-tab").prepend("<div class='project_element'></div>");

for ( x = 0; x < project_list_length; x++ ){
  $.ajax({
    url: $(".mini-repo-list-item.css-truncate")[x].href,
    type: "GET",
    success: function(response){
      var length = $(".repository-lang-stats-numbers li a", response).length;
      for ( i = 0; i < length; i++ ){
        var target = $(".repository-lang-stats-numbers li a", response);
        var content = target[i].innerText.split(" ");
        if (lang_data[content[32]] == undefined ){
          lang_data[content[32]] = parseFloat(content[48].replace("%",""));
        }else{
          lang_data[content[32]] = lang_data[content[32]] + parseFloat(content[48].replace("%",""));
        }
        sum += Math.round(parseFloat(content[48].replace("%","")));
      }
    },
    dataType: "html"
  });
}

setTimeout(function(){
  for (value in lang_data){
    $(".project_element").append(
      "<span>"+
      value + ": " + ((lang_data[value] / sum)*100).toFixed(1) +
      " </span>"
    );
  }
}, 1000);