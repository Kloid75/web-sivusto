console.log("keskustelusivu avattu")
function send(e) {
    e.preventDefault();
    let birthdayField = e.target.form.syntymäpäivä.value;
    console.log(birthdayField);
    let emailField = e.target.form.sähköposti.value;
    console.log(emailField);
    let typeField = e.target.form.valinta.value;
    console.log(typeField);
    let usageField = e.target.form.check.value;
    console.log(usageField);
    let bodyField = e.target.form.kommentti.value;
    console.log(bodyField);
}