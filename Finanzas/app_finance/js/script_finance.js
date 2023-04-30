const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const logoutElement = document.querySelector('.sidebar .logout');

logoutElement.addEventListener('click', () => {
  fetch('http://localhost:3000/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  })
  .then(data => {
    console.log(data);
    window.location.href = '/login/login.html';
  })
  .catch(error => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Try again</a>'
  }))
});

// Obtener todos los enlaces <a> en la barra lateral
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Obtener el elemento con la clase "middle"
const middleElement = document.querySelector('.middle');
const firstOperationElement = document.querySelector('.first_operation');
const secondOperationElement = document.querySelector('.second_operation');
const thirdOperationElement = document.querySelector('.third_operation');
const quarterOperationElement = document.querySelector('.quarter_operation');
const fifthOperationElement = document.querySelector('.fifth_operation');
const sixthOperationElement = document.querySelector('.sixth_operation');
const seventhOperationElement = document.querySelector('.seventh_operation');

//Al iniciar la pagina los estilos de todos son bloqueados menos el middleElement
middleElement.style.display = 'block';
firstOperationElement.style.display = 'none';
secondOperationElement.style.display = 'none';
thirdOperationElement.style.display = 'none';
quarterOperationElement.style.display = 'none';
fifthOperationElement.style.display = 'none';
sixthOperationElement.style.display = 'none';
seventhOperationElement.style.display = 'none';

// Agregar un controlador de eventos de clic a cada enlace <a> excepto el enlace "Logout"
sidebarLinks.forEach(link => {
  // Verificar si el enlace <a> actual tiene la clase "logout"
  if (!link.classList.contains('logout')) {
    link.addEventListener('click', event => {
      // Verificar si el enlace <a> que se hizo clic ya tiene la clase "active"
      if (!event.currentTarget.classList.contains('active')) {
        // Eliminar la clase "active" del enlace <a> actualmente activo
        document.querySelector('.sidebar a.active').classList.remove('active');
        
        // Agregar la clase "active" al enlace <a> que se hizo clic
        event.currentTarget.classList.add('active');
      }
      
      // Verificar si se hizo clic en el enlace "Exchange"
      if (event.currentTarget.querySelector('h4').textContent === 'Exchange') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'block';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Dashboard"
      if (event.currentTarget.querySelector('h4').textContent === 'Dashboard') {
        // Mostrar el elemento con la clase "middle"
        middleElement.style.display = 'block';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Wallet"
      if (event.currentTarget.querySelector('h4').textContent === 'Wallet') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'block';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Transactions"
      if (event.currentTarget.querySelector('h4').textContent === 'Transactions') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'block';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Analytics"
      if (event.currentTarget.querySelector('h4').textContent === 'Analytics') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'block';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Messages"
      if (event.currentTarget.querySelector('h4').textContent === 'Messages') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'block';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'none';
      }

      // Verificar si se hizo clic en el enlace "Help Center"
      if (event.currentTarget.querySelector('h4').textContent === 'Help Center') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'block';
        seventhOperationElement.style.display = 'none';
      }
      
      // Verificar si se hizo clic en el enlace "Settings"
      if (event.currentTarget.querySelector('h4').textContent === 'Settings') {
        // Ocultar el elemento con la clase "middle"
        middleElement.style.display = 'none';
        firstOperationElement.style.display = 'none';
        secondOperationElement.style.display = 'none';
        thirdOperationElement.style.display = 'none';
        quarterOperationElement.style.display = 'none';
        fifthOperationElement.style.display = 'none';
        sixthOperationElement.style.display = 'none';
        seventhOperationElement.style.display = 'block';
      }

    });
  }
});

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})



// change theme
const themeBtn = document.querySelector('.theme-btn');
// Obtener el elemento <img> del logotipo
const logoImg = document.querySelector('.logo');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');

    // Verificar si el cuerpo del documento tiene la clase "dark-theme"
    if (document.body.classList.contains('dark-theme')) {
      // Cambiar el atributo src del elemento <img> del logotipo a la imagen del tema oscuro
      logoImg.src = './images/logo2.png';
    } else {
      // Cambiar el atributo src del elemento <img> del logotipo a la imagen del tema claro
      logoImg.src = './images/logo.png';
    }
})