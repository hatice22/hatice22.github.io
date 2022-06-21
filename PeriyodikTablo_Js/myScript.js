
const lisize = document.body.getElementsByTagName("ul");

for(let x = 0; x < lisize.length; x++)
{
    if( lisize[x].childNodes[5].innerHTML.length > 8 )
    {
       
        lisize[x].childNodes[5].style.fontSize ="6px";
    }
    

}



function getir(value,clsname)
{
    let result = "";
    if(value == "He")
        {
            result = "soygazlar";
        }
    else if(value == "H")
        { 
            result="ametaller";
        }
    else
        {
            result = clsname.substring(9);/* class adını parçalayıp renleri aldığımız class çekiyoruz */ 
        }
 
    let belement=document.getElementById("demo");

    let element=document.getElementById(value);

    belement.innerHTML=element.innerHTML;/* maddelerin içeriğini demo ya atıyoruz */

    belement.className =result + " maddelerbg"; /* demonun classını tanımlıyoruz  */

    belement.getElementsByTagName("ul")[0].childNodes[5].style.fontSize="29px"; /*harf sayısı fazla olan element adlarını burda demo için biçimlendiriyoruz */  
    element.classList.add("onmousemove");
    element.addEventListener("mouseout", mouseOut);
        
        function mouseOut()
        {
            element.classList.remove("onmousemove");

        }
    
}



function wmetal(value)
{
    const tuslar = document.getElementsByTagName("button");
        
        document.getElementById("orta").innerHTML=value[0].toUpperCase() + value.substring(1);
        let txt="";

        for(let x of tuslar)
        {
            
            let txt = x.className.split(" ")[1]; /* dark moda geçince 3 class geliyor ve bize 2.class lazım her zaman */
            
            if( (txt != value || txt == "" ) &&  x.id != "ücbos" && x.id != "button" )
            {
            
                document.getElementById(x.id).style.opacity="0.2";
                document.getElementById(value).addEventListener("mouseout", mouseOut2);
            
                function mouseOut2()
                {
                    document.getElementById(x.id).style.opacity="1";
                    document.getElementById("orta").innerHTML="Periyodik Tablo";

                }
                
            }
    
        }

}



function dark(value)
{
    let dark1 = document.getElementById("button");

    if (value == 1)
        {
                
                dark1.name=0;
                let clr="#3d5263";
                document.body.style.backgroundColor =clr;
                document.getElementById("bos").style.backgroundColor = clr;
                document.getElementById("bos").style.borderColor = clr;
                document.getElementById("li").style.color = clr;
                document.getElementById("main").style.borderColor = clr; 
                document.getElementById("aside1").style.borderColor = clr;
                document.getElementById("aside2").style.borderColor = clr;
                document.getElementById("mode").style.backgroundColor="white";
                document.getElementById("mode").style.color="black";
                document.getElementById("ol").style.color="white";
                document.getElementById("button").style.float="right";
                document.getElementById("but").innerHTML="Light Mode";
                const mad = document.getElementsByClassName("maddeler gecismetalleri");
                    for(let x of mad)
                    {
                    
                        x.classList.add("gecismetalleridark");
                        document.getElementById("aside3").className="gecismetalleridark box";
                    }

                const mad1=document.getElementsByClassName("maddeler ametaller");
                    for(let x of mad1)
                    {
                        x.classList.add("ametallerdark");
                        document.getElementById("aside5").className="ametallerdark box";
                    }
                const mad2=document.getElementsByClassName("maddeler metaller");
                for(let x of mad2)
                    {
                        x.classList.add("metallerdark");
                        document.getElementById("aside4").className="metallerdark box";
                    }
                
                
        }

    else
        {
                
                dark1.name=1;
                document.body.style.backgroundColor = "white";
                document.getElementById("bos").style.backgroundColor = "white";
                document.getElementById("bos").style.borderColor = "white";
                document.getElementById("li").style.color = "white";
                document.getElementById("main").style.borderColor="white";
                document.getElementById("aside1").style.borderColor = "white";
                document.getElementById("aside2").style.borderColor = "white";
                document.getElementById("mode").style.backgroundColor="#192229";
                document.getElementById("mode").style.color="white";
                document.getElementById("ol").style.color="black";
                document.getElementById("button").style.float="left";
                document.getElementById("but").innerHTML="Dark Mode";
                const mad = document.getElementsByClassName("maddeler gecismetalleri");
                for(let x of mad)
                    {
                    
                        x.classList.remove("gecismetalleridark");
                        document.getElementById("aside3").className="gecismetalleri box";
                    }
                const mad1=document.getElementsByClassName("maddeler ametaller");
                for(let x of mad1)
                    {
                        x.classList.remove("ametallerdark");
                        document.getElementById("aside5").className="ametaller box";
                        
                    }
                const mad2=document.getElementsByClassName("maddeler metaller");
                for(let x of mad2)
                    {
                        x.classList.remove("metallerdark");
                        document.getElementById("aside4").className="metaller box";
                    }
              
                
        }
        
  

}






















