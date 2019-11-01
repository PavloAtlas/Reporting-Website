
  document.getElementById("Articlecards").innerHTML =`
 <h4 class="Newscards-tittle">Article (${Articles.length} results)</h4>
 
 ${Articles.map(function(Atribute){
  return `
  <div class="Articlecard">
  <img class= "article_photo" src="${Atribute.photo}"></img>
  <h4> <a href="${Atribute.Link}">${Atribute.Title}</a><span class="label_date"> - ${Atribute.Date} </span></h4>
  
  <p class= "Description">${Atribute.Description}</p>

  </div>
  `
 }).join('')}





 <p class="footer">These ${Articles.length} were added recently. Check back for updates</p>`