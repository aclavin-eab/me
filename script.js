var AC = {};
AC.paint = {
    interests: [
        {
            name: 'painting',
            text: 'painting',
            image: 'paintbrush.jpg'
        },
        {
            name: 'biking',
            text: 'exploring Cleveland by bike',
            image: 'bike.jpg'
        },
        {
            name: 'skyline',
            text: 'staring out the window at downtown Cleveland',
            image: 'skyline.jpg'
        },
        {
            name: 'coffee',
            text: 'making coffee',
            image: 'face.png'
        },
        {
            name: 'kyoto',
            text: 'designing a makeshift Kyoto coffee brewer',
            image: 'flowers.jpg'
        },
        {
            name: 'succulents',
            text: 'trying to propogate succulents',
            image: 'succulents.jpg'
        },
        {
            name: 'french',
            text: 'trying to learn french',
            image: 'test.png'
        },
        {
            name: 'cavs',
            text: 'watching the cavs',
            image: 'paisley.png'
        },
        {
            name: 'kyrie',
            text: 'missing Kyrie',
            image: 'test.png'
        },
        {
            name: 'sushi',
            text: 'eating sushi',
            image: 'test.png'
        },
        {
            name: 'running',
            text: 'running',
            image: 'test.png'
        },
        {
            name: 'piano',
            text: 'playing piano',
            image: 'test.png'
        },
        {
            name: 'pickles',
            text: 'pickling vegetables',
            image: 'test.png'
        },
        {
            name: 'meditating',
            text: 'meditating',
            image: 'test.png'
        },
        {
            name: 'vox',
            text: 'binging Vox and Ted-Ed videos',
            image: 'test.png'
        },
        {
            name: 'artMuseum',
            text: 'staring at paintings at the cleveland Museum of art',
            image: 'test2.png'
        },
        {
            name: 'read',
            text: 'reading the new palahniuk novel',
            image: 'test.png'
        },
        {
            name: 'netflix',
            text: 'binging the latest netflix original',
            image: 'test2.png'
        },
        {
            name: 'weezer',
            text: 'listening to Weezer',
            image: 'test2.png'
        },
        {
            name: 'pierogies',
            text: 'Eating Pierogies',
            image: 'test2.png'
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

AC.brush = function(canvas, paint){
    let brush = {};
    let interestIndex;
    function changeBackgroundImage(element, image){
        let str = window.getComputedStyle(element, null).background;
        let strStart = str.indexOf('url');
        let strEnd =str.indexOf(')', strStart);
        str = str.slice(0, strStart + 5) + image + str.slice(strEnd - 1);
        element.style.background = str;
        if(element.className.indexOf('js_frame_before') !== -1){
            let str2 = window.getComputedStyle(element, 'before').background;
            let strStart2 = str2.indexOf('url');
            let strEnd2 =str2.indexOf(')', strStart2);
            str2 = str2.slice(0, strStart2 + 5) + image + str2.slice(strEnd2 - 1);
            document.styleSheets[0].addRule('.' + element.className.slice(0, element.className.indexOf(' ')) + ':before', 'background: ' + str2);
            document.styleSheets[0].insertRule('.' + element.className.slice(0, element.className.indexOf(' ')) + ':before { background: ' + str2 + ' }', 0);
        }
        if(element.className.indexOf('js_frame_after') !== -1){
            let str3 = window.getComputedStyle(element, 'after').background;
            let strStart3 = str3.indexOf('url');
            let strEnd3 =str3.indexOf(')', strStart3);
            str3 = str3.slice(0, strStart3 + 5) + image + str3.slice(strEnd3 - 1);
            document.styleSheets[0].addRule('.' + element.className.slice(0, element.className.indexOf(' ')) + ':after', 'background: ' + str3);
            document.styleSheets[0].insertRule('.' + element.className.slice(0, element.className.indexOf(' ')) + ':after { background: ' + str3 + ' }', 0);
        }
    }
    Array.prototype.forEach.call(canvas.form.interestText, function(stroke, index, array){
        stroke.textContent = paint.interests[index].text;
        interestIndex = index;
    });
    Array.prototype.forEach.call(canvas.interaction.changeInterests, function(thought){
        thought.onclick = function(event){
            let group = this.getAttribute('data-attr-interest-group');
            const randomKey = Math.floor(Math.random() * Object.keys(canvas.form.primedFrames).length + 1).toString();
            for(var i = 0; i < canvas.form.interestText.length; i++){
                if (group === canvas.form.interestText[i].getAttribute('data-attr-interest-group')){
                    interestIndex = Math.floor(Math.random() * paint.interests.length);
                    canvas.form.interestText[i].textContent = paint.interests[interestIndex].text;
                }
            }
            canvas.form.primedFrames[randomKey].forEach(function(element){
                changeBackgroundImage(element, paint.interests[interestIndex].image);
            });
        }
    });
    brush.primeCanvas = function(){
        canvas.form.primedFrames = {};
        Array.prototype.forEach.call(canvas.form.displayFrames, function(frame){
            if(canvas.form.primedFrames[frame.getAttribute('data-attr-frame-group')]){
                canvas.form.primedFrames[frame.getAttribute('data-attr-frame-group')].push(frame);
            } else{
                canvas.form.primedFrames[frame.getAttribute('data-attr-frame-group')] = [frame];
            }
        });
    }
    return brush;
}(AC.canvas, AC.paint);
AC.brush.primeCanvas();
