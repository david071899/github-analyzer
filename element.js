

$(".vcard-fullname")[0].setAttribute("style", "display: flex;");
$(".vcard-fullname").append(
  "<div class='project_element main_btn'>"+
    "<img src='https://i.imgur.com/qmZTTx6.png' class='icon'>"+
    "<div class='content'>"+
      "<div class='triangle'></div>"+
      "<div v-for='language in lang_data'>{{ language.language }} : {{language.percentage}}</div>"+
    "</div>"+
  "</div>"
  );

$(".icon")[0].onclick = function(){
  $(".content").toggle();
};

var vm = new Vue({
  el: ".content",
  data: {
    lang_data: []
  }
});


var user_id = $(".vcard-username")[0].textContent;

$.get("https://api.github.com/users/" + user_id + "/repos")
  .done(function(response){
    var lang_data = response.map(function(obj){
                      if(obj.fork === false) return obj.language;
                    });

    // del undefined element
    lang_data = lang_data.filter(function(n){ return n != undefined });

    var target = new Githuber(user_id, lang_data);
    vm.$data.lang_data = (target.CountPercentage());

  });


// var lang_data = [];

// $(".icon")[0].onclick = function(){
//   $(".content").toggle();
// };


// function count_percentage(lang_data) {

//   // count element
//   var counts = {}; 
//   for(var i = 0; i< lang_data.length; i++) {
//       var num = lang_data[i];
//       counts[num] = counts[num] ? counts[num]+1 : 1;
//   }

//   var amount = lang_data.length;

//   // count percentage
//   Object.keys(counts).forEach(function(key){
//     var lang = {};
//     lang["language"] = key;
//     lang["percentage"] = (parseFloat(counts[key] / amount)*100).toFixed(1);
//     vm.$data.lang_data.push(lang);
//   });
// }

// $.get("https://api.github.com/users/" + user_id + "/repos")
//   .done(function(response){
//     var lang_data = response.map(function(obj){
//                       if(obj.fork === false) return obj.language;
//                     });

//     // unique array
//     lang_data = lang_data.filter(function(n){ return n != undefined });

//     console.log(typeof lang_data);
//     count_percentage(lang_data);

//   });
