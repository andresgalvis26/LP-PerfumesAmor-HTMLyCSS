(function(){

    const titleQuestions = [...document.querySelectorAll('.questions-title')]
    //console.log(titleQuestions)

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {

            let height = 0;

            // Obtener el siguiente elemento hermano
            let answer = question.nextElementSibling;

            // Subir dos niveles de questions-title a questions-padding
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions-padding--add')

            question.children[0].classList.toggle('questions-arrow--rotate')
            
            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    })

})();