fetch("https://andreimihutoni.com/wp_bolig/wp-json/wp/v2/property")
    .then(res => res.json())
    .then(handleData)

function handleData(property) {
    property.forEach(showPost)


}

function showPost(property) {
    console.log(property)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);


    copy.querySelector("h2").innerHTML = property.address;
    copy.querySelector(".bed").innerHTML = property.bedrooms;
    copy.querySelector(".bath").innerHTML = property.bath;
    copy.querySelector(".feet").innerHTML = property.sq_feet;

//    copy.querySelector(".img_wrappper").img.src = property.guid.rendered;

//    copy.querySelector(".img_wrappper").img.src = propert.image.guid;





    document.querySelector("main").appendChild(copy);
}
