var validator = document.querySelector(".validation-wrapper");
var validator1 = document.querySelector("#icon-1");
var validator2 = document.querySelector("#icon-2");
var validator3 = document.querySelector("#icon-3");
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

var validators = {
    checkForLength: function(value, length) {
        if (value.length >= length) {
            validator1.style.display = "none";
        } else {
            validator1.style.display = "flex";
        }
    },
    checkForSpace: function(keyCode) {
        if (keyCode === 32) {
            validator3.style.display = "flex";
        } else {
            validator3.style.display = "none";
        }
    },
    checkForSpecialChars: function(value) {
        if (format.test(value)) {
            validator2.style.display = "none";
        } else {
            validator2.style.display = "flex";
        }
    }
};

var eventHandler = {
    showValidator: function(params) {
        validator.style.display = "block";
    },
    hideValidator: function(params) {
        validator.style.display = "none";
    },

    change: function(e, params) {
        var value = params.value;
        validators.checkForLength(value, 8);
        validators.checkForSpace(e.keyCode);
        validators.checkForSpecialChars(value);
    }
};
