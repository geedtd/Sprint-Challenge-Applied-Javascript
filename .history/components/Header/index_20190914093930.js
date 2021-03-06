// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const heading = document.createElement('h1');
    const temperature = document.createElement('span');

    var today = new Date();
    var timeFormat = { month:'long', day:'numeric', year:'numeric'};
    date.textContent = today.toLocaleDateString("en-US", options).toUpperCase();
    heading.textContent = "Lambda Times";
    temperature.textContent = "98°";

    //creating content structure
    
    heading.appendChild(date);
    heading.appendChild(heading)
    heading.appendChild(temperature);

    header
}
