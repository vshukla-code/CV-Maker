function addNewWEField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder','Enter Here')
    
    let weOb = document.getElementById('we')
    let weAddButtonOb = document.getElementById("weAddButton")

    // weOb.insertBefore(newNode, weAddButtonOb)
    weOb.appendChild(newNode)
}


function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder','Enter Here')
    
    let weOb = document.getElementById('aq')
    let weAddButtonOb = document.getElementById("aqAddButton")

    // weOb.insertBefore(newNode, weAddButtonOb)
    weOb.appendChild(newNode)

}



// generate Cv 

function generateCV(){
    // console.log("GEnerate CV")

    // name 
    let namefield = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=namefield;
    // direct sorthand code 
    document.getElementById("nameT2").innerHTML=namefield;

    // contact 
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address 
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //facebook
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    //Instragram 
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    //LinkedIn 
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    //Objective 
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // work experiance 

    let wes = document.getElementsByClassName("weField")
    // console.log(wes)
    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Academic Qualification 
    let aqs = document.getElementsByClassName("eqField")
    
    let s="";
    for(let e of aqs){
         s=s+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=s;

    // code for setting image 

    let file = document.getElementById("imgField").files[0]
    let reader=new FileReader()
    reader.readAsDataURL(file)

    // set Image To Template 
    reader.onload=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }

    document.getElementById("cv-form").style.display='none'
    document.getElementById("cv-template").style.display='block'
}


function printCV(){
   window.print();
}

 // JavaScript to handle PDF download
 document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.getElementById('cv-template');  // Target content
    const options = {
      margin: 10,
      filename: 'mycv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate and download the PDF
    html2pdf().set(options).from(element).save();
  });