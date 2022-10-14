let count=0
function increment()
{
    count +=1
    document.getElementById("no").innerText = count
}

function save()
{
    let saveEl=document.getElementById("store")
    saveEl.innerText +="-"+count

    count=0
    document.getElementById("no").innerText = count
    
}