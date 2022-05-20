function foo1() {

    i1 = document.querySelector("input[name='first-form__input']:checked").value;

    i2 = document.querySelector("input[name='second-form__input']:checked").value;

    alert(i1 + i2);
}