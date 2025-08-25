let SeatAvailable = document.getElementById('seatAvailable');
let AboveAge50 = document.getElementById('ageAbove50');
let AdhaarAvailable = document.getElementById('hasAadhar');
let Status = document.getElementById('status');
let checkButton = document.getElementById('checkstatus');
let Status1 = document.getElementById('status1');


checkButton.addEventListener("click",function() {
    let IsSeatAvailable = SeatAvailable.checked;
    let IsAgeAbove50 = AboveAge50.checked;
    let IsAdhaarAvailable = AdhaarAvailable.checked;
    
    if(IsSeatAvailable == true){
        Status.innerHTML = "Is your age above 50?";

        if(IsAgeAbove50 == true){
            Status.innerHTML = "Do you have an aadhar card??";
            if(IsAdhaarAvailable == true){
                Status.innerHTML = "Please have your Seat Sir!!"
            }
          
        }
        // else{
        //     Status.innerHTML = "Seat is not available sir."
        // }

    }
    else{
        Status.innerHTML = "Seat is not available sir."
    }
})