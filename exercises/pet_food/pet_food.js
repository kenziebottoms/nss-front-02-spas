function getPetFood(url) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
        let petFood = JSON.parse(this.responseText);
        display(petFood, "tbody");
    });
    loader.open("GET", url, true);
    loader.send();
}

function display(petFood, divId) {
    let div = document.getElementById(divId);
    let dogBrands = petFood.dog_brands;
    dogBrands.forEach(brand => {
        brandTypes = brand.types;
        brandTypes.forEach(type => {
            typeVariation = type.type;
            typeVolumes = type.volumes;
            typeVolumes.forEach(volume => {
//                console.log(brand.name, typeVariation, volume);
                let tr = document.createElement("tr");
                let brandTr = document.createElement("td");
                brandTr.innerText = brand.name;
                let typeVarTr = document.createElement("td");
                typeVarTr.innerText = typeVariation;
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

getPetFood("food.json");