let surname = document.getElementById('surname');
        let userName = document.getElementById('nameUser');
        let patronymic = document.getElementById('patronymic');
        let user = document.getElementById('user');

        user.addEventListener('input', function (event) {
            let valueUser = event.target.value;
            let arrUser = valueUser.trim().replace(/\s+/g, " ").split(" ")

            let valueSurname = surname.value = arrUser[0];
            let valueSurnameRight = valueSurname[0].toUpperCase() + valueSurname.slice(1).toLowerCase();
            surname.value = valueSurnameRight;

            let valueName = nameUser.value = arrUser[1];
            let valueNameRight = valueName[0].toUpperCase() + valueName.slice(1).toLowerCase();
            nameUser.value = valueNameRight;

            let valuePatronymic = patronymic.value = arrUser[2];
            let valuePatronymicRight = valuePatronymic[0].toUpperCase() + valuePatronymic.slice(1).toLowerCase();
            patronymic.value = valuePatronymicRight;
        })

        // function cancel(event){
        //     event.preventDefault();
        // }