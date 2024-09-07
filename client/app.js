function getBathValue(){
    var uiBath=document.getElementsByName('uiBathrooms')[0];
    return uiBath.selectedIndex + 1;
}

function getBHKValue(){
    var uiBHK=document.getElementsByName('uiBHK')[0];
    return uiBHK.selectedIndex + 1;

}


function estimatePrice(){
    console.log("Estimated price clicked")
    var sqft=document.getElementById('area')
    var bhk=getBHKValue();
    var bathrooms=getBathValue();
    var location=document.getElementById('uilocations');
    var res=document.getElementById('result');

    var url="http://127.0.0.1:8080/predict_home_price";

    // var url="/api/predict_home_price";

    $.post(url,{
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status){
        console.log(data.estimated_price);
        res.value="Rs."+ data.estimated_price.toString() + " Lakh";
        console.log(status);
    })
}


function onPageLoad(){
    console.log('document loaded');
    var url="http://127.0.0.1:8080/get_location_names";

    // var url="api/get_location_names";
    $.get(url,function(data,status){
        console.log("got response for get_location_names request")

        if(data){
            var locations=data.locations;
            var uilocations=document.getElementById('uiLocations');
            $('uilocations').empty();
            
            for(var i in locations){
              var opt=new Option(locations[i]);
              $('#uilocations').append(opt);
        } 
             
              }
    });
}

window.omload =onPageLoad;