        document.getElementById('myForm').addEventListener('submit',function(event) {
            event.preventDefault();
            alert("Form Submitted");

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            if (!fullname) {
                alert("You need a name.");
                return;
            }

            if (!email) {
                alert("You need a email.");
                return;
            }
            
            if (!phone) {
                alert("You need a phone.");
                return;
            }

            if (!password) {
                alert("You need a password.");
                return;
            }
        });