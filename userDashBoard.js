window.addEventListener('DOMContentLoaded',()=>{
    //get the name of the user from local storage and display in the application bar
    const userName = JSON.parse(localStorage.getItem('activeUser')).username.toUpperCase()
    const selectedCourse = JSON.parse(localStorage.getItem('activeUser')).selectedCourse
    let userNameDiv = document.getElementById('userName')
    userNameDiv.textContent = userName

    //display the card based on the selected course
    displayCard(selectedCourse)

})

displayCard=(selectedCourse)=>{
    if(selectedCourse == 'Web Design'){
        let card = document.querySelector('.webDesignCard')
        card.classList = 'col webDesignCard'
    }
    else if(selectedCourse == 'App Development'){
        let card = document.querySelector('.appDevelopmentCard')
        card.classList = 'col appDevelopmentCard'
    }
    else if(selectedCourse == 'Digital Marketing'){
        let card = document.querySelector('.digitalMarketingCard')
        card.classList = 'col digitalMarketingCard'
    }
}