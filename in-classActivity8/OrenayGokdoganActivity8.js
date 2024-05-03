$(document).ready(function() {
    $("#birthday").datepicker();
  });
  

$(document).ready(function() {
    var langs = ["ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", 
                                                    "Perl", "Python", "C++"];
    $("#proglang").autocomplete({source: langs}); 
  });

