let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');
let checkBX = document.querySelector('#div4 input')
let bal = document.querySelector('#yb')
let qiymet = document.querySelector('#yq')
let ksq40 = document.querySelector('#ksq40')
let bsq60 = document.querySelector('#bsq60')
let disp = document.querySelectorAll('.display')
let yi = document.querySelectorAll('.illik input')

// let bsq = document.querySelector('#pointBSQ input')



for (let i = 0; i < qty.value; i++) {
    createInput();

}

addBtn.addEventListener('click', () => {
    if (qty.value >= 6) {
        qty.value = 6;
    } else {
        qty.value = parseInt(qty.value) + 1;
        createInput();
    }

});

subBtn.addEventListener('click', () => {
    if (qty.value <= 2) {
        qty.value = 2;
    } else {
        qty.value = parseInt(qty.value) - 1;
        removeInput();
    }

});

function createInput() {

    let newDiv = document.createElement('div')
    let newH1 = document.createElement('h1')
    let newInput = document.createElement('input')

    newH1.innerText = 'KSQ balı'

    newDiv.append(newH1, newInput)

    pointsKSQ.appendChild(newDiv)
}

function removeInput() {
    pointsKSQ.lastChild.remove()
}

function checkBSQ() {

    switch (checkBX.checked) {
        case true:
            // pointBSQ.style.display = 'block'
            pointBSQ.innerHTML = `<div><h1>BSQ balı</h1><input type="number"></div>`;
            disp.forEach(element => {
                element.style.display = 'table-row'
            });
            break;

        default:
            pointBSQ.lastChild.remove();
            disp.forEach(element => {
                element.style.display = 'none'
            });
            break;
    }
    siltxt();
}

function hesabla() {
    var x = true
    // let xanalar = document.querySelectorAll('input')
    let ballar = document.querySelectorAll('.ballar input')

    ballar.forEach(element => {
        if (element.value.length == 0) {
            x = false
        }
    });
    bal.innerText = ""
    if (x == true) {

        let a = 0
        for (let i = 0; i < ballar.length; i++) {
            a += Number(ballar[i].value)

        }
        let b = a / ballar.length

        // console.log(a)
        // console.log(b)

        switch (checkBX.checked) {
            case true:
                let bsq = document.querySelector('#pointBSQ input')
                let c = Number(bsq.value)
                bal.innerText = Math.round(((b * 0.4) + (c * 0.6)) * 10) / 10
                ksq40.innerText = Math.round(b * 0.4 * 10) / 10
                bsq60.innerText = Math.round(c * 0.6 * 10) / 10
                break;

            default:
                bal.innerText = Math.round(b * 10) / 10
                // bal.innerText = b
                ksq40.innerText = ''
                bsq60.innerText = ''
                break;
        }


        let d = Number(bal.innerText)

        if (0 < d && d <= 30) {
            qiymet.innerText = 2
        } else if (30 < d && d <= 60) {
            qiymet.innerText = 3
        } else if (60 < d && d <= 80) {
            qiymet.innerText = 4
        } else if (80 < d && d <= 100) {
            qiymet.innerText = 5
        } else {
            qiymet.innerText = ''
        }

        // console.log()



    } else {
        alert('Bütün xanaları doldurun')
    }

}

function sil() {
    let ballar = document.querySelectorAll('.ballar input')
    ballar.forEach(element => {
        element.value = ''
    });
    siltxt()

}

function siltxt() {
    bal.innerText = ''
    qiymet.innerText = ''
    ksq40.innerText = ''
    bsq60.innerText = ''
}

function illikhes() {

    if (yi[0].value.length == 0 && yi[1].value.length == 0) {
        alert('Yarımillik qiymətləri daxil edin')
        
    }else{
        ib.innerText = (Number(yi[0].value) + Number(yi[1].value))/2
        let d = Number(ib.innerText)
    
        if (0 < d && d <= 30) {
            iq.innerText = 2
        } else if (30 < d && d <= 60) {
            iq.innerText = 3
        } else if (60 < d && d <= 80) {
            iq.innerText = 4
        } else if (80 < d && d <= 100) {
            iq.innerText = 5
        } else {
            iq.innerText = ''
        }

    }
}
function illiksil() {
    yi[0].value = ''
    yi[1].value = ''
    ib.innerText = ''
    iq.innerText = ''

}