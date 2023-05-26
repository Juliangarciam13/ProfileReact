import React from "react";
import usersData from "./usersData";

const Users1 = () => {
    let currentIndex = 0; 

    const infoUsers = () => {
        const card = document.getElementsByClassName("Card")[0];
        currentIndex = (currentIndex + 1) % usersData.length; 

        const user = usersData[currentIndex]; 

        card.innerHTML = `
        <ul>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>
        </ul>
    `;
    };

    return (
        <div>
            <button id="ButtonUsers" onClick={infoUsers}>
                USERS
            </button>
            <div className="Card"></div>
        </div>
    );
};

export default Users1;





/* El Users1 componente se define como un componente funcional mediante la sintaxis de la función de flecha.
La currentIndex variable se declara fuera de la función del componente mediante la let palabra clave. Almacenará 
el índice actual del usuario que se muestra.
La infoUsers función está definida. Esta función se activará cuando se haga clic en el botón para actualizar la 
información del usuario. Dentro de la infoUsersfunción, se currentIndex incrementa en 1 y se envuelve dentro de 
los límites de la usersDatalongitud de la matriz mediante el operador de módulo ( %). Esto garantiza que el índice
siga siendo válido incluso si llega al final de la matriz, lo que permite a los usuarios desplazarse por la lista.
A la user variable se le asigna el objeto de usuario de la usersData matriz en función del archivo currentIndex. Esto 
representa al usuario cuya información se mostrará.
A la card variable se le asigna el primer elemento con el nombre de clase "Tarjeta" usando document.getElementsByClassName. 
Este elemento representa la tarjeta donde se mostrará la información del usuario.
La innerHTMLpropiedad del cardelemento se actualiza con una cadena de plantilla que contiene una lista desordenada ( <ul>) 
que muestra el nombre, la edad y el correo electrónico del usuario. Los valores se interpolan dinámicamente utilizando las 
propiedades del userobjeto.
El código JSX dentro de la returninstrucción representa la estructura de la interfaz de usuario del componente.
Consta de un <div>elemento que envuelve el botón y la tarjeta.
El botón se representa con el texto "USUARIOS" y un onClickcontrolador de eventos asignado a la infoUsersfunción.
La tarjeta está representada por un <div>elemento con el nombre de clase "Card". Inicialmente, está vacío y se actualizará dinámicamente 
cuando se haga clic en el botón.*/