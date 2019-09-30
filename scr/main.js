document.querySelector('#calculate').addEventListener('click', calculate);

function calculate() {
    const radius = parseFloat(document.querySelector('#radius').value);

    let circum = 2 * Math.PI * radius  

    if (isNaN(radius))
    {
        document.querySelector('#circumference').innerHTML = "Error. Input is not a number.";
    }
    else
    {
        document.querySelector('#circumference').innerHTML = circum.toFixed(4);
    }
    
};
