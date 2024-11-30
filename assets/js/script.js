window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });

    document.querySelector('.code').addEventListener('click', () =>{
        var button = document.querySelector('.code');
        button.select();
        document.execCommand("copy");
        document.querySelector('.modal-copied').classList.add('visible');
        setTimeout(() => {
            document.querySelector('.modal-copied').classList.remove('visible');
        }, 3000)
    })

    document.querySelectorAll('.roadmap-point').forEach(el => {
        el.addEventListener('click', () => {
            swapWindow(el.dataset.step)
        })
    });

    function swapWindow(num){
        document.querySelectorAll('.roadmap-point').forEach(el => {
            if(el.dataset.step == num){
                el.classList.add('active');
            }
            else{
                el.classList.remove('active');
            }
        })
        document.querySelectorAll('.roadmap-item').forEach(el => {
            if(el.dataset.window == num){
                el.classList.add('visible');
            }
            else{
                el.classList.remove('visible');
            }
        })
    }

    var i = 0;
    var txt = document.querySelector('#writing-header').dataset.text;
    var speed = 25;

    function typeWriter() {
    if (i < txt.length) {
        document.querySelector('#writing-header').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }

    typeWriter()

    const comingButton = document.querySelectorAll('.coming-notify');
    comingButton.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.modal').classList.add('visible');
            setTimeout(() => {
                document.querySelector('.modal').classList.remove('visible');
            }, 3000)
        });
    });
})