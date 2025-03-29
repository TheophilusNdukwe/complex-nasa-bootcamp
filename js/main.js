// JAVASCRIPT 


let key = 'd645488dfdd1b470b2ddeb7b9b332e08'
let url = `https://data.nasa.gov/resource/gvk9-iz74.json`



        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                console.log(element.center, element.city, element.state)

                   
                       
                fetch(`https://api.weatherxu.com/v1/weather?api_key=${key}&lat=${element.location.latitude}&lon=${element.location.longitude}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    let fahrenheit = (data.data.currently.temperature * 9 / 5) + 32
                    let ul = document.getElementById('list') // Get the ul element
                    let li = document.createElement('li') // Create a new li element
                    let text = document.createTextNode(` ${element.center} Location: ${element.city}, ${element.state} Temperature: ${fahrenheit}`) // Create a text node
                    li.appendChild(text) // Append the text node to the li
                    ul.appendChild(li)// Append the li to the ul  
            })
                
            });
            
        })
        .catch(err => {
            console.log(`error ${err}`)

        })


    