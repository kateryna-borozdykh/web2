function runForm() {
    const formEl = document.getElementById('form');

    const validationMap = {
        pib: /^[A-ZА-Я]{1}[A-Za-zА-Яа-я]{0,20}\s[A-ZА-Я]{1}\.[A-ZА-Я]{1}\.$/,
        tel: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        variant: /^\d{2}$/,
        faculty: /^\w{4}$/,
        address: /^м\.\s[А-Яа-я].*$/,
    };

    formEl.addEventListener('change', (e) => {
        e.target.removeAttribute('style');
    });

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEls = Array.from(e.target.querySelectorAll('input'));

        inputEls.forEach((input) => {
            if (!validationMap[input.name].test(input.value)) {
                input.style = 'border-color: red';
            }
        });
    });
}

function runBox() {
    const VARIANT = 7;
    const CELLS_COUNT = 36;

    const boxEl = document.getElementById('box');
    const palletEl = document.getElementById('pallet');

    for (let i = 0; i < CELLS_COUNT; i++) {
        const divEl = document.createElement('div');
        divEl.innerHTML = i + 1;

        boxEl.appendChild(divEl);
    }

    boxEl.addEventListener('click', function (e) {
        const el = this.children[VARIANT - 1];

        if (e.target == el) {
            e.target.style = `background: ${palletEl.value}`;
            e.target.classList.add('js-clicked');
        }
    });

    boxEl.addEventListener('mousemove', function (e) {
        const el = this.children[VARIANT - 1];

        if (el.classList.contains('js-clicked')) {
            return;
        }

        if (e.target === el && !e.target.getAttribute('style')) {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            e.target.style = `cursor:pointer; background: #${randomColor}`;
        } else if (e.target !== el) {
            el.removeAttribute('style');
        }
    });

    boxEl.addEventListener('dblclick', function (e) {
        let cell = e.target;
        let r;
        for (let i = 0; i < 6; i++) {
            if (cell == this.children[i]) {
                r = 0;
            }
        }

        for (let i = 6; i < 11; i++) {
            if (cell == this.children[i]) {
                r = 1;
            }
        }

        for (let i = 12; i < 17; i++) {
            if (cell == this.children[i]) {
                r = 2;
            }
        }

        for (let i = 18; i < 23; i++) {
            if (cell == this.children[i]) {
                r = 3;
            }
        }

        for (let i = 24; i < 29; i++) {
            if (cell == this.children[i]) {
                r = 4;
            }
        }

        for (let i = 29; i < 35; i++) {
            if (cell == this.children[i]) {
                r = 5;
            }
        }


        cell.let
        line = Math.trunc(cell / 6);
        let r0 = [0, 1, 2, 3, 4, 5];
        let r1 = [6, 7, 8, 9, 10, 11];
        let r2 = [12, 13, 14, 15, 16, 17];
        let r3 = [18, 19, 20, 21, 22, 23];
        let r4 = [24, 25, 26, 27, 28, 29];
        let r5 = [30, 31, 32, 33, 34, 35];
        let arr = [r0, r1, r2, r3, r4, r5];

        for (let i = r; i < 6; i += 2) {
            let row = arr[i];
            for (let j = 0; j < 6; j++) {
                let n = row[j];
                this.children[n].style = `background: ${palletEl.value}`;
            }
        }
        this.children;
    });
}

(function () {
    runForm();
    runBox();
})();
