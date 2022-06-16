let arrow =document.querySelectorAll(".arrow")
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;
                console.log(arrowParent);
                arrowParent.classList.toggle("showMenu");
            });
        }



        const menu = document.getElementById('menu-label');
        const sidebar = document.getElementsByClassName('sidebar')[0];

        menu.addEventListener('click', function(){
        sidebar.classList.toggle('close');
        console.log('ok');
        })
       