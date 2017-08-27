
function myFunction(type,parameterCode) {
  var c = document.createElement('CANVAS');
  c.style.width = 106;
  c.style.height = 20;


  var ctx = c.getContext("2d");

  if (type=="upc_a"){
    var upc_code =  parameterCode;
    var upcA_L_values = ["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"];
    var upcA_R_values = ["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"];
    var upcA_SPECIAL_lines = ["101","01010","101"];

    var string = "";
    string = string + upcA_SPECIAL_lines[0];
    for (var i = 0; i < 6; i++) {
      string = string + upcA_L_values[upc_code[i]];

    }
    string = string + upcA_SPECIAL_lines[1];
    for (var i = 6; i < 12; i++) {
      string = string + upcA_R_values[upc_code[i]];
    }

    string = string + upcA_SPECIAL_lines[2];
  }






  // if (type=="code128"){
  //   c.style.width = 300;
  //   var upc_code = "" +  parameterCode;
  //   var upc128_values = ["SP","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]"," ","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","DEL","FNC3","FNC2","SHIFT","CODE_C","FNC4","CODE_A","FNC1","START_A","START_B","START", "STOP"];
  //   var upc128_lines = ["11011001100","11001101100","11001100110","10010011000","10010001100","10001001100","10011001000","10011000100","10001100100","11001001000","11001000100","11000100100","10110011100","10011011100","10011001110","10111001100","10011101100","10011100110","11001110010","11001011100","11001001110","11011100100","11001110100","11101101110","11101001100","11100101100","11100100110","11101100100","11100110100","11100110010","11011011000","11011000110","11000110110","10100011000","10001011000","10001000110","10110001000","10001101000","10001100010","11010001000","11000101000","11000100010","10110111000","10110001110","10001101110","10111011000","10111000110","10001110110","11101110110","11010001110","11000101110","11011101000","11011100010","11011101110","11101011000","11101000110","11100010110","11101101000","11101100010","11100011010","11101111010","11001000010","11110001010","10100110000","10100001100","10010110000","10010000110","10000101100","10000100110","10110010000","10110000100","10011010000","10011000010","10000110100","10000110010","11000010010","11001010000","11110111010","11000010100","10001111010","10100111100","10010111100","10010011110","10111100100","10011110100","10011110010","11110100100","11110010100","11110010010","11011011110","11011110110","11110110110","10101111000","10100011110","10001011110","10111101000","10111100010","11110101000","11110100010","10111011110","10111101110","11101011110","11110101110","11010000100","11010010000","11010011100","1100011101011"];
  //   var string = "";
  //   string = string + upc128_lines[upc128_values.indexOf("START_A")];
  //   var checksum = 0;
  //
  //   for (var i = 0; i < upc_code.length; i++) {
  //     string = string + upc128_lines[upc128_values.indexOf(upc_code[i])];
  //     checksum = checksum + (upc128_values.indexOf(upc_code[i]) * (i+1));
  //   }
  //   checksum = checksum % 103;
  //   string = string + upc128_lines[checksum] + upc128_lines[upc128_values.indexOf("STOP")];
  // }
  //
  //
  //
  //
  // if (type=="upc_e"){
  //
  //   c.style.width = 55;
  //   var upc_code = "" +  parameterCode;
  //   var upcE_values = ["START","O_0","O_1","O_2","O_3","O_4","O_5","O_6","O_7","O_8","O_9","E_0","E_1","E_2","E_3","E_4","E_5","E_6","E_7","E_8","E_9","END"];
  //   var upcE_lines = ["101","0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011","0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111","010101"];
  //   var paritySystem = ["EEEOOO","EEOEOO","EEOOEO","EEOOOE","EOEEOO","EOOEEO","EOOOEE","EOEOEO","EOEOOE","EOOEOE","OOOEEE","OOEOEE","OEOOEE","EOOOEE","OOEEOE","OEEOOE","EEOOOE","OEOEOE","EOOEOE","EOEOOE"];
  //   var numberSystem = upc_code[0];
  //   var codelength = upc_code.length;
  //   var parity = 0;
  //   if (numberSystem == '0') {
  //     parity = paritySystem[upc_code[7]];
  //   }else{
  //     parity = paritySystem[upc_code[7]+10];
  //   }
  //
  //   var string = "";
  //   string = string + upcE_lines[upcE_values.indexOf("START")];
  //
  //   for (var i = 0; i < 6; i++) {
  //     string = string + upcE_lines[upcE_values.indexOf((parity[i]+"_"+upc_code[(i+1)]))]; //"" + parity[i] + "_" upc_code[i+1])
  //
  //
  //   }
  //
  //   string = string + upcE_lines[upcE_values.indexOf("END")];
  //
  // }





c.style.width = 106;
  ctx.strokeStyle = '#000000';
 for (var i = 0; i < string.length; i++) {
   if (string[i] == "1") {
     ctx.beginPath();
     ctx.moveTo(i+.5+10,0);
     ctx.lineTo(i+.5+10,20);
     ctx.stroke();

   }
 }
 c.style.width = 106;
 var pngUrl = c.toDataURL();
 //document.getElementById("img").src = pngUrl;
 //document.getElementById("special").innerHTML = pngUrl;
 //document.write(pngUrl);

 //c.outerHTML = "";
 delete c;
 pngUrl = pngUrl.replace(/\s+/g, ' ').trim();
 return  pngUrl;

}
