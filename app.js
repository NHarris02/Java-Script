let friends = [ "Nick" , "Garrett" , "Cole" , "Parker" , "Kam" ]
for(i = 0;i<friends.length;i++){
for(index =99;index >0; index--){
    // console.log(index +"  lines of code in the file, " + index + " lines of code; John strikes one out, clears it all out,"+ (index - 1) + " lines of code in the file.")
if (index ==1){
    console.log(index +"  line of code in the file, " + index + " line of code; " + friends [i] + " strikes one out, clears it all out,"+ (index - 1) + " lines of code in the file.")
} else if(index>1){
 console.log(index +"  lines of code in the file, " + index + " lines of code; " + friends [i] +  " strikes one out, clears it all out,"+ (index - 1) + " lines of code in the file.")
} else {
    console.log(index +"  line of code in the file, " + index + " line of code; " + friends [i] + " strikes one out, clears it all out,"+ (index - 1) + " lines of code in the file.")
}}}