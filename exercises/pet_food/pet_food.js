function getDogFood(url) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
        let dogFood = JSON.parse(this.responseText);
        displayDogFood(dogFood, "dog-tbody");
    });
    loader.open("GET", url, true);
    loader.send();
}

function getCatFood(url) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
        let catFood = JSON.parse(this.responseText);
        displayCatFood(catFood, "cat-tbody");
    });
    loader.open("GET", url, true);
    loader.send();
}

function displayDogFood(dogFood, divId) {
    let div = document.getElementById(divId);
    let dogBrands = dogFood.dog_brands;
    dogBrands.forEach(brand => {
        brandTypes = brand.types;
        brandTypes.forEach(type => {
            typeVolumes = type.volumes;
            typeVolumes.forEach(volume => {
//                console.log(brand.name, typeVariation, volume);
                let tr = document.createElement("tr");
                let brandTr = document.createElement("td");
                brandTr.innerText = brand.name;
                let typeVarTr = document.createElement("td");
                typeVarTr.innerText = type.name;
                let qtyTr = document.createElement("td");
                qtyTr.innerText = volume.name;
                let priceTr = document.createElement("td");
                priceTr.innerText = volume.price;
                tr.appendChild(brandTr);
                tr.appendChild(typeVarTr);
                tr.appendChild(qtyTr);
                tr.appendChild(priceTr);
                div.appendChild(tr);
            });
        });
    });
}

function displayCatFood(catFood, divId) {
    let div = document.getElementById(divId);
    let dogBrands = catFood.cat_brands;
    dogBrands.forEach(brand => {
        brandTypes = brand.types;
        brandTypes.forEach(type => {
            typeVolumes = type.volumes;
            typeVolumes.forEach(volume => {
//                console.log(brand.name, typeVariation, volume);
                let tr = document.createElement("tr");
                let brandTr = document.createElement("td");
                brandTr.innerText = brand.name;
                let typeVarTr = document.createElement("td");
                typeVarTr.innerText = type.name;
                let qtyTr = document.createElement("td");
                qtyTr.innerText = volume.name;
                let priceTr = document.createElement("td");
                priceTr.innerText = volume.price;
                tr.appendChild(brandTr);
                tr.appendChild(typeVarTr);
                tr.appendChild(qtyTr);
                tr.appendChild(priceTr);
                div.appendChild(tr);
            });
        });
    });
}

getDogFood("dogs.json");
getCatFood("cats.json");