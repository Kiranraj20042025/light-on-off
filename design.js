var bulb = 0;

function findbulp()
{
    if(bulb==0)
    {
        document.getElementById("image").src="on bulp.jpeg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="off bulp.jpeg";
        bulb=0;
    }

}