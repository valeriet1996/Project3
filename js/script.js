jQuery(document).ready(function(){
    $('#conversion-to-cent-calculator').on('submit', function(evt){
        evt.preventDefault();
        var $inch = $('#inch');
        var inch = $inch.val();
        var conversionChoiceValue=$("#conversion-choice").val();
        axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
         conversionValue=result.data[conversionChoiceValue];
        var total = parseFloat(inch*conversionValue);
        $('#total').html(total);
        console.log(total);
          
    });
});

         $('#conversion-to-inch-calculator').on('submit', function(evt){
        evt.preventDefault();
            var $cent = $('#cent');
            var cent = $cent.val();
            var conversionChoiceValue2=$("#conversion-choice2").val();
            axios.get('https://statenweb.mockable.io/conversions/').then(function(result){
             conversionValue2=result.data[conversionChoiceValue2];
            var total1 = parseFloat(cent*conversionValue2);
            $('#total1').html(total1);
            console.log(total1);

        });
    });
  
    
});