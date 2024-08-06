document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('login-btn').addEventListener('click', function(event) {
        event.preventDefault();
        openModal('login-modal');
    });

    
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            Swal.fire({
                icon: 'success',
                title: 'Logged in successfully!',
                text: `Welcome, ${username}!`
            }).then(() => {
               
                closeModal('login-modal');
                
               
                document.getElementById('greeting-text').textContent = `Hi ${username}, feeling hungry?`;
                
               
                openModal('greeting-modal');

             
                setTimeout(() => {
                    closeModal('greeting-modal');
                    
                 
                    document.getElementById('login-btn').innerHTML = `<i class="fa-solid fa-user"></i> ${username} `;
                }, 3200);
            });

          
            this.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter both username and password!'
            });
        }
    });

   
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

  
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }


    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });
});
document.querySelector('.home-box').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.addEventListener('DOMContentLoaded', function() {
    
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

   
    document.querySelector('.pick-box img[alt="Biriyani"]').addEventListener('click', function() {
        scrollToSection('biriyani-table');
    });
    
    document.querySelector('.pick-box img[alt="Meals"]').addEventListener('click', function() {
        scrollToSection('meals-table');
    });

    
    document.querySelector('.pick-box img[alt="Tiffin"]').addEventListener('click', function() {
        scrollToSection('tiffin-table');
    });
    document.querySelector('.pick-box img[alt="Italian"]').addEventListener('click', function() {
        scrollToSection('italian-table');
    });
    document.querySelector('.pick-box img[alt="Chinese"]').addEventListener('click', function() {
        scrollToSection('chinese-table');
    });
    document.querySelector('.pick-box img[alt="Arabian"]').addEventListener('click', function() {
        scrollToSection('arabian-table');
    });

    
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('show'); 
        modal.querySelector('input').focus(); 
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('show'); 
    }

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });

    document.querySelector('.home-box').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



document.addEventListener('DOMContentLoaded', function() {
   
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function handleSearch() {
        const searchTerm = document.querySelector('.search-box input').value.toLowerCase().trim();

        const restaurantIds = {
            'royal biriyani': 'biriyani-table',
            'spicy biriyani': 'biriyani-table',
            'classic biriyani': 'biriyani-table',
            'flavoursome biriyani': 'biriyani-table',
            'deluxe biriyani': 'biriyani-table',
            'meal mania': 'meals-table',
            'comfort meals': 'meals-table',
            'meals delight': 'meals-table',
            'delicious meals': 'meals-table',
            'meals & more': 'meals-table',
            'tiffin treats': 'tiffin-table',
            'snacks galore': 'tiffin-table',
            'quick tiffin': 'tiffin-table',
            'tiffin corner': 'tiffin-table',
            'happy tiffin': 'tiffin-table',
            'great wall bistro': 'chinese-table',
            'china town': 'chinese-table',
            'dragon’s delight': 'chinese-table',
            'mandarin palace': 'chinese-table',
            'wok wonders': 'chinese-table',
            'little italy': 'italian-table',
            'pizza palace': 'italian-table',
            'spaghetti house': 'italian-table',
            'pasta point': 'italian-table',
            'italian bistro': 'italian-table',
            'desert oasis': 'arabian-table',
            'sands of time': 'arabian-table',
            'arabian nights': 'arabian-table',
            'shawarma corner': 'arabian-table',
            'falafel house': 'arabian-table'
        };

        let found = false;

        for (const [restaurantName, tableId] of Object.entries(restaurantIds)) {
            if (searchTerm === restaurantName.toLowerCase()) {
                scrollToSection(tableId);
                found = true;
                break;
            }
        }

        if (!found) {
            Swal.fire({
                title: "Restaurant Not Found",
                text: "The restaurant you searched for is not available.",
                icon: "question"
            });
        }
    }

    document.getElementById('search-icon').addEventListener('click', handleSearch);
    document.querySelector('.search-box input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
    document.querySelector('.pick-box img[alt="Biriyani"]').addEventListener('click', function() {
        scrollToSection('biriyani-table');
    });

    document.querySelector('.pick-box img[alt="Meals"]').addEventListener('click', function() {
        scrollToSection('meals-table');
    });

    document.querySelector('.pick-box img[alt="Tiffin"]').addEventListener('click', function() {
        scrollToSection('tiffin-table');
    });

    document.querySelector('.pick-box img[alt="Chinese"]').addEventListener('click', function() {
        scrollToSection('chinese-table');
    });

    document.querySelector('.pick-box img[alt="Italian"]').addEventListener('click', function() {
        scrollToSection('italian-table');
    });

    document.querySelector('.pick-box img[alt="Arabian"]').addEventListener('click', function() {
        scrollToSection('arabian-table');
    });
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('show'); 
        modal.querySelector('input').focus(); 
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('show'); 
    }

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });

    document.querySelector('.home-box').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



document.querySelectorAll('.order-now').forEach(button => {
    button.addEventListener('click', event => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.order-item-btn').forEach(button => {
    button.addEventListener('click', event => {
        const itemPrice = parseFloat(event.target.getAttribute('data-price'));
        const gstAmount = itemPrice * 0.18;
        const totalPrice = itemPrice + gstAmount;

        document.getElementById('item-price').textContent = `Price: ₹${itemPrice.toFixed(2)}`;
        document.getElementById('gst-amount').textContent = `GST (18%): ₹${gstAmount.toFixed(2)}`;
        document.getElementById('total-price').textContent = `Total: ₹${totalPrice.toFixed(2)}`;

        document.getElementById('paymentModal').style.display = 'block';
    });
});

document.getElementById('confirmPayment').addEventListener('click', () => {
    Swal.fire({
        title: 'Do you want to confirm the payment?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        denyButtonText: `Don't Confirm`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Payment Confirmed!', '', 'success');
            document.getElementById('paymentModal').style.display = 'none';
        } else if (result.isDenied) {
            Swal.fire('Payment not confirmed', '', 'info');
        }
    });
});

    document.querySelectorAll('.order-now').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                openModal(modalId);
            }
        });
    });


    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });



