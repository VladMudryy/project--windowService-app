import {checkDigits} from '../services/services';

function changeModalState(state) {
    const balconForm = document.querySelectorAll('.balcon_icons_img'),
          balconWidth = document.querySelectorAll('#width'),
          balconHeight = document.querySelectorAll('#height'),
          balconProfile = document.querySelectorAll('#view_type'),
          balconType = document.querySelectorAll('.checkbox');

    checkDigits('#width');
    checkDigits('#height');

    function bindActionToElem(event, elem, itemName) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN': 
                        state[itemName] = i;
                        break;
                    case 'INPUT': 
                        if (item.getAttribute('type') === 'checkbox') {
                            if (i === 0) {
                                state[itemName] = 'Cold';
                            } else {
                                state[itemName] = 'Warm';
                            }
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[itemName] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[itemName] = item.value;
                        break;
                }
            });
        });
    }
    
    bindActionToElem('click', balconForm, 'form');
    bindActionToElem('input', balconWidth, 'width');
    bindActionToElem('input', balconHeight, 'height');
    bindActionToElem('change', balconProfile, 'profile');
    bindActionToElem('change', balconType, 'type');
    console.log(state);
}

export default changeModalState;