
/**
 * 
 * will display the div with id id_div
 * 
 * @param {
 * } id_div 
 */

function displayDivOption(id_div) {

   document.getElementById(id_div).style.display="block"; 
    
 }

/**
 * 
 * hide option by setting the div attribute to none
 *  */ 
 function hideDivOption(id_div){
    document.getElementById(id_div).style.display="none";
   
 }

/**
 * Loop through the seclect menu values and hide all selected options when the page loads
 */
 function hideAllDivTags(){
     
     var selectOpti = document.getElementById("optin");

     for (var i=0; i<=selectOpti.options.length -1; i++)
     {
        hideDivOption(selectOpti.options[i].value); // hide every element found
     }
 }

/**
 * 
 * call both methods above, the id will be retrieved from this.options.selectedIndex].value when we call this method in html file
 * 
 * @param {*} id_option 
 */
 function selectedOption(id_option){

    hideAllDivTags();
    displayDivOption(id_option);
 }


 

