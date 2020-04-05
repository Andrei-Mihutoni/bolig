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


    copy.querySelector("h2").innerHTML = property.title.rendered;
    copy.querySelector(".body").innerHTML = property.content.rendered;



    document.querySelector("main").appendChild(copy);
}
