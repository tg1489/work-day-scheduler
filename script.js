
$(function () {
  $('button').click(function(e) {
    let textEl = $(this).prev(); // Gets the textarea element
    let thisValue = textEl.val(); // Gets the textarea value
    if (thisValue==='') return; // If the textarea is empty, don't save anything.
    let parentID = $(this.parentNode).attr('id'); //Gets parent id of button (The Div)
    let thisKey = parentID;
    localStorage.setItem(thisKey, thisValue); // Saves to local storage     
})

  let currentTime = dayjs().format('H');
  let numbers = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // Use numbers to match with id and choose what class to add from there with ternary operator
  numbers.map((e)=> {
    let addClass = e == currentTime?'present':(e < currentTime?'past':'future');
    $(`#hour-${e}`).addClass(addClass)
 
  //while updating the class, we can check if there is a localStorage with 
  //the key that matches our id and add that into the textarea.
  if (localStorage.getItem(e)) {
    $(`#hour-${e}>textarea`).val(localStorage.getItem(e))
  }
  
})


  $('#currentDay').html(dayjs().format('MMMM DD, YYYY H:mm'))
});
