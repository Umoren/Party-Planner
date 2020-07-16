  const firstListItem = document.querySelector('.fir');
        const secondListItem = document.querySelector('.sec');
        const thirdListItem = document.querySelector('.thir');
        const plan1 = document.querySelector('#one');
        const plan2 = document.querySelector('#two');
        const plan3 = document.querySelector('#three');
       
        firstListItem.addEventListener('click', (e) => {
            e.preventDefault()
            firstListItem.classList.toggle('active')
           plan1.classList.toggle('d-block')
           
        });

        secondListItem.addEventListener('click', (e) => {
            e.preventDefault()
           secondListItem.classList.toggle('active')
           plan2.classList.toggle('d-block')
        });

        thirdListItem.addEventListener('click', (e) => {
            e.preventDefault()
            thirdListItem.classList.toggle('active')
           plan3.classList.toggle('d-block')
        });