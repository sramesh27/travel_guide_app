const TypesOfCategory = [
  {
    name: "Beach",
    image: "assets/images/new-img1.jpg",
    a: "pages/card_list pages/card_list page.html",
  },
  {
    name: "Amusement-park",
    image: "assets/images/new-img6.jpeg",
    a: "pages/card_list pages/card_list page.html",
  },
  {
    name: "Malls",
    image: "assets/images/pvr.jpg",
    a: "pages/card_list pages/card_list page.html",
  },
  {
    name: "Aquarium ",
    image: "assets/images/img1.jpeg",
    a: "pages/card_list pages/card_list page.html",
  },
  {
    name: "Temples",
    image: "assets/images/Kapaleeswarar-temple.webp",
    a: "pages/card_list pages/card_list page.html",
  },
  {
    name: "Fun-rooms",
    image: "assets/images/new-img5.jpg",
    a: "pages/card_list pages/card_list page.html",
  },
];

const catetype = JSON.parse(localStorage.getItem("TypesOfCategory"));
if (!catetype) {
  localStorage.setItem("types_of_category", JSON.stringify(TypesOfCategory));
}
