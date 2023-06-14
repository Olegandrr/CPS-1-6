const callOpenButton = document.querySelectorAll(".button--call--img");
const callDialog = document.getElementById('call-dialog');
const callCloseButton = document.querySelector('.call__close-btn');

export function callDialogOpen() {
  for (let i=0; i<callOpenButton.length; i++) {
    const variableValue = callOpenButton[i];
    variableValue.addEventListener('click', () => {
      callDialog.showModal();
    })
  };
};

export function callDialogClose() {callCloseButton.addEventListener('click', () => {
  callDialog.close();
})
};