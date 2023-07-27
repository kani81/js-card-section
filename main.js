let item=[
    {
        id:1,
        img:"image/Lilium.jpg",
        title:"Lilium",
        content:"Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world.",
    },
    {
        id:2,
        img:"image/lotus.jpg",
        title:"lotus",
        content:"Lotus plants are adapted to grow in the flood plains of slow-moving rivers and delta areas. Stands of lotus drop hundreds of thousands of seeds every year to the bottom of the pond.which range in colour from white through various.",
    },
    {
        
            id:3,
            img:"image/hibiscus.jpg",
            title:"Hibicus",
            content:"Hibiscus is a colorful, flowering plant that can be made into extracts, teas, and supplements. Depending on the part of the plant you consume, the nutrients vary, but it may help lower blood pressure and have anticancer properties.",
        
    },
    {
        id:4,
        img:"image/jasmine.jpg",
        title:"Jasminie",
        content:"jasmine, (genus Jasminum ), also spelled jessamine, genus of about 200 species of fragrant-flowered shrubs and vines of the olive family ( Oleaceae ). The plants are native to tropical and to some temperate areas of the Old World.",
    },
   
];




var cardSection=document.getElementById("card-section");

var container=document.createElement("div");
container.classList.add("container");
cardSection.appendChild(container);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);

item.forEach(function(e){
var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
image.setAttribute("src",e.img);
card.appendChild(image);


var heading=document.createElement("h1");
card.appendChild(heading);
heading.innerHTML=e.title;


var cont=document.createElement("p");
card.appendChild(cont);
cont.innerHTML=e.content;

});