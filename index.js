let hexValues = []
    const Btn = document.getElementById('btn')
Btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const Option = document.getElementById('mode').value
    const Hex = document.getElementById('color-picker').value.slice(1,7)
    const some = Hex.toUpperCase() 
    fetch(`https://www.thecolorapi.com/scheme/?hex=${some}&mode=${Option}&count=${5}`)
    .then(res => res.json())
    .then(data =>  {
                document.getElementById('color-1').style.backgroundColor = data.colors[0].hex.value
                 document.getElementById('hex-1').textContent = data.colors[0].hex.value
                for(i=1;i< 5;i++){
                    document.getElementById(`color-${i+1}`).style.backgroundColor = data.colors[i].hex.value
                    document.getElementById(`hex-${i+1}`).textContent = data.colors[i].hex.value
                }
            })
             


// #000000
// ›#060607
// ›#0D0C0C
// ›#151212
// ›#1C1717



    
//         )





})