
        const zebra = document.querySelector('.animal1');
        const lion = document.querySelector('.animal2');
        const eleph = document.querySelector('.animal3');

        console.log(zebra,lion,eleph)
        console.log(
            'zebra Y : ', zebra.offsetTop, 
            'zebra X : ', zebra.offsetLeft
        )
        
        console.log(
            'lion Y : ', lion.offsetTop, 
            'lion X : ', lion.offsetLeft
        )

        console.log(
            'eleph Y : ', eleph.offsetTop, 
            'eleph X : ', eleph.offsetLeft
        )

        window.addEventListener('scroll', (e) => {
            let pos = window.scrollY;
            console.log(`now scroll : ${pos}`);
            if( pos > zebra.offsetTop - 300) {
                console.log('zebra위치입니다.') 
                zebra.classList.add('showed');
            } 

            if( pos > lion.offsetTop - 300) {
                lion.classList.add('showed')
            }
            if( pos > eleph.offsetTop - 300) {
                eleph.classList.add('showed')
            }
        })
    