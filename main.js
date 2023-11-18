names_array=[];

function submit(){
    for(var j=1; j<=4; j++){
        var name= document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        names_array.push(name);
    }
    console.log(names_array);
    document.getElementById("display_name_with_commas").innerHTML= names_array;
    var remove_commas=names_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
    document.getElementById("submit_button").style.display="none";

   document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    names_array.sort();
    console.log(names_array);

    document.getElementById("display_name_with_commas").innerHTML= names_array;
    var remove_commas=names_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML= remove_commas;

}


