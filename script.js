var AC = {};
AC.paint = {
    interests: [
        {
            name: 'painting',
            text: 'paint',
            image: 'test.png'
        },
        {
            name: 'biking',
            text: 'explore Cleveland by bike',
            image: 'flowers.jpg'
        },
        {
            name: 'kyoto',
            text: 'design a makeshift kyoto coffee brewer',
            image: 'test.png'
        },
        {
            name: 'succulents',
            text: 'proprogate my succulents',
            image: 'test.png'
        },
        {
            name: 'artMuseum',
            text: 'stare at paintings at the cleveland Museum of art',
            image: 'test.png'
        },
        {
            name: 'read',
            text: 'read the new palahniuk novel',
            image: 'test.png'
        },
        {
            name: 'netflix',
            text: 'binge the latest netflix original',
            image: 'test.png'
        }
    ]
};

AC.canvas = {
    form:{
        interestText: document.getElementsByClassName('js_interest'),
        displayFrames: document.getElementsByClassName('js_frame')
    },
    interaction:{
        changeInterests: document.getElementsByClassName('js_changeInterest')
    }
};

console.log(AC.canvas);
AC.brush = function(canvas, paint){
    let interestIndex;
    Array.prototype.forEach.call(canvas.form.interestText, function(stroke, index, array){
        stroke.textContent = paint.interests[index].text;
        interestIndex = index;
    });
    Array.prototype.forEach.call(canvas.interaction.changeInterests, function(thought){
        thought.onclick = function(event){
            let group = this.getAttribute('data-attr-interest-group');
            for(var i = 0; i < canvas.form.interestText.length; i++){
                if (group === canvas.form.interestText[i].getAttribute('data-attr-interest-group')){
                    interestIndex = interestIndex + 1;
                    canvas.form.interestText[i].textContent = paint.interests[interestIndex].text;
                }
            }
        }
    });
}(AC.canvas, AC.paint);
