
let hanyadiksor = 1
hanyadiksorString = "1"

$("#fogomb").click (()  => {

            let szoveg        = $("#inputMezo").val()

            hanyadiksor       = parseInt(hanyadiksor)+1
            hanyadiksorString = ` ${hanyadiksor} `
                let sorAzonosito  = `  sor${hanyadiksor} `
                let szinAzonosito = ` szin${hanyadiksor} `
                let rendAzonosito = ` rend${hanyadiksor} `
                let megnAzonosito = ` megn${hanyadiksor} `
                let jegyAzonosito = ` jegy${hanyadiksor} `
                let elorAzonosito = ` elor${hanyadiksor} `


            $("ul").append(` <li   class="sor"   id="sorAzonosito"   data-szamozo=hanyadiksorString   value="#inputMezo"  >
                                    ${szoveg}
                                    <button class="ikon">  <i class="fas fa-space-shuttle"></i>   </button>
                                    <button class="elor" id="elorAzonosito" >   Előrelépek  </button>
                                    <button class="jegy" id="jegyAzonosito" >   Jegyzet     </button>
                                    <button class="megn" id="megnAzonosito" >   Megnevezés  </button>
                                    <button class="rend" id="rendAzonosito" >   Sorrend     </button>
                                    <button class="szin" id="szinAzonosito"    data-szamozo=hanyadiksorString    >   Szín        </button>

                             </li>
            `)
}
)



/* ?
// Greenfox séma alapján, de ez nem működik. Miért??????????????????????????????????????????????????????????????????????

$(".sor").on(    "click", ".elor", (Event) =>  {
            $(Event.currentTarget).text("This button was clicked.............................................")
}
)
*/




// Csak a HTML-ből származó li-kattintását érzékeli. Miért???????????????????????????????????
// Csak a szövegre kattintok. (+ Simán az összes li-t figyelem.)
$("li").click(() => {
$("li").css ("color", "red")
}
)





/* ?
// Csak a HTML-ből származó li-hez tartozó .szin class-ú button kattintást érzékeli. Miért???????????????????????????????????
// Itt a szin buttonra kattintok.    
melyikreKattintott=0
$(".szin").click((event) => {
    melyikreKattintott = $(event.currentTarget).attr("data-szamozo")       //pl. 2
    melyikreKattintott = ` sor${melyikreKattintott} `                     //pl. "szin2"
    $("#melyikreKattintott").css("color", "red")
}
)
*/

































/*
data-index módszerrel. Mitől fog működni? ???????????????????????????????????????????????????
JS:
                                                        //változók: hanyadiksor, szoveg, szinvaltozasItt //
                                                        //Attributum: data-index //
let hanyadiksor=1

$("#fogomb").click (()  => {
            let szoveg = $("#inputMezo").val()
            hanyadiksor= parseInt(hanyadiksor)+1
    $("ul").append(` <li  class="listaelem" data-index="${hanyadiksor}">
                     ${szoveg}
                     </li>    
    `)
}
)

                                                        //???????????????????????????????? Ez a 3 következő sor mitől működne? Ezzel színezném pirosra azt a sort, amire rákattintottunk. 
$("li").click((event) => {
    let szinvaltozasItt = $(event.currentTarget).attr("data-index")
    $("  li[data-index=`${szinvaltozasItt}`]  ").css("color","red")

}
)


HTML:
Itt a html-nek az ul része így néz ki:
<ul>
    <li class="listaelem" data-index="1" value=By milk>    By milk   </li>
</ul>

*/





/* Jegyzetem:
                                                        // console.log(    $("li").text()   )         * Megnézi, mi az li-k tartalma az üres zárójelnél. console.log(....)-lel még ki is írja a consolba. //
                                                        // console.log(    $("li").html()   )         * Itt csak a html-ben levő li szövegét írja ki. //
                                                        // console.log(    $("li").text("amit ide Írok idézőjelbe, azt teszi be li szövegnek a korábbi szöveg helyett, minden li-nél")   )  
                                                        // console.log(    $("li").html("amit ide Írok idézőjelbe, azt teszi be li szövegnek a korábbi szöveg helyett, minden li-nél")   )  
                                                        //                                            * Így is létre lehet hozni 1-2 html Element. //
*/






