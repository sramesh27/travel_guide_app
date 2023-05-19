const root = window.location.origin;
const placesList = `${root}/pages/card_list pages/card_list page.html`;

const AfterLogin = `
<header>
  
<div class="header">
    <img src="${root}/assets/images/web logo.png" width="100" alt="logo" />
    <h3>TRAVEL GUIDE</h3>
</div>
<div class="search-bar">
    <input id="search" type="text" placeholder="Search what you are looking for?">
    <img class="icon"  src="${root}/assets/images/google-icon.png" height="20px" width="20px">
    <button type = "button" id = "search-icon"> </button>
</div>

<div class="navbar">
    <ul>
        <li class="nav"> <a href="${root}/index.html" class="navbar-1"> HOME</a></li>

        <li class="navigation__item">

                <div class="dropdown">
                    <P class="dropbtn">LIST OF PLACES</P>
                    <div class="dropdown-content">

                        <ul id = "cate_list"> 
                    
                        </ul>

                    </div>
                </div>

        </li>

        <li class="nav"> <a class="navbar-1" href="${root}/pages/index/about us.html"> ABOUT</a></li>
        <li class="nav"> <a class="navbar-1" href="${root}/pages/index/contact.html"> CONTACT</a></li> 
        <a href="${root}/pages/index/profile.html"><img class= "pro-pic" id="profile" src="${root}/assets/images/avatar_wordpress_website.png"  alt="logo" /></a>
        
    </ul>

</div>
</header>`;

const BeforeLogin = `
<header>
            
<div class="header">
    <img src="${root}/assets/images/web logo.png" width="100" alt="logo" />
    <h3>TRAVEL GUIDE</h3>
</div>
<div class="search-bar">
    <input id="search" type="text" placeholder="Search what you are looking for?">
    <img class="icon" src="${root}/assets/images/google-icon.png" height="20px" width="20px">
    <button type = "button" id = "search-icon"> </button>
</div>

<div class="navbar">
    <ul>
        <li class="nav"> <a href="${root}/index.html" class="navbar-1"> HOME</a></li>

        <li class="navigation__item">
            <a class="navigation__link" href="#">

                <div class="dropdown">
                    <P class="dropbtn">LIST OF PLACES</P>
                    <div class="dropdown-content">
                    <ul id = "cate_list"> 
                    
                    </ul> 

                    </div>
                </div>
            </a>
        </li>

        <li class="nav"> <a class="navbar-1" href="${root}/pages/index/about us.html"> ABOUT</a></li>
        <li classs="nav"> <a class="navbar-1" href="${root}/pages/index/login.html"> LOGIN</a></li>`;

const UniqueId1 = JSON.parse(localStorage.getItem("unique_id"));
console.log(UniqueId1);

if (UniqueId1) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const logout = document.querySelector("#logout");
  logout?.addEventListener("click", () => {
    localStorage.removeItem("unique_id");
    document.body.innerHTML = BeforeLogin;
  });
} else {
  document.body.insertAdjacentHTML("beforebegin", BeforeLogin);
  const logout = document.querySelector("#logout");
  logout?.removeEventListener(
    "click",
    () => (document.body.innerHTML = AfterLogin)
  );
  localStorage.removeItem("unique_id");
}

const localcategory = JSON.parse(localStorage.getItem("category_list"));
const categoryList = document.querySelector("#cate_list");

for (let i = 0; i < localcategory.length; i++) {
  const CtyLi = document.createElement("li");
  categoryList.append(CtyLi);

  const CtyA = document.createElement("a");
  CtyA.setAttribute("href", `${placesList}?place=${localcategory[i].category}`);
  CtyA.innerText = localcategory[i].category;
  CtyLi.append(CtyA);
}

// -----------------------------Search Filter----------------------------------------//
const PlaceCard = JSON.parse(localStorage.getItem("places"));
console.log(PlaceCard);

// let filteredCategory = PlaceCard.filter(e => e.category_name != "select");
// let filteredPlaceName = PlaceCard.filter(e => e.area != "select");
// let specificplace = PlaceCard.filter(e => e.place_name);

document.querySelector("#search-icon").addEventListener("click", (e) => {
  e.preventDefault();
  const search = document.getElementById("search").value;
  if (search !== "") {
    for (const card of PlaceCard) {
      if (search === card.category_name) {
        window.location.href = `${placesList}?category=${search}`;
      }
      if (search === card.area) {
        window.location.href = `${placesList}?place=${search}`;
      }
      if (search === card.place_name) {
        window.location.href = `${placesList}?place_name=${search}`;
      }
    }
  }
});
