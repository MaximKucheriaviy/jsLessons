class counter {
    setValue = () => {
        this.valueField.textContent = this.value;
    }

    increment = () => {
        this.value += this.step;
        this.setValue();
    }   
    
    decrement = () => {
        this.value -= this.step;
        this.setValue();
    }  

    constructor(divPointer, step, initialValue) {
        this.incremetButton = document.querySelector(divPointer).querySelector('[data-increment]');
        this.decrementButton = document.querySelector(divPointer).querySelector('[data-decrement]');
        this.valueField = document.querySelector(divPointer).querySelector('[data-field]');
        this.step = step;
        this.value = initialValue;
        this.setValue();
        this.incremetButton.onclick = this.increment;
        this.decrementButton.onclick = this.decrement;
    }
}


const c1 = new counter('.counter', 2, 2);
const c2 = new counter('.counter1', 10, 0);